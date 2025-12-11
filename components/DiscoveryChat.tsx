import React, { useState } from 'react';

const DiscoveryChat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    // Mock send function
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="relative flex flex-col h-full overflow-hidden font-display bg-retro-bg text-retro-text">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-retro-bg" 
             style={{
                backgroundImage: `
                  radial-gradient(circle at 10% 20%, rgba(245, 231, 198, 0.6) 0%, transparent 20%),
                  radial-gradient(circle at 90% 80%, rgba(245, 231, 198, 0.8) 0%, transparent 25%),
                  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 40%)
                `
             }}>
        </div>
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-retro-gold opacity-50 blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-orange-100 opacity-50 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 z-10 w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-retro-orange rounded flex items-center justify-center text-white shadow-retro-sm">
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-retro-text">The Recruiter</h1>
        </div>
        <div className="flex items-center gap-4">
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 flex items-center justify-center px-4 pb-8 z-10 w-full overflow-hidden">
        {/* Chat Card */}
        <div className="w-full max-w-[800px] h-full max-h-[85vh] bg-white rounded-2xl border-2 border-black/5 shadow-retro flex flex-col overflow-hidden relative">
          
          {/* Chat Header inside card */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-20">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div 
                  className="bg-center bg-no-repeat bg-cover rounded-full size-12 border border-gray-100" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZGToMeDOyNUN6cExiKq8QxdHtpLK1Pv63JILCFO63LdFMXkc7RkygVyNfrxvqlTdfnzVsK6aVsMM3kDzqnLGofegg8IwwSXwDoFs7_DHFS1Via5RWT0D1lFgqUl3vsQ9rVgGghzsYfdIFB7Xds4TtwbLX5BrAMf3D3t3Akh0y0xkFbj2-VeiWOEeOnz8lbl6UBIsQNotYg3d9Kb8WKB6rXXClw0c1fMedvT1VZEbxUCNnNuVa9dXIOxI6E43Y88MYTtZwex9rZo")' }}
                ></div>
                <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold leading-tight">Discovery Phase</h2>
                <p className="text-gray-500 text-xs font-medium">Chatting with The Recruiter • AI Career Guide</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-retro-orange transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50 scrollbar-hide">
            
            <div className="flex justify-center">
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today, 10:23 AM</span>
            </div>

            {/* AI Message 1 */}
            <div className="flex items-end gap-3 max-w-[85%]">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mb-1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZGToMeDOyNUN6cExiKq8QxdHtpLK1Pv63JILCFO63LdFMXkc7RkygVyNfrxvqlTdfnzVsK6aVsMM3kDzqnLGofegg8IwwSXwDoFs7_DHFS1Via5RWT0D1lFgqUl3vsQ9rVgGghzsYfdIFB7Xds4TtwbLX5BrAMf3D3t3Akh0y0xkFbj2-VeiWOEeOnz8lbl6UBIsQNotYg3d9Kb8WKB6rXXClw0c1fMedvT1VZEbxUCNnNuVa9dXIOxI6E43Y88MYTtZwex9rZo")' }}></div>
              <div className="flex flex-col gap-1 items-start">
                <div className="p-4 bg-white rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-retro-text leading-relaxed">
                  Marhaban! I'm here to help you navigate your career path. To get started, tell me a bit about your current stack. Are you leaning more towards React or Vue lately?
                </div>
              </div>
            </div>

            {/* User Message 1 */}
            <div className="flex items-end gap-3 max-w-[85%] ml-auto justify-end">
              <div className="flex flex-col gap-1 items-end">
                <div className="p-4 bg-retro-gold rounded-2xl rounded-br-none shadow-sm text-retro-text leading-relaxed">
                  Hey! I've been working with React for about 2 years now, mostly Next.js.
                </div>
                <span className="text-[10px] text-gray-400 pr-1">Read 10:25 AM</span>
              </div>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mb-6" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABUHm3KNz-D1H283OPHtJqH7Y7NMisZQRHbePQCnYyd99eEm7sB6T4ah04cSDcOUa2ql_rCXSyL5XDk2ZkrtmZVPhBXeHbOp5dtVeFT_6nohiM3cXWCPMcvHv2wG7TobrbB6oEt58LvJC1ekQpgYPcgN5Hf-z0ORLzxkLhT898vrlPF-ZOSR13pyKQ0fDjfIPDrXNkIJvot0iJLwbvApLzuZh-k1Df75EgUTikQriXuFCvlAMb8gDPliLUlJ4CJVQqWTHmMlgAWzI")' }}></div>
            </div>

            {/* AI Message 2 */}
            <div className="flex items-end gap-3 max-w-[85%]">
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0 mb-1" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZGToMeDOyNUN6cExiKq8QxdHtpLK1Pv63JILCFO63LdFMXkc7RkygVyNfrxvqlTdfnzVsK6aVsMM3kDzqnLGofegg8IwwSXwDoFs7_DHFS1Via5RWT0D1lFgqUl3vsQ9rVgGghzsYfdIFB7Xds4TtwbLX5BrAMf3D3t3Akh0y0xkFbj2-VeiWOEeOnz8lbl6UBIsQNotYg3d9Kb8WKB6rXXClw0c1fMedvT1VZEbxUCNnNuVa9dXIOxI6E43Y88MYTtZwex9rZo")' }}></div>
              <div className="flex flex-col gap-1 items-start">
                <div className="p-4 bg-white rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-retro-text leading-relaxed">
                  That's a solid foundation, especially for the Egyptian market right now. Are you looking to deepen your frontend skills, or are you curious about full-stack development?
                </div>
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex items-end gap-3 relative">
              <div className="flex-1 relative">
                <textarea 
                  className="w-full bg-gray-50 border-0 rounded-3xl py-4 pl-6 pr-12 text-retro-text placeholder-gray-400 focus:ring-2 focus:ring-retro-orange/20 focus:bg-white transition-all resize-none shadow-inner text-sm"
                  placeholder="Type your answer here..." 
                  rows={1}
                  style={{ minHeight: '56px' }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></textarea>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-retro-orange transition-colors">
                  <span className="material-symbols-outlined">mic</span>
                </button>
              </div>
              <button onClick={handleSendMessage} className="group flex items-center justify-center size-14 rounded-full border-2 border-retro-orange bg-white hover:bg-retro-orange text-retro-orange hover:text-white transition-all shadow-retro-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
              </button>
            </div>
            <div className="mt-3 flex justify-center gap-4 text-xs text-gray-400 font-medium">
              <span>Press Enter to send</span>
              <span>Shift + Enter for new line</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DiscoveryChat;