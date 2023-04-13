import { ReactNode } from 'react'

interface textField {
    placeholder?: string,
    icon?: ReactNode,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    textArea?: boolean,
    width?: number,
    height?: number,
    [key: string]: any
}

export default function TextField(props: textField) {

    const { placeholder, icon, small, textArea, width, height, medium, large } = props;

    const handleInput = (event: any) => {
        event.currentTarget.style.height = 'auto';
        event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
    }

    const textFieldWidth = small ? 'w-20' : medium ? 'w-56' : large ? 'w-80' : 'w-56';
    const textFieldHeight = small ? 'h-8' : medium ? 'h-11' : large ? 'h-12' : 'h-8';
    const textFieldRounded = small ? 'rounded-2xl' : medium ? 'rounded-xl' : large ? 'rounded-lg' : 'rounded-2xl';
    const textFieldIcon = icon ? 'pl-9' : 'pl-4';

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
                            {...props}
                        />
                    </>
                ) : (
                    <>
                        <input type="text" placeholder={placeholder} className={`
                        ${textFieldWidth} ${textFieldHeight} ${textFieldRounded} ${textFieldIcon} outline-none border 
                        border-slate-800 pr-4 text-xs placeholder:text-slate-800`} {...props} />
                    </>
                )
            }
        </div>
    )
}
