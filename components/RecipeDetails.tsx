import Image from "next/image"
import Burger from '../assets/images/burger.jpg';
import TextField from "./TextField";
import Button from "./Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTime, BiBowlHot, BiStar } from 'react-icons/bi'
import { GiSpoon } from 'react-icons/gi'
import { Poppins } from 'next/font/google'
const lobster = Poppins({ weight: '400', subsets: ['latin'] });

export default function RecipeDetails() {
    return (
        <div className='w-full flex justify-center items-start gap-8 py-14'>
            <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                <div className='w-full overflow-hidden rounded-md'>
                    <Image src={Burger} alt='burger' />
                </div>
                <div className="w-full flex flex-col justify-center items-end gap-4">
                    <TextField textArea={true} width={45} placeholder='what do you think about this recipe ?' />
                    <div className="flex justify-center items-center gap-4 ">
                        <Button text={true}>
                            Cancel
                        </Button>
                        <Button>
                            Send
                        </Button>
                    </div>
                </div>
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
            </div>
            <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                <div className="w-full flex justify-center items-start">
                    <span className={`w-full text-4xl font-bold text-slate-800 ${lobster.className}`}>
                        The Smokey Joe's BBQ Burger
                    </span>
                    <AiOutlineHeart className="text-4xl text-slate-800" />
                </div>
                <div className="flex justify-start items-start gap-4">
                    <div className="flex justify-center items-center gap-2">
                        <BiTime className="text-lg text-red-400 " />
                        <span className="text-sm text-slate-700">15 min serving</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <BiBowlHot className="text-lg text-red-400" />
                        <span className="text-sm text-slate-700">2 servings</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <BiStar className="text-lg text-red-400" />
                        <span className="text-sm text-slate-700">4</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <GiSpoon className="text-lg text-red-400" />
                        <span className="text-sm text-slate-700">220 cal</span>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <span className="text-lg font-bold text-slate-600">
                        Ingredients
                    </span>
                    <ul className="font-thin list-disc list-outside text-slate-600 pl-8">
                        <li className="pl-1">4 boneless, skinless chicken breasts</li>
                        <li className="pl-1">3 tbsp olive oil</li>
                        <li className="pl-1">3 tbsp lemon juice</li>
                        <li className="pl-1">2 cloves garlic, minced</li>
                        <li className="pl-1">1 tbsp fresh thyme leaves, chopped</li>
                        <li className="pl-1">Salt and black pepper, to taste</li>
                    </ul>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <span className="text-lg font-bold text-slate-600">
                        Instructions
                    </span>
                    <ul className="font-thin list-decimal list-outside text-slate-600 pl-8">
                        <li className="pl-1">Preheat grill to medium-high heat.</li>
                        <li className="pl-1">In a small bowl, whisk together olive oil, lemon juice, honey, garlic, thyme, salt, and black pepper.</li>
                        <li className="pl-1">Place chicken breasts in a large, shallow dish and pour marinade over the top, making sure each breast is well coated.</li>
                        <li className="pl-1">Marinate in the refrigerator for at least 30 minutes.</li>
                        <li className="pl-1">Remove chicken from marinade and discard any excess.</li>
                        <li className="pl-1">Grill chicken for 6-8 minutes per side, or until fully cooked through.</li>
                        <li className="pl-1">Serve with your favorite sides and enjoy!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
