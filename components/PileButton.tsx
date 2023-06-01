import { useState } from 'react'
interface UIPileButton {
    buttons: string[],
    url: string[],
    select?: string
}

export default function PileButton({ buttons, url, select }: UIPileButton) {
    const [selected, setselected] = useState(select)

    return (
        <div className="h-8 md:h-9 border border-slate-400 flex flex-row justify-center items-center rounded-3xl overflow-hidden">
            {buttons.map((butt, index) => (
                <div key={index} className={`${index !== buttons.length - 1 ? 'border-r border-slate-300' : 'border-0'} 
                ${butt === selected ? 'bg-zinc-100 text-red-500 ' : 'text-zinc-700'} 
                hover:text-red-500 h-full w-full px-6 text-xs cursor-pointer flex justify-center items-center`}
                onClick={() => setselected(butt)}
                >
                    {butt}
                </div>
            ))}
        </div>
    )
}
