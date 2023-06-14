import Image, { StaticImageData } from 'next/image'
import { BiTime } from 'react-icons/bi';
import { AiFillFolderAdd, AiFillStar } from 'react-icons/ai'
import { GiSpoon } from 'react-icons/gi'
import Link from 'next/link';
import Burger from '../assets/images/burger.jpg';

interface recipeCard {
  image?: StaticImageData,
  title?: string,
  calorie?: string,
  serving?: string,
  link: string,
  likeEvent?: () => void
}

export default function RecipeCard({ image, title, calorie, serving, link, likeEvent }: recipeCard) {

  return (
    <div className='w-44 h-48 md:w-60 md:h-56 flex flex-col flex-none justify-start items-center gap-2 border border-slate-300 
    overflow-hidden rounded-lg cursor-pointer relative group'>
      <Link scroll={false} href={`/?recipeDetails=${link}`} as={`/recipe/${link}`} className='w-full h-48 md:h-56 absolute top-0 z-10'/>
      <div className='w-auto absolute top-2 right-3 bg-gradient-to-b bg-white to-black z-30 flex justify-end invisible group-hover:visible rounded-md p-1'>
        <AiFillFolderAdd onClick={() => {console.log('like')}} className='text-2xl text-slate-500 cursor-pointer' />
      </div>
      <div className='w-full h-36 md:h-48 bg-blue-200 overflow-hidden relative'>
        <Image src={image || ''} alt='burger' fill className='object-cover pointer-events-none' />
      </div>
      <div className='w-full flex flex-col text-md md:text-lg pl-2 md:pl-4 text-slate-700 font-semibold'>
        <span>{title}</span>
        <div className='flex flex-row gap-2'>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <GiSpoon className='text-red-400' />
            <span>{calorie} cal</span>
          </div>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <AiFillFolderAdd className='text-red-400' />
            <span>10</span>
          </div>
          <div className='text-xs text-slate-400 font-thin flex flex-row gap-2'>
            <AiFillStar className='text-red-400' />
            <span>3</span>
          </div>
        </div>
      </div>
      <div className='w-full px-2 md:px-4 pb-2 flex justify-start items-center text-slate-800'>
        <div className='flex justify-center items-center gap-1'>
          <BiTime className='text-sm md:text-md' />
          <span className='text-[0.6rem] md:text-[0.7rem]'> 15 min serving</span>
        </div>
      </div>
    </div>
  )
}
