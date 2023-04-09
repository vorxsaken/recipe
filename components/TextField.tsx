import { ReactNode } from 'react'

interface textField {
    placeholder?: string,
    icon?: ReactNode,
    small?: boolean,
    textArea?: boolean,
    width?: number,
    height?: number
}

export default function TextField({ placeholder, icon, small, textArea, width, height }: textField) {

    const handleInput = (event: any) => {
        event.currentTarget.style.height = 'auto';
        event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
    }

    return (
        <div className="relative">
            {
                icon && (
                    <span className="text-md text-slate-800 absolute top-[28%] left-3">
                        {icon}
                    </span>
                )
            }
            {
                textArea ? (
                    <>
                        <textarea
                            onInput={handleInput}
                            className='w-full border-b border-slate-600 resize-none px-2 py-2 text-sm outline-none text-slate-700
                            scrollbar-hide transition-all duration-700 ease-in-out placeholder:text-slate-500'
                            cols={width}
                            placeholder={placeholder}
                        />
                    </>
                ) : (
                    <>
                        <input type="text" placeholder={placeholder} className={`${small ? 'w-20' : 'w-52'} h-8 outline-none border 
                       border-slate-800 rounded-2xl ${icon ? 'pl-9' : 'pl-4'} pr-4 text-xs placeholder:text-slate-800`} />
                    </>
                )
            }
        </div>
    )
}
