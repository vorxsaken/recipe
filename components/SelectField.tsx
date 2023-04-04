import React from 'react'

export default function SelectField({placeholder, options}: {placeholder: string, options: string[]}) {

    return (
        <>
            <select id="selectField" className='w-28 h-8 border border-slate-800 rounded-2xl bg-white px-4 
            text-xs text-slate-800 appearance-none' placeholder={placeholder}>
                {options.map(value => (
                    <option key={value} value={value} className='lowercase'>{value}</option>
                ))}
            </select>
        </>
    )
}
