
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Upload from './pages/Upload.tsx';
import Analysis from './pages/Analysis.tsx';
import Dashboard from './pages/Dashboard.tsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Upload />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Fallback for components not yet implemented in this demo */}
            <Route path="/gallery" element={<div className="flex items-center justify-center min-h-[50vh] text-slate-400 font-medium">案例展示页面开发中...</div>} />
            <Route path="/community" element={<div className="flex items-center justify-center min-h-[50vh] text-slate-400 font-medium">设计师社区页面开发中...</div>} />
            <Route path="/select-service" element={<div className="flex items-center justify-center min-h-[50vh] text-slate-400 text-center px-4 font-medium">服务选择流程已确认，<br/>接下来的支付模块正在对接。</div>} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-indigo-600 p-1.5 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">衣生RevBox</span>
                </div>
                <p className="text-sm leading-relaxed mb-8">
                  AI驱动的旧衣新生循环平台。<br />
                  连接情感故事与可持续理念。<br />
                  三创赛参赛项目作品。
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">服务中心</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">精准新生</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">惊喜新生</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">改造工作坊</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">合作加盟</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">关于我们</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">品牌故事</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">可持续承诺</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">加入我们</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">关注我们</h4>
                <div className="flex gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                      <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-500">
                  © 2024 衣生RevBox Project.<br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
