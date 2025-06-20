import React from 'react'
import { ContactLayouts } from './contact-layouts'
function Contact() {
    return (
        <div className='pt-24 pb-24'>
            <h1 className="md:text-6xl text-5xl font-semibold text-center">Contact</h1>
            <div className="flex mt-24 flex-col items-center justify-center ">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <ContactLayouts />
                </div>
            </div>
        </div>
    )
}

export default Contact