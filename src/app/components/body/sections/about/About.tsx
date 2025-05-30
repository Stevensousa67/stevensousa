import React from 'react';
import Image from 'next/image';
import WordRotator from './WordRotator';
import { getCurrentUtcOffset } from './getTimeZone';

export default function About() {
    const timeOffset = getCurrentUtcOffset();
    return (
        <section>
            <div className="mt-40 ml-4 mr-4">
                <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="flex flex-col flex-wrap gap-2 text-xl font-bold sm:text-3xl">
                            <div className="opacity-100 transform-none">I&apos;m Steven Sousa, a Full Stack Engineer</div>
                            <div className="flex gap-2 opacity-100 transform-none">
                                <div className="leading-0.3 sm:leading-0.45">building</div>
                                <div className="relative overflow-hidden">
                                    <WordRotator />
                                </div>
                                <div className="leading-0.3 sm:leading-0.45">websites using</div>
                            </div>
                            <div className="opacity-100 transform-none">React</div>
                        </h1>
                        <div className="text-muted-foreground text-sm">Plymouth, MA, USA • UTC/GMT {timeOffset}</div>
                    </div>
                    <div className="relative hidden size-40 md:block transform-none">
                        <div className="overflow-hidden rounded-full w-40 h-40">
                            <Image src="/Steven Sousa.jpeg" alt="Steven Sousa" width={160} height={160} className="rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}