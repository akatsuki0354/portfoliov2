import React from 'react'

function TextHeader(props:{ text: string, variant?: 'main' | 'sub'}) {
    const isSubHeader = props.variant === 'sub';
    
    return (
        <div className="relative">
            <div className={`flex items-center justify-center mb-12 ${isSubHeader ? 'mb-8' : ''}`}>
                {/* Simple decorative line */}
                <div className={`w-16 h-px bg-gray-300 dark:bg-gray-600 ${isSubHeader ? 'w-12' : ''}`}></div>
                
                {/* Main text container */}
                <div className={`mx-6 text-center ${isSubHeader ? 'mx-4' : ''}`}>
                    <h1 className={`font-light text-gray-900 dark:text-gray-100 tracking-wide ${
                        isSubHeader 
                            ? 'text-3xl md:text-4xl' 
                            : 'text-5xl md:text-6xl lg:text-7xl'
                    }`}>
                        {props.text}
                    </h1>
                </div>
                
                {/* Simple decorative line */}
                <div className={`w-16 h-px bg-gray-300 dark:bg-gray-600 ${isSubHeader ? 'w-12' : ''}`}></div>
            </div>
        </div>
    )
}

export default TextHeader