import { ReactNode } from 'react'

interface button {
    children: ReactNode,
    text?: boolean,
    small?: boolean,
    [key: string]: any
}

export default function Button(props: button) {
    const { children, text, small } = props;

    return (
        <div className={`rounded-md flex justify-center items-center font-semibold
        cursor-pointer ${text ? 'hover:text-red-500 hover:bg-gray-50 text-slate-600 text-base md:text-[0.9rem] border border-slate-400' :
        'text-xs text-white bg-red-500 hover:bg-red-600'} ${small ? 'w-24 h-8' : 'w-28 h-10'}`}
        {...props}>
            {children}
        </div>
    )
}
