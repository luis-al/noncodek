import React from 'react';
import { Bot, MessageSquare, Sparkles } from 'lucide-react';

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-96 mt-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="relative bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
            <Bot className="w-16 h-16 text-purple-600 animate-float" />
            <MessageSquare className="absolute top-4 right-4 w-8 h-8 text-blue-500 animate-bounce" />
            <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;