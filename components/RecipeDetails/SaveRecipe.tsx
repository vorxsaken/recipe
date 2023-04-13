import FullScreenContent from "../FullScreenContent"
import { BsPlus, BsX } from 'react-icons/bs'
import Image from "next/image"
import Burger from '../../assets/images/burger.jpg';

export default function SaveRecipe({ show, createEvent, closeEvent }: { show: boolean, createEvent: () => void, closeEvent: () => void }) {
    return (
        <FullScreenContent show={show} onChangeState={closeEvent} bg >
            <BsX onClick={closeEvent} className="absolute top-4 left-4 text-3xl cursor-pointer" />
            <div className="w-full p-4 bg-white flex flex-col justify-center items-center font-bold mt-6">
                <div onClick={createEvent} className="w-full p-4 flex justify-start items-center gap-4 cursor-pointer">
                    <BsPlus className="text-5xl text-slate-800" />
                    <span>Create Collection</span>
                </div>
                <div className="w-full p-4 flex justify-start items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 overflow-hidden rounded-md">
                        <Image src={Burger} alt="sndks" className="h-full" />
                    </div>
                    <span>spicy recipes</span>
                </div>
            </div>
        </FullScreenContent>
    )
}
