import React, { useState, createElement, useEffect } from 'react'
import TextField from '../TextField'
import { BsPlusCircle, BsTrash } from 'react-icons/bs'

interface AddInsOrIng {
    placeholder: string,
    number?: boolean
}

export default function AddList({placeholder, number}: AddInsOrIng) {
    const [listIng, setlistIng] = useState<any[]>([]);

    const addTextField = () => {
        setlistIng([...listIng, textField])
    }

    const deleteTextField = () => {
        const listArray = [...listIng];
        listArray.pop();
        setlistIng(listArray)
    }

    const textField = createElement('li', { key: listIng.length }, createElement(TextField, {
        borderLess: true,
        placeholder: `${placeholder} ${listIng.length + 2}`,
    }))

    return (
        <div className='w-full'>
            <ul id="list" className={`${number ? 'list-decimal' : 'list-disc'} list-outside flex flex-col gap-4 text-xs`}>
                <li>
                    <div className='relative'>
                        <TextField borderLess placeholder={`${placeholder} 1`} />
                        <div className='absolute -top-6 border border-zinc-400 rounded-xl px-2 py-3 -right-10 flex 
                        flex-col justify-center items-center gap-4 text-zinc-800'>
                            <BsPlusCircle onClick={addTextField} className='text-lg cursor-pointer hover:text-slate-500' />
                            <BsTrash onClick={deleteTextField} className='text-lg cursor-pointer hover:text-slate-500' />
                        </div>
                    </div>
                </li>
                {listIng}
            </ul>
        </div>
    )
}
