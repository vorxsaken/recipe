import { ReactNode, useState } from 'react'

export default function PileButton({children, value, defaultValue}: {children: ReactNode[], value: (sel: any) => void, defaultValue?: string}) {
    const [selected, setselected] = useState(defaultValue || '')
    const getselected = (val: any) => {
        setselected(val);
        value(val);
    }

    return (
        <div className="h-8 md:h-9 border border-slate-400 flex flex-row justify-center items-center rounded-3xl overflow-hidden">
            {
                children?.map((child, index) => (
                    <div key={index} className={`${index !== children.length - 1 ? 'border-r border-slate-300' : 'border-0'} 
                    ${selected === (child as any).props.children ? 'bg-zinc-100 text-red-500 ' : 'text-zinc-700'} 
                    hover:text-red-500 h-full w-full px-6 text-xs cursor-pointer flex justify-center items-center`} 
                    onClick={(e) => getselected((child as any).props.children)}>
                        { child }
                    </div>
                ))
            }
        </div>
    )
}
