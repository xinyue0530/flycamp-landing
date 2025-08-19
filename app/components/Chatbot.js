'use client';
import { useState, useRef, useEffect } from 'react';

export default function Chatbot(){
const [loading,setLoading]=useState(false);
const [input,setInput]=useState('');
const [msgs,setMsgs]=useState([
{from:'bot', text:'你好！我是腾飞营问答助手，关于报名、课程、奖学金都可以问我～'}
]);
const bodyRef = useRef(null);

useEffect(()=>{
if(bodyRef.current){
bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
}
},[msgs]);

async function ask(){
const q = input.trim();
if(!q) return;
setMsgs(m=>[...m,{from:'me',text:q}]);
setInput('');
setLoading(true);
try{
const res = await fetch('/api/ask',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({question:q})
});
const data = await res.json();
setMsgs(m=>[...m,{from:'bot',text:data.answer || '抱歉，我暂时无法回答，请稍后再试。'}]);
}catch{
setMsgs(m=>[...m,{from:'bot',text:'网络异常或服务繁忙，请稍后重试。'}]);
}finally{
setLoading(false);
}
}

return (
  <div className="chatbot-container">
	<h2>腾飞营问答助手</h2>
	<div className="chat-body" ref={bodyRef} style={{overflowY: 'auto', maxHeight: 300, marginBottom: 16}}>
	  {msgs.map((m, i) => (
		<div key={i} className={`msg ${m.from === 'me' ? 'me' : 'bot'}`}>{m.text}</div>
	  ))}
	  {loading && (
		<div className="msg bot">AI正在思考…</div>
	  )}
	</div>
	<div className="chat-input-row" style={{display: 'flex', gap: 8}}>
	  <input
		type="text"
		value={input}
		onChange={e => setInput(e.target.value)}
		onKeyDown={e => { if (e.key === 'Enter') ask(); }}
		placeholder="请输入你的问题，如：如何报名？"
		aria-label="问题输入框"
		style={{flex: 1}}
		disabled={loading}
	  />
	  <button onClick={ask} disabled={loading || !input.trim()}>
		{loading ? '发送中…' : '发送'}
	  </button>
	</div>
  </div>
);
}