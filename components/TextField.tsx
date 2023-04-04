import { ReactNode } from 'react'

interface textField { 
    placeholder?: string, 
    icon?: ReactNode,
    small?: boolean
}

export default function TextField({ placeholder, icon, small}: textField) {
    return (
        <div className="relative">
            {
                icon && (
                    <span className="text-md text-slate-800 absolute top-[28%] left-3">
                        {icon}
                    </span>
                )
            }
            <input type="text" placeholder={placeholder} className={`${small ? 'w-20' : 'w-52'} h-8 outline-none border 
            border-slate-800 rounded-2xl ${icon ? 'pl-9' : 'pl-4'} pr-4 text-xs placeholder:text-slate-800`} />
        </div>
    )
}
