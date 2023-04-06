import Image from 'next/image'
import Burger from '../assets/images/burger.jpg';
import { BiTime } from 'react-icons/bi';

export default function RecipeCard() {
  return (
    <div className='w-72 h-64 flex flex-col flex-none justify-start items-center gap-2 border border-slate-300 
    overflow-hidden rounded-lg'>
      <div className='w-full h-48 bg-blue-200 overflow-hidden'>
        <Image src={Burger} alt='burger' className='object-fill pointer-events-none' />
      </div>
      <div className='w-full flex flex-col text-lg pl-4 text-slate-700 font-semibold'>
        <span>Burger</span>
        <span className='text-xs text-slate-400 font-thin'>220 cal</span>
      </div>
      <div className='w-full px-4 pb-2 flex justify-start items-center text-slate-800'>
        <div className='flex justify-center items-center gap-2'>
          <BiTime className='text-lg' />
          <span className='text-[0.7rem]'>15 min serving</span>
        </div>
      </div>
    </div>
  )
}
