import React from 'react'
import Image from 'next/image';
import Burger from '../../assets/images/burger.jpg';
import Image1 from '../../assets/images/sbdkajbskjdakjsdk.jpg';
import Image2 from '../../assets/images/wallpaperflare.com_wallpaper (10).jpg';
import Image3 from '../../assets/images/wallpaperflare.com_wallpaper.jpg';

interface collections {

}

export default function Collections(props: collections) {

  const { } = props;

  return (
    <div className='flex flex-col gap-3 cursor-pointer' {...props}>
      <div className='w-[420px] h-60 flex justify-start items-start rounded-2xl overflow-hidden gap-1'>
        <div className='w-[70%] h-full overflow-hidden'>
          <Image src={Burger} alt="preview Image" className='h-full pointer-events-none' />
        </div>
        <div className='w-[30%] h-full flex flex-col justify-start items-center gap-1'>
          <div className='w-full h-[33%] overflow-hidden'>
            <Image src={Image1} alt="image preview 1" className='h-full pointer-events-none' />
          </div>
          <div className='w-full h-[33%] overflow-hidden'>
            <Image src={Image3} alt="image preview 2" className='h-full pointer-events-none' />
          </div>
          <div className='w-full h-[34%] overflow-hidden'>
            <Image src={Image2} alt="image preview 3" className='h-full pointer-events-none' />
          </div>
        </div>
      </div>
      <div className='text-xl font-semibold'>
        Collection Name
      </div>
    </div>
  )
}
