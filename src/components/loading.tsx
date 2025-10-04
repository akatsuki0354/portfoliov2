import React from 'react'

export default function Loading() {
    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 backdrop-blur-xl">
                
                {/* Floating Cyber Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-gray-400/60 rounded-full blur-sm"
                            style={{
                                left: `${15 + i * 12}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                animationDelay: `${i * 0.3}s`,
                                boxShadow: '0 0 20px rgba(107,114,128,0.4)'
                            }}
                        />
                    ))}
                </div>

                <div className="text-center p-8 relative z-10">
                    {/* Modern Glass Card */}
                    <div className="relative p-8">
                        
                        {/* Modern Avatar */}
                        <div className="flex justify-center relative z-10 mb-8">
                            <div className="relative">
                                {/* Outer Ring */}
                                <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 border border-gray-400/30 rounded-full animate-spin" 
                                     style={{ animationDuration: '8s' }}>
                                </div>
                                
                                {/* Inner Ring */}
                                <div className="absolute inset-2 w-20 h-20 md:w-28 md:h-28 border border-gray-400/20 rounded-full animate-pulse">
                                </div>

                                {/* Main Avatar */}
                                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-400/30 to-gray-600/30 dark:from-gray-400/20 dark:to-gray-600/20 border border-gray-400/60 dark:border-gray-400/40 flex items-center justify-center backdrop-blur-sm">
                                    <div className="text-lg md:text-2xl font-bold text-gray-600 dark:text-gray-400 animate-pulse">
                                        FG
                                    </div>
                                </div>

                                {/* Floating Dots */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-400/60 rounded-full animate-bounce" 
                                     style={{ animationDelay: '0.5s' }}>
                                </div>
                                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gray-400/40 rounded-full animate-bounce" 
                                     style={{ animationDelay: '1s' }}>
                                </div>
                            </div>
                        </div>

                        {/* Modern Loading Text */}
                        <div className="space-y-6 relative z-10">
                            <div className="space-y-3">
                                <h1 className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white animate-pulse">
                                    Franco Gregorio
                                </h1>
                                <p className="text-sm md:text-lg text-gray-600/80 dark:text-gray-300/80 font-medium">
                                    Loading Portfolio
                                </p>
                            </div>

                            {/* Modern Progress Bar */}
                            <div className="relative">
                                <div className="w-64 md:w-80 h-2 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden mx-auto border border-gray-500/40 dark:border-gray-500/20">
                                    <div className="h-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 dark:from-gray-400 dark:via-gray-500 dark:to-gray-400 rounded-full animate-[modernLoad_2s_ease-in-out_infinite] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-600/70 dark:text-gray-400/60 mt-3 font-mono">
                                    Initializing...
                                </div>
                            </div>

                            {/* Modern Loading Dots */}
                            <div className="flex justify-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" 
                                     style={{ animationDelay: '0s' }}>
                                </div>
                                <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" 
                                     style={{ animationDelay: '0.1s' }}>
                                </div>
                                <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" 
                                     style={{ animationDelay: '0.2s' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}