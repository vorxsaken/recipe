import { ReactNode } from 'react'

interface button {
    children: ReactNode,
    text?: boolean,
    [key: string]: any
}

export default function Button(props: button) {
    const { children, text } = props;

    return (
        <div className={` h-10 rounded-lg flex justify-center items-center font-semibold
        cursor-pointer ${text ? 'w-auto hover:text-red-600 text-slate-600 text-base md:text-[0.9rem]' :
        'w-28 text-xs text-white bg-red-500 hover:bg-red-700 shadow-lg'}`}
        {...props}>
            {children}
        </div>
    )
}
