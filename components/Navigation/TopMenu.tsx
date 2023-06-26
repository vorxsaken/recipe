import Image from 'next/image'
import Logo from '../../assets/images/Food Recipe.png'
import Menu from './Menu'
import UserMenu from './UserMenu'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import TextField from "../TextField"
import SelectField from "../SelectField"
import Button from "../Button"
import FullScreenContent from "../FullScreenContent"
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react'

export default function TopMenu() {
    const [showModal, setShowModal] = useState(false);
    const { data: session, status } = useSession();

    const navSignButton = status === 'authenticated' ? <UserMenu /> : <Button onClick={() => signIn('google')} text={true}>Sign In</Button>

    const openSearch = () => {
        setShowModal(!showModal);
    }

    const nutritions = [
        'Carbs',
        'Protein',
        'Calories',
        'Fat',
        'Caffeine',
        'Calcium',
        'Cholestrol',
        'VitaminA',
        'VitaminC',
        'VitaminD',
        'VitaminE',
        'VitaminK',
        'VitaminB1',
        'VitaminB2',
        'VitaminB5',
        'VitaminB3',
        'VitaminB6',
        'VitaminB12',
    ]

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
                {navSignButton}
            </div>
            {/* search dialog on small screen */}
            <FullScreenContent show={showModal} bg={true} onChangeState={openSearch}>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <TextField icon={<AiOutlineSearch />} placeholder={'Search'} />
                    <div className="flex flex-row justify-center items-center gap-2">
                        {/* <SelectField options={nutritions} placeholder='Filter' /> */}
                        <TextField small={true} placeholder='Min' />
                        <TextField small={true} placeholder='Max' />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center py-8">
                    <BiSearchAlt className="text-8xl text-slate-300" />
                    <p className="text-center text-md text-slate-300">search result in here</p>
                </div>
                <Button>Terapkan</Button>
            </FullScreenContent>
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
