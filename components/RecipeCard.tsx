import Image, { StaticImageData } from 'next/image'
import { BiTime } from 'react-icons/bi';
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { GiSpoon } from 'react-icons/gi'
import Burger from '../assets/images/burger.jpg';

interface recipeCard {
  image?: StaticImageData,
  title?: string,
  calorie?: string,
  serving?: string,
  likeEvent?: () => void
}

export default function RecipeCard({ image, title, calorie, serving, likeEvent }: recipeCard) {
  return (
    <div className='w-40 h-40 md:w-64 md:h-56 flex flex-col flex-none justify-start items-center gap-2 border border-slate-300 
    overflow-hidden rounded-lg'>
      <div className='w-full h-36 md:h-48 bg-blue-200 overflow-hidden relative group'>
        <Image src={Burger} alt='burger' className='object-cover pointer-events-none' />
        <div className='w-full p-3 absolute top-0 bg-gradient-to-b  to-black z-10 flex justify-end invisible
        group-hover:visible'>
          <AiFillHeart onClick={likeEvent} className='text-3xl text-white cursor-pointer' />
        </div>
      </div>
      <div className='w-full flex flex-col text-md md:text-lg pl-4 text-slate-700 font-semibold'>
        <span>burger</span>
        <div className='flex flex-row gap-4'>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <GiSpoon className='text-red-400' />
            <span>220 cal</span>
          </div>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <AiFillHeart className='text-red-400' />
            <span>10</span>
          </div>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <AiFillStar className='text-red-400' />
            <span>3</span>
          </div>
        </div>
      </div>
      <div className='w-full px-4 pb-2 flex justify-start items-center text-slate-800'>
        <div className='flex justify-center items-center gap-1'>
          <BiTime className='text-sm md:text-md' />
          <span className='text-[0.6rem] md:text-[0.7rem]'> 15 min serving</span>
        </div>
      </div>
    </div>
  )
}
