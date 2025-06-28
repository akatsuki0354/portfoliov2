import React from 'react'
import { ProjectData } from './project-data'
import Projectlayouts from './project-layouts'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Tilt } from '../../../../components/motion-primitives/tilt'
import TextHeader from '@/components/text-header'
function Project() {
    return (
        <div className='pt-24 pb-24'>
            <TextHeader
                text="Project"
            />
            <p className="text-center text-muted-foreground text-xl  max-w-5xl mx-auto mb-10">
                <TextAnimate animation="blurIn" duration={1} as="h1">
                    Explore a collection of my featured projects showcasing skills in design, development, and
                    problem-solving.
                    Each project reflects my passion for creating
                    functional and
                    visually appealing digital experiences.
                </TextAnimate>
            </p>
            <div>
                <div className='flex justify-center p-2 gap-10 flex-wrap'>
                    {ProjectData.map((id) => (
                        <Tilt rotationFactor={8} key={id.id} isRevese>
                            <Projectlayouts
                                photoAlt={id.description}
                                photoURl={id.projectURL.src}
                                title={id.title}
                                description={id.description}
                                link={id.link}
                                icon={id.icon}
                                github={id.github}
                            />
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project

