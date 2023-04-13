import Image from "next/image"
import Burger from '../../assets/images/burger.jpg';
import GiveComments from "./GiveComments";
import Comments from "./Comments";
import TitleRecipe from "./TitleRecipe";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredient from "./RecipeIngredient";
import RecipeInstructions from "./RecipeInstructions";
import StarRating from "../StarRating";

export default function RecipeDetails() {
    return (
        <div className='w-full flex justify-center items-start gap-8 py-14'>
            <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                <div className='w-full h-96 overflow-hidden rounded-md'>
                    <Image src={Burger} alt='burger' className="pointer-events-none" />
                </div>
                <GiveComments />
                <Comments />
            </div>
            <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                <div className="w-full flex flex-col gap-3">
                    <TitleRecipe />
                    <StarRating />
                    <RecipeInfo />
                </div>
                <RecipeIngredient />
                <RecipeInstructions />
            </div>
        </div>
    )
}
