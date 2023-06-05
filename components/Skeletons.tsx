import { useEffect, useState } from 'react';

interface skeletonsUI {
    count?: Number,
    hFull?: boolean,
    width?: string
}

export default function Skeletons({ count, hFull, width }: skeletonsUI) {
    const heightUI = hFull ? 'h-full' : 'h-7';
    const widthUI = width == 'short' ? 'w-[80%]' : 'w-full'

    return (
        <div className="w-[95%] h-full flex flex-col justify-start items-start gap-2">
            {
                [...Array(count || 1)].map((i, index) => (
                    <div key={index} className={`${widthUI} ${ heightUI } bg-gray-200 rounded-2xl overflow-hidden relative`}>
                        <div className="w-1/2 h-full bg-gray-100 blur-2xl absolute animate-xSlide rounded-xl">
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
