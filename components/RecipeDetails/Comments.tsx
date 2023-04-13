import Image from "next/image"
import Burger from '../../assets/images/burger.jpg'

export default function Comments() {
    return (
        <div className="w-full p-2 flex flex-col justify-start items-start gap-6">
            <div className="flex justify-start items-start gap-4">
                <div className="w-10 h-10 overflow-hidden rounded-full flex justify-center items-center">
                    <Image src={Burger} alt='burger' className="h-full object-fill" />
                </div>
                <div className=" w-[500px] flex flex-col justify-start items-start">
                    <span className="font-bold text-md text-slate-800">
                        Fahmi
                    </span>
                    <span className="text-sm text-slate-700">
                        this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!! this is top notch recipe !!!
                    </span>
                </div>
            </div>
        </div>
    )
}
