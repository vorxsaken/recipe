import Layout from "@/components/Layout"
import Burger from '../assets/images/wallpaperflare.com_wallpaper.jpg'
import Image from "next/image"
import RecipeCard from "@/components/RecipeCard"
import Button from "@/components/Button"
import { BsPlus, BsCheck2 } from 'react-icons/bs'
import { useState } from 'react'

export default function Profile() {
    const [isNotFollow, setIsNotFollow] = useState(true);
    const followed = () => {
        setIsNotFollow(!isNotFollow);
    }
    return (
        <Layout>
            <div className="min-h-[700px] flex flex-col justify-start items-center gap-10 pb-10">
                <div className="flex justify-start items-start gap-4 mt-10">
                    <div className="w-44 h-44 rounded-full overflow-hidden bg-slate-300 relative">
                        <Image src={Burger} alt='avatar profile' fill className="object-cover" />
                    </div>
                    <div className="max-w-[300px] flex flex-col gap-2">
                        <div className="text-4xl font-bold text-zinc-800">
                            Vorxsaken
                        </div>
                        <div className="text-sm font-medium text-zinc-500">
                            lorem ipsum dolor siamet lorem ipsum dolor siametlorem ipsum dolor siamet
                        </div>
                        <Button small text={isNotFollow} onClick={followed}>
                            {
                                !isNotFollow ? (
                                    <div className="flex flex-row gap-1">
                                        <BsCheck2 className="text-lg" />
                                        <span className="text-sm font-thin">Followed</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-1">
                                        <BsPlus className="text-lg" />
                                        <span className="text-sm font-thin">Follow</span>
                                    </div>
                                )
                            }
                        </Button>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-4 pl-20">
                    <div className="text-xl font-bold text-zinc-800">
                        Recipes
                    </div>
                    <div className="w-full flex flex-wrap justify-start items-center gap-4">
                        <RecipeCard />
                    </div>
                </div>
            </div >
        </Layout >
    )
}
