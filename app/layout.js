export const metadata = {
title: ' VIP启航计划 | 智能展示页',
description: '教育点亮人生',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
	<html lang="zh">
	  <head>
		<title>VIP启航计划 | 智能展示页</title>
		<meta name="description" content="教育点亮人生" />
	  </head>
	  <body>
		<header>
		  <h1 class="artistic-title">VIP启航计划</h1>
		  <nav>
			
			<a class="nav-btn faq" href="#faq">_常见问题_</a>
			<a class="nav-btn apply" href="#apply">_立即报名_</a>  
		  </nav>
		</header>
		<main>
		  {children}
		</main>
		<footer>
		  VIP启航计划 | 教育点亮人生
		</footer>
	  </body>
	</html>
  );
}