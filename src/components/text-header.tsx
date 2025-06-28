import React from 'react'

function TextHeader(props:{ text: string}) {
    return (
        <div>
            <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-muted-foreground/40 to-muted-foreground/60"></div>
                <div className="mx-6 text-center">
                    <h1 className="md:text-6xl text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                        {props.text}
                    </h1>
                </div>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-muted-foreground/60 via-muted-foreground/40 to-transparent"></div>
            </div>
        </div>
    )
}

export default TextHeader