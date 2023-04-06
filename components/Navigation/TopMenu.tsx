import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/Food Recipe.png'
import Menu from './Menu'
import { BiSearchAlt } from 'react-icons/bi'
import Button from '../Button'
import { useFullscreenContentContext } from '@/Reducer/FullScreenContentReducer'

export default function TopMenu() {
    const [state, dispatch] = useFullscreenContentContext();
    const openSearch = () => {
        dispatch({ type: 'SHOW_MODAL' })
    }

    return (
        <>
            <div className="md:flex flex-row justify-center items-center gap-14 hidden">
                <div className="flex justify-center items-center">
                    <Image src={Logo} alt='logo' width={130} />
                </div>
                <Menu />
            </div>
            <div className="md:flex justify-center gap-6 items-center hidden">
                <BiSearchAlt onClick={() => openSearch()} className="text-2xl cursor-pointer text-slate-700" />
                <Button text={true}>Sign In</Button>
            </div>
            {/* top head on small screen */}
            <div className="w-full p-4 flex justify-center items-center md:hidden fixed top-0 border-b-2 border-slate-100 z-20 bg-white">
                <div className="flex justify-center items-center">
                    <Image src={Logo} alt='logo' width={120} />
                </div>
                <BiSearchAlt onClick={() => openSearch()} className="absolute left-6 text-2xl" />
                <Button text={true} className='absolute right-6 text-sm font-semibold text-slate-600'>Login</Button>
            </div>
        </>
    )
}
