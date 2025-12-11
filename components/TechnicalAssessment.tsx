import React from 'react';

const TechnicalAssessment = () => {
  return (
    <div className="flex flex-col h-full bg-tech-bg-light font-display text-tech-text-main overflow-hidden">
      
      {/* Top Navigation */}
      <header className="h-16 flex-none flex items-center justify-between px-6 border-b border-tech-accent-beige bg-tech-bg-light z-10">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-tech-primary/10 rounded-lg flex items-center justify-center text-tech-primary">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <div>
            <h1 className="text-tech-text-main text-base font-bold leading-tight">CareerFlow AI</h1>
            <p className="text-tech-text-muted text-xs font-medium">Technical Assessment</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8 flex-1 justify-center max-w-2xl">
          <div className="flex flex-col w-full max-w-xs gap-1.5">
            <div className="flex justify-between items-end">
              <span className="text-xs font-semibold text-tech-text-main">Question 2 of 5</span>
              <span className="text-xs text-tech-text-muted">40% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-tech-accent-beige rounded-full overflow-hidden">
              <div className="h-full bg-tech-primary w-[40%] rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-tech-text-muted bg-tech-accent-beige/50 px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">timer</span>
            <span className="text-sm font-mono font-medium">14:20 left</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
        </div>
      </header>

      {/* Main Content Split View */}
      <main className="flex flex-1 h-[calc(100vh-104px)] overflow-hidden"> {/* Adjusted height for parent nav */}
        
        {/* Left Pane: The Interviewer (30%) */}
        <section className="w-[30%] min-w-[320px] flex flex-col border-r border-tech-accent-beige bg-tech-bg-light relative z-0">
          {/* Persona Header */}
          <div className="p-5 border-b border-tech-accent-beige bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    alt="Technical Lead Persona" 
                    className="w-full h-full object-cover grayscale-[20%]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu7SVHl0ENz7AHZnxb6yKrGbyHAoyCfyjdmT5P3sKTXCU7RcTNFCZvI_uYvTQqJa_MBX58OZfewVDI2keJXjiSNnSxk8-3HTpPRn8LPk-Pbkmd9zZy9EchzBpCgV5uL7kRnaqRD3YgLrROwTMUYgy5KUU6JVDWK4k4A4tJJNCyv5O0aN8_j5oYvIo-NVth4BWCndQ45hks6kCNCox9Oq75XAUtRWKA6V9NJWwQF7NHpt8w4_liHInAiDxfHifm6GNZDRssj--FRP8" 
                  />
                </div>
                <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-tech-text-main font-bold text-sm">The Technical Lead</h2>
                <p className="text-tech-text-muted text-xs">Senior Backend Engineer @TechCorp</p>
              </div>
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth">
            {/* AI Message 1 */}
            <div className="flex gap-3">
              <div className="flex-none flex flex-col items-center gap-1">
                <div className="size-8 rounded-full bg-tech-accent-beige flex items-center justify-center text-tech-text-muted">
                  <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="bg-white border border-tech-accent-beige p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-tech-text-main leading-relaxed max-w-[90%]">
                  <p>Hello! I see you've started with the naive approach. That's a good baseline.</p>
                </div>
              </div>
            </div>

            {/* AI Message 2 (Current Task) */}
            <div className="flex gap-3">
              <div className="flex-none flex flex-col items-center gap-1">
                <div className="size-8 rounded-full bg-tech-accent-beige flex items-center justify-center text-tech-text-muted">
                  <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="bg-white border border-tech-accent-beige p-4 rounded-xl rounded-tl-none shadow-sm text-sm text-tech-text-main leading-relaxed">
                  <p className="font-medium mb-2">Let's optimize this function.</p>
                  <p>Currently, the time complexity is <span className="font-mono text-xs bg-tech-accent-beige px-1 rounded text-tech-primary">O(n^2)</span>. Can you refactor the <code className="font-mono text-xs font-bold">UserSearch</code> algorithm to achieve <code className="font-mono text-xs font-bold">O(n)</code> or better? Think about using a Hash Map.</p>
                </div>
                <span className="text-[10px] text-tech-text-muted pl-1">Just now</span>
              </div>
            </div>
          </div>

          {/* User Input Area */}
          <div className="p-4 border-t border-tech-accent-beige bg-white">
            <div className="relative group">
              <textarea 
                className="w-full bg-tech-accent-beige/50 border border-transparent focus:border-tech-primary/30 focus:bg-white focus:ring-0 rounded-xl p-3 pl-4 pr-12 text-sm text-tech-text-main placeholder:text-tech-text-muted/70 resize-none h-24 transition-all" 
                placeholder="Explain your approach or ask for a hint..."
              ></textarea>
              <div className="absolute bottom-2 right-2 flex gap-1">
                <button className="p-1.5 hover:bg-tech-accent-beige rounded-lg text-tech-text-muted transition-colors" title="Use Voice">
                  <span className="material-symbols-outlined text-[20px]">mic</span>
                </button>
                <button className="p-1.5 bg-tech-primary hover:bg-tech-primary/90 rounded-lg text-white shadow-sm transition-colors" title="Send Message">
                  <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-1">
              <button className="text-xs font-medium text-tech-text-muted hover:text-tech-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                Ask for a hint
              </button>
              <span className="text-[10px] text-tech-text-muted uppercase tracking-wider">Press Enter to send</span>
            </div>
          </div>
        </section>

        {/* Right Pane: The Code Editor (70%) */}
        <section className="w-[70%] bg-[#fcfaf8] p-4 flex flex-col h-full relative">
          
          <div className="flex flex-col flex-1 bg-tech-code-bg rounded-xl shadow-2xl overflow-hidden border border-[#333] relative">
            {/* Progress Line */}
            <div className="h-[2px] w-full bg-[#333]">
              <div className="h-full bg-tech-primary w-[75%] shadow-[0_0_10px_rgba(238,140,43,0.5)]"></div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2a221b] border-b border-[#333]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tech-primary text-[18px]">code</span>
                  <span className="text-gray-300 text-sm font-medium">main.js</span>
                </div>
                <div className="h-4 w-[1px] bg-gray-600"></div>
                <select className="bg-transparent text-gray-400 text-xs font-mono focus:outline-none cursor-pointer hover:text-white transition-colors">
                  <option>JavaScript (Node.js)</option>
                  <option>Python 3.9</option>
                  <option>TypeScript</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#333] hover:bg-[#444] text-gray-200 text-xs font-medium transition-colors border border-gray-700">
                    <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                    Run
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-tech-primary hover:bg-tech-primary/90 text-[#1b140d] text-xs font-bold transition-colors shadow-[0_2px_8px_rgba(238,140,43,0.3)]">
                    <span className="material-symbols-outlined text-[16px] icon-filled">check_circle</span>
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Editor Area */}
            <div className="flex flex-1 overflow-hidden font-mono text-sm">
              {/* Line Numbers */}
              <div className="w-12 bg-[#2a221b] flex flex-col items-end pr-3 pt-4 text-gray-600 select-none border-r border-[#333]">
                {[...Array(16)].map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              
              {/* Code Content (Mock) */}
              <div className="flex-1 bg-tech-code-bg text-gray-300 p-4 pt-4 overflow-auto code-scroll focus:outline-none" contentEditable spellCheck={false}>
                <div className="text-gray-500 italic mb-2">// Task: Optimize UserSearch to O(n)</div>
                <div className="mb-1"><span className="text-[#c678dd]">function</span> <span className="text-[#61afef]">optimizeSearch</span><span className="text-[#e06c75]">(</span><span className="text-[#d19a66]">users</span>, <span className="text-[#d19a66]">targetID</span><span className="text-[#e06c75]">)</span> <span className="text-[#e06c75]">{'{'}</span></div>
                <div className="pl-4 text-gray-500">// TODO: Implement Hash Map strategy here</div>
                <div className="pl-4 text-gray-500 mb-4">// Current naive implementation below:</div>
                
                <div className="pl-4 mb-4"><span className="text-[#c678dd]">let</span> map = <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">Map</span>();</div>
                
                <div className="pl-4"><span className="text-[#c678dd]">for</span> (<span className="text-[#c678dd]">let</span> user <span className="text-[#c678dd]">of</span> users) {'{'}</div>
                <div className="pl-8">map.<span className="text-[#61afef]">set</span>(user.id, user);</div>
                <div className="pl-4 mb-4">{'}'}</div>
                
                <div className="pl-4"><span className="text-[#c678dd]">if</span> (map.<span className="text-[#61afef]">has</span>(targetID)) {'{'}</div>
                <div className="pl-8"><span className="text-[#c678dd]">return</span> map.<span className="text-[#61afef]">get</span>(targetID);</div>
                <div className="pl-4 mb-4">{'}'}</div>
                
                <div className="pl-4"><span className="text-[#c678dd]">return</span> <span className="text-[#d19a66]">null</span>;</div>
                {'}'}
              </div>
            </div>

            {/* Console Output */}
            <div className="h-32 bg-[#1a1a1a] border-t border-[#333] flex flex-col">
              <div className="flex items-center justify-between px-4 py-1.5 bg-[#252525] border-b border-[#333]">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Console Output</span>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-gray-500 text-[14px] cursor-pointer hover:text-white">close</span>
                </div>
              </div>
              <div className="p-3 font-mono text-xs text-gray-400 overflow-y-auto">
                <div className="flex gap-2 mb-1">
                  <span className="text-green-500">➜</span>
                  <span>Running test case 1...</span>
                </div>
                <div className="flex gap-2 mb-1">
                  <span className="text-green-500">✓</span>
                  <span>Found user with ID 402</span>
                </div>
                <div className="flex gap-2 mb-1">
                  <span className="text-green-500">➜</span>
                  <span>Running test case 2 (Large Dataset)...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-tech-primary animate-pulse">●</span>
                  <span className="text-tech-primary">Measuring performance...</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      <style>{`
        @keyframes pulse-orange {
            0% { box-shadow: 0 0 0 0 rgba(238, 140, 43, 0.4); }
            70% { box-shadow: 0 0 0 6px rgba(238, 140, 43, 0); }
            100% { box-shadow: 0 0 0 0 rgba(238, 140, 43, 0); }
        }
      `}</style>
    </div>
  );
};

export default TechnicalAssessment;