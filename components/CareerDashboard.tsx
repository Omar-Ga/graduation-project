import React from 'react';

const CareerDashboard = () => {
  return (
    <div className="bg-news-paper text-news-ink font-serif antialiased h-full overflow-y-auto">
      <div className="min-h-full flex flex-col max-w-[1440px] mx-auto border-x border-news-ink bg-news-paper relative shadow-2xl">
        
        {/* Main Title Section */}
        <div className="px-6 py-8 md:px-12 border-b border-news-ink">
          <div className="flex flex-col md:flex-row justify-between items-end border-b-4 double border-news-ink pb-4 mb-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">The Career Analyst</h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <main className="flex-1 p-6 md:p-12 font-sans">
          <div className="grid grid-cols-12 gap-6">
            
            {/* 1. True Seniority Card (Span 4) */}
            <div className="col-span-12 md:col-span-4 flex flex-col border border-news-ink bg-white shadow-hard p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">verified</span>
              </div>
              <p className="text-sm uppercase font-bold tracking-widest text-news-ink/60 mb-2">Official Classification</p>
              <h2 className="text-4xl md:text-5xl font-serif font-black leading-none mb-1">Mid-Level II</h2>
              <p className="text-lg italic text-news-ink/80 mb-6 font-serif">Backend Specialization</p>
              
              <div className="mt-auto flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase">Confidence Score</span>
                  <span className="text-2xl font-bold text-news-primary">94%</span>
                </div>
                <div className="border-4 border-news-primary text-news-primary px-3 py-1 text-sm font-black uppercase tracking-widest stamp-rotate opacity-90 mix-blend-multiply">
                    Validated
                </div>
              </div>
            </div>

            {/* 2. Salary Estimator (Span 4) */}
            <div className="col-span-12 md:col-span-4 flex flex-col border border-news-ink bg-white shadow-hard p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm uppercase font-bold tracking-widest text-news-ink/60">Market Value (Cairo)</p>
                <span className="material-symbols-outlined text-news-primary">attach_money</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold font-serif">EGP 38,500</span>
                <span className="text-sm font-medium text-news-ink/60">/ mo</span>
              </div>
              <div className="w-full bg-news-paper border border-news-ink h-4 rounded-full mb-2 overflow-hidden relative">
                <div className="absolute left-[60%] top-0 bottom-0 w-0.5 bg-news-ink/30 z-10"></div>
                <div className="bg-news-primary h-full" style={{ width: '72%' }}></div>
              </div>
              <div className="flex justify-between text-xs font-medium text-news-ink/60 mb-6">
                <span>Min: 15k</span>
                <span className="text-news-primary font-bold">You are here</span>
                <span>Max: 65k</span>
              </div>
              <p className="text-sm leading-tight italic font-serif text-news-ink/80">
                "Your architecture patterns place you in the top 28th percentile for Cairo-based backend roles."
              </p>
            </div>

            {/* 3. Editor's Insight (Span 4) */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between border border-news-ink bg-news-ink text-news-paper shadow-hard p-6">
              <div>
                <div className="flex items-center gap-2 mb-4 text-news-primary">
                  <span className="material-symbols-outlined">psychology</span>
                  <span className="text-xs font-bold uppercase tracking-widest">AI Analyst Note</span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-4">
                  "Omar, your technical grasp of distributed systems is impressive for a Mid-Level engineer. However, the gap in concurrency handling is what currently separates you from Senior roles."
                </p>
              </div>
              <button className="w-full py-3 bg-news-primary text-white font-bold uppercase text-sm border border-white hover:bg-white hover:text-news-primary transition-colors flex items-center justify-center gap-2">
                Read Full Audit <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* 4. Skill Radar Chart (Span 6) */}
            <div className="col-span-12 md:col-span-6 border border-news-ink bg-white shadow-hard p-6 min-h-[400px]">
              <div className="flex justify-between items-center mb-6 border-b border-news-ink/10 pb-2">
                <h3 className="text-xl font-bold font-serif">Competency Radar</h3>
                <div className="flex gap-4 text-xs font-bold uppercase">
                  <div className="flex items-center gap-1"><div className="size-2 bg-news-primary"></div> You</div>
                  <div className="flex items-center gap-1"><div className="size-2 border border-news-ink"></div> Market Avg</div>
                </div>
              </div>
              
              <div className="w-full h-64 flex justify-center items-center relative">
                <svg className="w-full h-full max-w-[300px]" viewBox="0 0 200 200">
                  {/* Grid Circles */}
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#e5e5e5" strokeWidth="1"></circle>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e5e5" strokeWidth="1"></circle>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e5e5" strokeWidth="1"></circle>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1d120c" strokeWidth="1"></circle>
                  
                  {/* Axis Lines */}
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#1d120c" strokeWidth="0.5"></line>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#1d120c" strokeWidth="0.5"></line>
                  <line x1="43" y1="43" x2="157" y2="157" stroke="#1d120c" strokeWidth="0.5"></line>
                  <line x1="43" y1="157" x2="157" y2="43" stroke="#1d120c" strokeWidth="0.5"></line>
                  
                  {/* Data Shape */}
                  <polygon points="100,30 160,90 140,150 60,150 50,90" fill="rgba(255, 109, 31, 0.6)" stroke="#ff6d1f" strokeWidth="2"></polygon>
                  
                  {/* Labels */}
                  <text x="100" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="Newsreader">System Design</text>
                  <text x="190" y="100" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="Newsreader">Algorithms</text>
                  <text x="150" y="170" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="Newsreader">Testing</text>
                  <text x="50" y="170" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="Newsreader">DB Mgmt</text>
                  <text x="10" y="100" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="Newsreader">DevOps</text>
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm border-t border-news-ink/10 pt-4">
                <div>
                  <span className="block text-xs uppercase text-news-ink/60">Strongest Area</span>
                  <span className="font-bold">System Design (8.5/10)</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-news-ink/60">Improvement Area</span>
                  <span className="font-bold">Database Management (5.2/10)</span>
                </div>
              </div>
            </div>

            {/* 5. Gap Analysis (Span 3) */}
            <div className="col-span-12 md:col-span-3 flex flex-col border border-news-ink bg-news-paper p-0 shadow-hard h-full">
              <div className="bg-news-ink text-white p-3 text-center border-b border-news-ink">
                <h3 className="font-bold uppercase tracking-widest text-sm">Gap Analysis</h3>
              </div>
              <div className="flex-1 flex flex-col divide-y divide-news-ink/20">
                <GapItem title="Race Conditions" desc="Missed in tech screen." value="EGP 5,000" />
                <GapItem title="Index Optimization" desc="Failed SQL query task." value="EGP 3,500" />
                <GapItem title="REST vs GraphQL" desc="Imprecise distinction." value="EGP 2,000" />
              </div>
              <div className="p-3 bg-news-ink/5 border-t border-news-ink text-center">
                <p className="text-xs font-bold">Total Lost Value: <span className="text-red-600">EGP 10,500</span></p>
              </div>
            </div>

            {/* 6. Growth Trend Chart (Span 3) */}
            <div className="col-span-12 md:col-span-3 flex flex-col border border-news-ink bg-white shadow-hard p-4">
              <p className="text-sm uppercase font-bold tracking-widest text-news-ink/60 mb-2">Salary Trajectory</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-black font-serif">+12%</span>
                <span className="text-sm font-medium mb-1 text-news-primary">Last 6 Months</span>
              </div>
              <div className="flex-1 min-h-[150px] relative">
                <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                  {/* Grid */}
                  <line x1="0" y1="15" x2="100" y2="15" stroke="#eee" strokeWidth="0.5" strokeDasharray="2"></line>
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#eee" strokeWidth="0.5" strokeDasharray="2"></line>
                  <line x1="0" y1="45" x2="100" y2="45" stroke="#eee" strokeWidth="0.5" strokeDasharray="2"></line>
                  
                  {/* Area */}
                  <path d="M0,50 L20,45 L40,40 L60,38 L80,25 L100,10 L100,60 L0,60 Z" fill="rgba(255,109,31,0.1)"></path>
                  {/* Line */}
                  <path d="M0,50 L20,45 L40,40 L60,38 L80,25 L100,10" fill="none" stroke="#ff6d1f" strokeWidth="2"></path>
                  
                  {/* Points */}
                  {[
                      {x:0, y:50}, {x:20, y:45}, {x:40, y:40}, 
                      {x:60, y:38}, {x:80, y:25}, {x:100, y:10}
                  ].map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#fff" stroke="#1d120c"></circle>
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-[10px] uppercase font-bold text-news-ink/40 mt-2">
                <span>May</span>
                <span>Oct</span>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

const GapItem = ({ title, desc, value }: { title: string, desc: string, value: string }) => (
  <div className="p-4 flex gap-3 items-start group hover:bg-white transition-colors cursor-pointer">
    <span className="material-symbols-outlined text-red-600 mt-1 text-lg">close</span>
    <div>
      <p className="text-sm font-bold leading-tight mb-1">{title}</p>
      <p className="text-xs text-news-ink/70 italic mb-2">{desc}</p>
      <div className="flex items-center text-news-primary text-xs font-bold gap-1">
        <span className="material-symbols-outlined text-sm">trending_up</span>
        <span>+ {value} Potential</span>
      </div>
    </div>
  </div>
);

export default CareerDashboard;