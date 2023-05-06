import { BsCheck } from 'react-icons/bs'
import { useState, useRef, useEffect } from 'react'

interface selectFieldUI {
    placeholder?: string,
    options: string[],
    multiple?: boolean,
    setSelection: (e: any) => void
}

export default function SelectField({ placeholder, options, multiple, setSelection }: selectFieldUI) {
    const [selected, setSelected] = useState<string[]>([])
    const [showOptions, setshowOptions] = useState(false)
    const ref = useRef(null);

    const checkBoxChange = (e: any) => {
        if (e.currentTarget.checked) {
            setSelected([...selected, e.currentTarget.value])
            setSelection(selected);
        } else {
            let curr = selected;
            let indexOfCurr = curr.indexOf(e.currentTarget.value);
            curr.splice(indexOfCurr, 1);
            setSelected(curr);
            setSelection(curr);
        }
    }

    useEffect(() => {
        const checkIfClickOutside = (e: MouseEvent) => {
            const current = ref.current as any;
            if (showOptions && current && !current.contains(e.target)) {
                setshowOptions(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickOutside, false);

        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside);
        }
    }, [showOptions])

    return (
        <>
            {
                !multiple ? (
                    <select id="selectField" className='w-28 h-8 border border-slate-800 rounded-2xl bg-white px-4 
                    text-xs text-slate-800 appearance-none' placeholder={placeholder}>
                        {options.map(value => (
                            <option key={value} value={value} className='lowercase'>{value}</option>
                        ))}
                    </select>
                ) : (
                    <div ref={ref}>
                        <div className="w-full px-4 min-h-14 py-3 flex flex-wrap gap-2 justify-start items-center border border-slate-400 relative 
                        cursor-pointer rounded-md"
                            onClick={() => setshowOptions(!showOptions)}>
                            {
                                selected.length > 0 ? selected.map(select => (
                                    <div className='min-w-[100px] px-4 py-2 text-center rounded-3xl bg-slate-200 text-slate-800 text-sm'>
                                        {select}
                                    </div>
                                )) : (
                                    <span className='text-sm text-gray-500'>select categories</span>
                                )
                            }
                            <div className={`${showOptions ? 'w-1/2' : 'w-0 h-0 invisible'} max-h-80 absolute p-2 bg-white flex flex-col justify-center items-center 
                            gap-4 -bottom-32 left-0 shadow-2xl z-10 overflow-y-auto`}>
                                {options.map(option => (
                                    <div className="w-full flex justify-start items-center">
                                        <input onChange={checkBoxChange} className="peer hidden" type="checkbox" value={option} id={option} />
                                        <label htmlFor={option} className='w-8 h-6 rounded-sm flex justify-center items-center bg-gray-300 
                                        peer-checked:bg-blue-500 '>
                                            <BsCheck className='text-gray-300 font-bold text-3xl' />
                                        </label>
                                        <label className="w-full pl-4 py-2 " htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
