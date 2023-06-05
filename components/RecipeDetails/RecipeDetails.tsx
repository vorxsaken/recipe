import Image from "next/image"
import GiveComments from "./GiveComments";
import Comments from "./Comments";
import TitleRecipe from "./TitleRecipe";
import RecipeInfo from "./RecipeInfo";
import RecipeIngredient from "./RecipeIngredient";
import RecipeInstructions from "./RecipeInstructions";
import StarRating from "../StarRating";
import useSWR from 'swr';
import Skeletons from "../Skeletons";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

const getRecipe = async (recipeId: string) => {
    const fetchRecipe = await fetch(`http://localhost:3000/api/recipe/read/${recipeId}`);
    const recipe = await fetchRecipe.json();
    return recipe;
}

export default function RecipeDetails({ recipeID }: { recipeID: string }) {
    const { data, error } = useSWR(recipeID, getRecipe);
    const { data: session } = useSession();
    const userId = useSelector((state: any) => state.user.userInfo.id);

    const getrating = () => {
        const ratingValue = data.ratings.length > 0 ? data.ratings.filter((rating: any) => rating.recipeId === recipeID || rating.ownerId === userId)[0] : 0;
        return ratingValue;
    }

    const sendRating = async (value: number) => {
        await fetch(`http://localhost:3000/api/recipe/${getrating() != 0 ? 'update' : 'create'}/rating`, {
            method: 'POST',
            body: JSON.stringify({
                value: value,
                author: session?.user?.name,
                ownerId: userId,
                recipeId: recipeID,
                ratingId: getrating().id
            })
        }).then(res => res.json()).then(json => console.log(json)).catch((error) => console.log(error))
    }

    if (!data) {
        return (
            <div className='w-full flex justify-center items-start gap-8 pt-4 pb-14'>
                <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                    <div className='w-full h-96 overflow-hidden rounded-md relative flex justify-center items-center'>
                        <Skeletons hFull />
                    </div>
                    <Skeletons count={2} />
                </div>
                <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                    <div className="w-full flex flex-col gap-3">
                        <Skeletons count={3} />
                    </div>
                    <Skeletons count={5} />
                    <Skeletons count={5} />
                </div>
            </div>
        )
    }

    return (
        <div className='w-full flex justify-center items-start gap-8 pt-4 pb-14'>
            <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                <div className='w-full h-96 overflow-hidden rounded-md relative'>
                    <Image src={data.bigImage} alt='burger' fill className="pointer-events-none object-cover" />
                </div>
                <GiveComments />
                <Comments />
            </div>
            <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                <div className="w-full flex flex-col gap-3">
                    <TitleRecipe title={data.title} />
                    <StarRating value={getrating().value} starAction={value => sendRating(value)} />
                    <RecipeInfo calorie={data.calorie} />
                    <div className="text-slate-600 text-sm bg-slate-50 rounded-lg p-2">
                        {data.description}
                    </div>
                </div>
                <RecipeIngredient ingredients={data.ingredients} />
                <RecipeInstructions instructions={data.instructions} />
            </div>
        </div>
    )
}
