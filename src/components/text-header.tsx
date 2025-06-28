import React from 'react'

function TextHeader(props:{ text: string}) {
    return (
        <div className="relative">
            {/* Animated background gradient - Masculine professional theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-700/10 to-slate-600/10 rounded-2xl blur-3xl animate-pulse"></div>
            
            <div className="relative flex items-center justify-center mb-12 group">
                {/* Left decorative line with animation - Teal primary */}
                <div className="relative">
                    <div className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-teal-500/60 to-blue-500/80 transition-all duration-500 group-hover:w-24 group-hover:via-teal-400 group-hover:to-blue-400"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-ping opacity-75"></div>
                </div>
                
                {/* Main text container */}
                <div className="mx-8 text-center relative">
                    {/* Text shadow effect - Professional slate */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-700/20 to-slate-600/20 blur-xl"></div>
                    
                    {/* Main heading with enhanced gradient - Masculine colors */}
                    <h1 className="relative md:text-7xl text-6xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent transition-all duration-700 hover:scale-105 hover:from-teal-600 hover:via-blue-600 hover:to-green-600 dark:hover:from-teal-400 dark:hover:via-blue-400 dark:hover:to-green-400">
                        {props.text}
                    </h1>
                    
                    {/* Subtle underline effect - Professional accent */}
                    <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent rounded-full transition-all duration-500 group-hover:via-teal-400/70 group-hover:scale-x-110"></div>
                </div>
                
                {/* Right decorative line with animation - Green accent */}
                <div className="relative">
                    <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500/80 via-green-500/60 to-transparent transition-all duration-500 group-hover:w-24 group-hover:from-blue-400 group-hover:via-green-400"></div>
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
            </div>
            
            {/* Floating particles effect - Professional accent colors */}
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-teal-400/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-400/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
    )
}

export default TextHeader