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
    borderLess?: boolean,
    number?: boolean,
    [key: string]: any
}

export default function TextField(props: textField) {

    const { placeholder, icon, small, textArea, width, height, medium, large, borderLess, number } = props;

    const handleInput = (event: any) => {
        if (textArea) {
            event.currentTarget.style.height = 'auto';
            event.currentTarget.style.height = `${event.currentTarget.scrollHeight}px`
        }

        if (number) {
            let value = event.target.value;
            let newValue = value.replace(/[^0-9]/g, "");
            event.target.value = newValue;
        }
    }

    const textFieldWidth = small ? 'w-20' : medium ? 'w-56' : large ? 'w-80' : 'w-full';
    const textFieldHeight = small ? 'h-8' : medium ? 'h-11' : large ? 'h-12' : 'h-8';
    const textFieldRounded = small ? 'rounded-md' : medium ? 'rounded-md' : large ? 'rounded-lg' : 'rounded-md';
    const textFieldIcon = icon ? 'pl-9' : 'pl-4';
    const textfieldBorder = borderLess ? 'border-none' : textArea ? 'border-b border-slate-600' : 'border border-slate-800';

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
                            className={`w-full resize-none px-2 py-2 text-sm outline-none text-slate-700
                            scrollbar-hide transition-all duration-700 ease-in-out placeholder:text-slate-500 ${textfieldBorder}`}
                            cols={width}
                            placeholder={placeholder}
                            {...props}
                        />
                    </>
                ) : (
                    <>
                        <input type='text' placeholder={placeholder} className={`
                        ${textFieldWidth} ${textFieldHeight} ${textFieldRounded} ${textFieldIcon} ${textfieldBorder}
                        outline-none pr-4 text-xs placeholder:text-slate-800`}
                            onInput={handleInput}
                            {...props} />
                    </>
                )
            }
        </div>
    )
}
