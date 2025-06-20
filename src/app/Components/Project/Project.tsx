import React from 'react'
import { ProjectData } from './project-data'
import Projectlayouts from './project-layouts'
function Project() {
    return (
        <div className='pt-24 pb-24'>
            <h1 className="md:text-6xl text-5xl font-semibold text-center mb-5">Project</h1>
            <p className="text-center text-muted-foreground text-xl  max-w-5xl mx-auto mb-10">
                Explore a collection of my featured projects showcasing skills in design, development, and
                problem-solving.
                Each project reflects my passion for creating
                functional and
                visually appealing digital experiences.
            </p>
            <div>
                <div className='flex justify-center p-2 gap-10 flex-wrap'>
                    {ProjectData.map((id) => (
                        <Projectlayouts
                            key={id}
                            photoURl={id.projectURL.src}
                            title={id.title}
                            description={id.description}
                            link={id.link}
                            icon={id.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project