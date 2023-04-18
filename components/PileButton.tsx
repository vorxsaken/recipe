import { useState } from 'react'
interface UIPileButton {
    buttons?: string[],
    select?: string
}

export default function PileButton({ buttons, select }: UIPileButton) {
    const [selected, setselected] = useState(select)
    const butts = ['Following', 'Hottest'];

    return (
        <div className="h-9 border border-slate-400 flex flex-row justify-center items-center rounded-3xl overflow-hidden">
            {butts.map((butt, index) => (
                <div key={index} className={`${index !== butts.length - 1 ? 'border-r border-slate-400' : 'border-0'} 
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
