import Burger from '../../assets/images/burger.jpg';
import Image from 'next/image';
import { BiAddToQueue, BiLogOut, BiSave, BiUser } from 'react-icons/bi'

export default function UserMenu() {
  return (
    <div className='relative group'>
        <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer'>
            <Image src={Burger} alt='avatar' className='h-full object-fill' />
        </div>
        <div className='w-52 py-2 absolute top-8 -left-40 bg-white rounded-lg drop-shadow-lg flex-col justify-center items-center
        text-sm text-slate-800 group-hover:flex hidden delay-200'>
            <div className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                <BiUser className='text-xl' />
                <span>Profile</span>
            </div>
            <div className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                <BiAddToQueue className='text-xl' />
                <span>Create Recipe</span>
            </div>
            <div className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                <BiSave className='text-xl' />
                <span>Saved Recipes</span>
            </div>
            <div className='w-full relative px-6 py-4 flex gap-4 justify-start items-center hover:bg-gray-100 cursor-pointer'>
                <BiLogOut className='text-xl' />
                <span>Logout</span>
            </div>
        </div>
    </div>
  )
}
