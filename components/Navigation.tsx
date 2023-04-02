import Image from "next/image"
import Logo from '../assets/images/Food Recipe.png'
import { AiOutlineSearch, AiOutlineHome, AiOutlineAlert, AiOutlineContacts } from 'react-icons/ai'
import { BiFoodMenu, BiSearchAlt } from 'react-icons/bi'

export default function Navigation() {
  
  const openSearch = () => {

  }

  return (
    <div className='w-full h-16 border-b-2 border-slate-100 flex justify-center items-center gap-14 fixed md:top-0 
    bottom-0 bg-white z-10'>
      <div className="md:flex flex-row justify-center items-center gap-14 hidden">
        <div className="flex justify-center items-center">
          <Image src={Logo} alt='logo' width={120} />
        </div>
        <div className="flex justify-center items-center gap-6 font-semibold text-slate-800 text-sm">
          <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Home</div>
          <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">About</div>
          <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Recipes</div>
          <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Contact</div>
        </div>
      </div>
      <div className="md:flex justify-center items-center hidden">
        <div className="relative">
          <AiOutlineSearch className="text-md text-slate-800 absolute top-[28%] left-3" />
          <input type="text" placeholder="Search" className="w-52 h-8 outline-none border border-slate-800 rounded-2xl
          pl-9 pr-4 text-xs placeholder:text-slate-800" />
        </div>
      </div>
      {/* navigation on small screen */}
      <div className="w-full p-4 flex justify-center items-center md:hidden fixed top-0 border-b-2 border-slate-100 z-10">
        <div className="flex justify-center items-center">
          <Image src={Logo} alt='logo' width={120} />
        </div>
        <BiSearchAlt onClick={() => openSearch} className="absolute right-6 text-2xl cursor-pointer" />
      </div>
      {/* search dialog */}
      <div className="w-full h-full fixed bg-slate-800 bg-opacity-5 top-0 flex justify-center items-start px-8 z-20">
        <div className="w-full h-20 bg-white rounded-lg shadow-lg relative top-24 flex flex-col justify-center items-center">
          
        </div>
      </div>
      <div className="w-full px-6 py-4 flex justify-between items-center border-t-2 border-slate-100 md:hidden">
        <div className="flex flex-col items-center justify-center">
          <AiOutlineHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AiOutlineAlert className="text-2xl" />
          <span className="text-sm">About</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <BiFoodMenu className="text-2xl" />
          <span className="text-sm">Recipes</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AiOutlineContacts className="text-2xl" />
          <span className="text-sm">Contact</span>
        </div>
      </div>
    </div>
  )
}
