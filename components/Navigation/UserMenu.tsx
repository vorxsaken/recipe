import Burger from '../../assets/images/burger.jpg';
import Image from 'next/image';
import { BiAddToQueue, BiLogOut, BiSave, BiUser } from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function UserMenu() {
    const { data } = useSession();
    const userAvatar = data?.user?.image as any;

    return (
        <div className='relative group'>
            <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer relative'>
                <Image src={userAvatar} alt='avatar' fill className='object-cover' />
            </div>
            <div className='w-52 py-2 absolute top-8 -left-40 bg-white rounded-lg drop-shadow-lg flex-col justify-center items-center
            text-sm text-slate-800 group-hover:flex hidden delay-200'>
                <Link href='/profile' className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                    <BiUser className='text-xl' />
                    <span>Profile</span>
                </Link>
                <Link href="/createRecipe" className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                    <BiAddToQueue className='text-xl' />
                    <span>Create Recipe</span>
                </Link>
                <Link href="/collections" className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                    <BiSave className='text-xl' />
                    <span>Saved Recipes</span>
                </Link>
                <div
                    className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'
                    onClick={() => signOut()}
                >
                    <BiLogOut className='text-xl' />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}
