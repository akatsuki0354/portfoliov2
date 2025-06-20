import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { ArrowUpRight, PlusIcon, Link } from 'lucide-react';

import React from 'react'

function Projectlayouts(props: any) {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}
        >
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

                    <button
                        type='button'
                        className='relative cursor-pointer ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                    >
                        <PlusIcon size={12} />
                    </button>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
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
                                        // 'bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-pink-200',
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
                            {/* <a
                                href=
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button variant={'link'}>
                                    View Live
                                </Button>
                            </a> */}
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className='text-zinc-50 bg-gray-500/40 rounded-full p-2 cursor-pointer' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    )
}

export default Projectlayouts