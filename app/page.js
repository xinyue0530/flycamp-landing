import Chatbot from './components/Chatbot';

export default function Page(){
return (
<>



<div style={{flex: '1 1 420px'}}>
  <h2 style={{marginBottom: '0.8rem'}}>------教育点亮人生------</h2>
  <h2 style={{marginTop: 0, marginBottom: '0.8rem'}}>------不迷茫的大学，从这里开始------</h2>
  
  <p style={{marginBottom: '1rem'}}>
    <strong>------导师陪跑｜项目驱动｜可视化成长路径------</strong><br /></p>
  <p style={{marginBottom: '1rem'}}>
    <strong>------用一个学期完成“确定方向—系统学习—落地项目—展示作品”的完整闭环------</strong><br />
  </p>
  
  <p style={{fontStyle: 'italic'}}>
    ------有疑问？右下角问答助手可即时解答------<br />
  </p>
</div>


  <section className="container section">
    <h2>我们如何助你成长</h2>
    <div className="grid grid-3" style={{marginTop:16}}>
      <div className="card">
        <strong>清晰规划</strong>
        <p>行动清单与阶段目标，消除学习焦虑。</p>
      </div>
      <div className="card">
        <strong>专业辅导</strong>
        <p>精英教师+陪伴式学长学姐，答疑与项目指导不掉线。</p>
      </div>
      <div className="card">
        <strong>实战项目</strong>
        <p>从选题筛选到作品打磨，产出可展示的成果。</p>
      </div>
    </div>
  </section>

  <section className="container section">
    <h2>真实成果</h2>
    <div className="grid grid-3" style={{marginTop:16}}>
      <div className="card">
        <strong>英语密训营</strong>
        <p>同学A完成雅思，六级密训营，弱项针对性提升。</p>
      </div>
      <div className="card">
        <strong>竞赛辅导</strong>
        <p>同学B获得大英赛，大创，数竞奖项，得到保研名额。</p>
      </div>
      <div className="card">
        <strong>自信表达</strong>
        <p>同学C在保研面试中清晰介绍自己，展示成果。</p>
      </div>
    </div>
  </section>

  <section id="faq" className="container section">
    <h2>常见问题</h2>
    <div className="grid grid-3" style={{marginTop:16}}>
      <div className="card">
        <strong>报名方式</strong>
        <p>在报名入口提交信息并通过审核。</p>
      </div>
      <div className="card">
        <strong>课程形式</strong>
        <p>线上+线下混合：直播、录播、讨论与1v1辅导。</p>
      </div>
      <div className="card">
        <strong>奖学金设置</strong>
        <p>多档奖学金与助学金，表现优秀优先。</p>
      </div>
    </div>
    <p className="small" style={{marginTop:8}}>更多问题欢迎右下角直接提问。</p>
  </section>

  <section id="apply" className="container section">
    <div className="card">
      <h3>立即报名</h3>
      <p>请发送“姓名 + 学校 + 年级 + 方向”至报名邮箱。</p>
      <p><strong>报名/投稿邮箱：</strong>Ruiyishengxue@163.com</p>
      <a className="btn" href="mailto:Ruiyishengxue@163.com">__邮件报名__</a>
    </div>
  </section>

  <Chatbot />
</>
);
}