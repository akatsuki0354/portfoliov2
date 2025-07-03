import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '../../../../components/motion-primitives/morphing-dialog';
import { ArrowUpRight, GithubIcon, ImageUpscale } from 'lucide-react';
import { ProjectLayoutsProps } from './project-data';
import { Tilt } from '../../../../components/motion-primitives/tilt';
import React from 'react'
import { Cursor } from '../../../../components/motion-primitives/cursor';
import { MouseIcon } from '../../page-data';
function Projectlayouts(props: ProjectLayoutsProps) {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}>
            <MorphingDialogTrigger
                style={{
                    borderRadius: '12px',
                }}
                className='flex max-w-[470px]  flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <MorphingDialogImage
                    src={props.photoURl}
                    alt={props.photoAlt}
                    className='h-80 w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                    <div>
                        <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                            {props.title}
                        </MorphingDialogTitle>

                    </div>
                    <div className='flex gap-2'>
                        <button className='hover:bg-slate-500/10 p-1 cursor-pointer border-1 border-slate-500/20  rounded-full'>
                            <ImageUpscale size={20} />
                        </button>
                        <a href={props.github} className='hover:bg-slate-500/10 p-1 border-1 border-slate-500/20  rounded-full'>
                            <GithubIcon size={20} />
                        </a>
                    </div>
                </div>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
                <Cursor
                    attachToParent
                    variants={{
                        initial: { scale: 0.3, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.3, opacity: 0 },
                    }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.15,
                    }}
                    className='z-50 hidden lg:block'
                >
                    <div>
                        <MouseIcon className='h-6 w-6' />
                    </div>
                </Cursor>
                <Tilt rotationFactor={8} isRevese>
                    <MorphingDialogContent
                        style={{
                            borderRadius: '24px',
                        }}
                        className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                    >
                        <MorphingDialogImage
                            src={props.photoURl}
                            alt={props.photoAlt}
                            className='h-full w-full'
                        />
                        <div className='p-6'>
                            <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                                <a className='hover:text-gray-500/50 gap-1  flex' href={props.link}>
                                    {props.title}
                                    <ArrowUpRight size={13} className='mt-2 text-gray-500/80 ' />
                                </a>
                            </MorphingDialogTitle>

                            <MorphingDialogDescription
                                disableLayoutAnimation
                                variants={{
                                    initial: { opacity: 0, scale: 0.8, y: 100 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                            >
                                <p className='mt-2 mb-5 text-zinc-500 dark:text-zinc-500'>
                                    {props.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(props.icon) && props.icon.map((icon: string, idx: number) => {
                                        const badgeColors = [
                                            'bg-indigo-200 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-200',
                                            'bg-blue-200 text-blue-800 dark:bg-blue-700 dark:text-blue-200',
                                            'bg-purple-200 text-purple-800 dark:bg-purple-700 dark:text-purple-200',
                                            'bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200',
                                            'bg-orange-200 text-orange-800 dark:bg-orange-700 dark:text-orange-200',
                                            'bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
                                            'bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-cyan-200',
                                            'bg-yellow-300 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-200',
                                        ];
                                        const colorClass = badgeColors[idx % badgeColors.length];
                                        return (
                                            <span
                                                key={idx}
                                                className={`${colorClass} text-sm px-3 py-1 rounded-full`}
                                            >
                                                {icon}
                                            </span>
                                        );
                                    })}
                                </div>
                            </MorphingDialogDescription>

                        </div>
                        <MorphingDialogClose className='text-zinc-50 bg-gray-500/40 rounded-full p-2 cursor-pointer' />
                    </MorphingDialogContent>
                </Tilt>
            </MorphingDialogContainer>

        </MorphingDialog>
    )
}

export default Projectlayouts