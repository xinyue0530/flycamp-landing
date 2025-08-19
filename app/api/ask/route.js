import { NextResponse } from 'next/server';
import faq from '../../../data/faq.json';

function keywordAnswer(query){
const q = (query || '').toLowerCase().trim();
if(!q) return '请描述你的问题，例如：如何报名？课程形式是什么？';
const tokens = q.split(/\s+|[，。！？,.!?]/).filter(Boolean);
const scored = faq.map(item=>{
const text = (item.q + ' ' + item.a).toLowerCase();
let score = 0;
tokens.forEach(k=>{ if(text.includes(k)) score += 2; });
if(text.includes(q)) score += 3;
return { item, score };
}).sort((a,b)=>b.score - a.score);
const top = scored.slice(0,2).map(s=>`- ${s.item.q}\n${s.item.a}`).join('\n\n');
return top || '暂未命中相关问题，请尝试换个说法或提更具体的信息。';
}

async function callLLM(query, topContext){
const provider = process.env.LLM_PROVIDER || ''; // 'openai' | 'qwen'
const model = process.env.LLM_MODEL || '';
try{
if(provider==='openai' && process.env.OPENAI_API_KEY){
const res = await fetch('https://api.openai.com/v1/chat/completions',{
method:'POST',
headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENAI_API_KEY}`},
body:JSON.stringify({
model: model || 'gpt-3.5-turbo',
messages:[
{role:'system', content:'我是VIP启航计划官网问答助理。仅依据提供的知识库回答，无法确认的信息请委婉说明并引导咨询邮箱 Ruiyishengxue@163.com。回答精炼、分点呈现。'},
{role:'user', content:`用户问题：${query}\n\n知识库（可能相关）：\n${topContext}`}
],
temperature:0.2
})
});
const data = await res.json();
return data.choices?.[0]?.message?.content?.trim() || null;
}
if(provider==='qwen' && process.env.QWEN_API_KEY){
const res = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',{
method:'POST',
headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.QWEN_API_KEY}`},
body:JSON.stringify({
model: model || 'qwen-plus',
messages:[
{role:'system', content:'我是VIP启航计划官网问答助理。仅依据提供的知识库回答，无法确认的信息请委婉说明并引导咨询邮箱。回答精炼、分点呈现。'},
{role:'user', content:`用户问题：${query}\n\n知识库（可能相关）：\n${topContext}`}
],
temperature:0.2
})
});
const data = await res.json();
return data.choices?.[0]?.message?.content?.trim() || null;
}
return null;
}catch{
return null;
}
}

export async function POST(req){
const { question } = await req.json();
const base = keywordAnswer(question);
const llm = await callLLM(question, base);
const answer = llm || base;
return NextResponse.json({ answer });
}