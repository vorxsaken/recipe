import Image from 'next/image'
import Food from '../assets/images/food.png';

export default function CategoryCard() {
  return (
    <div className='w-48 h-48 flex flex-col gap-8 justify-center items-center flex-none'>
        <div className='w-full h-20 flex justify-center items-center'>
            <Image src={Food} alt='category' width={130} className='pointer-events-none' />
        </div>
        <div className='w-full text-center font-semibold text-slate-800 text-sm'>
            Dish
        </div>
    </div>
  )
}
