import RecipeCard from "../RecipeCard"
import SwipeContainer from "../SwipeContainer"
import { Bungee } from 'next/font/google'
const bungee = Bungee({ weight: '400', subsets: ['latin'] })

export default function RecipeList() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8 px-20 py-5">
            <div className={`w-full text-center text-3xl font-bold ${bungee.className}`}>
                <span className="text-red-500">POPULAR</span> FOOD 🔥
            </div>
            <SwipeContainer>
                
            </SwipeContainer>
        </div>
    )
}
