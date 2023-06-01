import { useState, createElement, forwardRef, useImperativeHandle, useEffect } from 'react'
import TextField from '../TextField'
import { BsPlusCircle, BsTrash } from 'react-icons/bs'
import Button from '../Button'

interface instrucUI { setInstructions: (e: any) => void, values?: string[] }

const AddListInstructions = forwardRef((props: instrucUI, ref) => {
    const [listIns, setlistIns] = useState<any[]>([]);
    const { setInstructions, values } = props;

    const addTextField = () => {
        setlistIns([...listIns, textField])
    }

    const deleteTextField = () => {
        const listArray = [...listIns];
        listArray.pop();
        setlistIns(listArray)
    }

    const textField = createElement('li', { key: listIns.length }, createElement(TextField, {
        borderLess: true,
        placeholder: `Instruction ${listIns.length + 1}`,
        id: listIns.length + 1
    }))

    const initValue = values?.map((value, index) => {
        return createElement('li', { key: index }, createElement(TextField, {
            borderLess: true,
            placeholder: `Instruction ${index + 1}`,
            id: index + 1,
            value: value
        }))
    })

    useEffect(() => {
        if (values) {
            setlistIns(initValue as any)
        } else {
            setlistIns([...listIns, textField])
        }
    }, [])

    useImperativeHandle(ref, () => ({
        getInstructions() {
            let instructionsArray: Object[] = [];
            for (let i = 1; i < listIns.length + 1; i++) {
                let textElement = document.getElementById(`${i}`) as any;
                instructionsArray = [...instructionsArray, textElement.value]
            }
            setInstructions(instructionsArray)
        }
    }))

    return (
        <div className='w-full flex flex-col gap-8 relative'>
            <div className='absolute -top-10 -right-10 flex flex-col justify-center items-center gap-3 rounded-xl border border-slate-400
        text-slate-900 text-xl px-1 py-2 z-10'>
                <BsPlusCircle onClick={addTextField} className='hover:text-slate-600 cursor-pointer' />
                <BsTrash onClick={deleteTextField} className='hover:text-slate-600 cursor-pointer' />
            </div>
            <ul className='list-decimal text-xs flex flex-col gap-4'>
                {/* {
                    !values && (
                        <li>
                            <TextField id='1' borderLess placeholder='Instruction 1' large />
                        </li>
                    )
                } */}
                {listIns}
            </ul>
        </div>
    )
})

export default AddListInstructions