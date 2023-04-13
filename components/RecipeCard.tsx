import Image, { StaticImageData } from 'next/image'
import { BiTime } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai'
import Burger from '../assets/images/burger.jpg';

interface recipeCard {
  image?: StaticImageData,
  title?: string,
  calorie?: string,
  serving?: string,
  likeEvent?: () => void
}

export default function RecipeCard({ image, title, calorie, serving, likeEvent }: recipeCard ) {
  return (
    <div className='w-40 h-40 md:w-72 md:h-64 flex flex-col flex-none justify-start items-center gap-2 border border-slate-300 
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
        <span className='text-xs text-slate-400 font-thin'>220 cal</span>
      </div>
      <div className='w-full px-4 pb-2 flex justify-start items-center text-slate-800'>
        <div className='flex justify-center items-center gap-2'>
          <BiTime className='text-sm md:text-lg' />
          <span className='text-[0.6rem] md:text-[0.7rem]'> 15 min serving</span>
        </div>
      </div>
    </div>
  )
}
