import React from 'react'

export default function Loading() {
    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-muted/20 backdrop-blur-md">
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="text-center p-8 rounded-3xl ">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite]"></div>

                    {/* Animated Profile Picture */}
                    <div className="flex justify-center relative z-10">
                        <div className="relative mx-auto mb-8 profile-loading">
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 animate-spin-slow"></div>

                            {/* Main Profile Circle */}
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/40 animate-pulse border-4 border-primary/40 profile-glow shadow-2xl">
                                {/* Inner Glow */}
                                <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 animate-ping opacity-30"></div>

                                {/* Profile Content */}
                                <div className="absolute inset-2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-background via-background/90 to-muted/30 flex items-center justify-center shadow-inner">
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-bounce">FG</div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <div className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent animate-pulse">
                                Franco Gregorio
                            </h1>
                            <p className="text-sm md:text-lg text-muted-foreground animate-pulse font-medium">
                                Loading Portfolio...
                            </p>
                        </div>

                        {/* Enhanced Loading Bar */}
                        <div className="relative">
                            <div className="w-48 md:w-72 h-3 bg-muted/50 rounded-full overflow-hidden mx-auto border border-border/30">
                                <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full animate-[loading_2s_ease-in-out_infinite] relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                </div>
                            </div>
                            {/* Progress Text */}
                            <div className="text-xs text-muted-foreground mt-2 animate-pulse">
                                Initializing components...
                            </div>
                        </div>

                        {/* Enhanced Loading Dots */}
                        <div className="flex justify-center space-x-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-bounce shadow-lg"></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
                        </div>

                        {/* Status Messages */}
                        <div className="text-xs text-muted-foreground/80 animate-pulse">
                            <span className="inline-block animate-fade-in">✨ Crafting digital experiences...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}