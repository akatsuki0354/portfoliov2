import React from 'react'
import { ContactLayouts } from './contact-layouts'
import { TextAnimate } from '@/components/magicui/text-animate'
function Contact() {
    return (
        <div className='pt-24 pb-24'>
            <h1 className="md:text-6xl text-5xl font-semibold text-center mb-5">Contact</h1>
            <p className="text-center text-muted-foreground text-xl  max-w-5xl mx-auto mb-10">
                <TextAnimate animation="blurIn" duration={1} as="h1">
                    Feel free to reach out for collaborations, questions, or just to say hello. I'm always open to connecting and exploring new opportunities in design and development.
                </TextAnimate>
            </p>
            <div className="flex mt-24 flex-col items-center justify-center ">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <ContactLayouts />
                </div>
            </div>
        </div>
    )
}

export default Contact