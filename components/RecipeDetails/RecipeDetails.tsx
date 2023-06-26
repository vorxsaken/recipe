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
import { fetcher } from "@/utils";

export default function RecipeDetails({ recipeID }: { recipeID: string }) {
    const { data: recipe } = useSWR(`http://localhost:3000/api/recipe/read/${recipeID || ''}`, fetcher, {revalidateOnFocus: false});
    const { data: comments } = useSWR(`http://localhost:3000/api/recipe/read/comment/${recipeID || ''}`, fetcher, {revalidateOnFocus: false});
    const { data: session } = useSession();
    const userId = useSelector((state: any) => state.user.userInfo.id);

    const getrating = () => {
        const ratingValue = recipe.ratings.length > 0 ? recipe.ratings.filter((rating: any) => rating.recipeId === recipeID || rating.ownerId === userId)[0] : 0;
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

    if (!recipe) {
        return (
            <div className='w-full flex justify-center items-start gap-8 pt-4 pb-14'>
                <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                    <div className='w-full h-96 overflow-hidden rounded-md relative flex justify-center items-center'>
                        <Skeletons type="image" />
                    </div>
                    <Skeletons type="text input" count={2} />
                </div>
                <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                    <div className="w-full flex flex-col gap-3">
                        <Skeletons type="title" />
                        <Skeletons type="subtitle" count={2} />
                    </div>
                    <Skeletons count={5} type='paragraph' />
                    <Skeletons count={5} type='paragraph' />
                    <Skeletons count={5} type='paragraph' />
                </div>
            </div>
        )
    }

    return (
        <div className='w-full flex justify-center items-start gap-8 pt-4 pb-14'>
            <div className="w-[600px] flex flex-col justify-center items-center gap-8">
                <div className='w-full h-96 overflow-hidden rounded-md relative bg-gray-200'>
                    <Image src={recipe.bigImage} alt='burger' fill className="pointer-events-none object-cover" />
                </div>
                <GiveComments id={recipeID} author={session?.user?.name as string} ownerId={userId} />
                <Comments comments={comments} author={session?.user?.name as string} userId={userId} />
            </div>
            <div className="w-[600px] flex flex-col gap-6 justify-start items-start">
                <div className="w-full flex flex-col gap-3">
                    <TitleRecipe owner={recipe.owner.name} ownerId={recipe.owner.id} recipeId={recipe.id} title={recipe.title} />
                    <StarRating value={getrating().value} starAction={value => sendRating(value)} />
                    <RecipeInfo calorie={recipe.calorie} />
                    <div className="text-slate-600 text-sm bg-slate-50 rounded-lg p-2">
                        {recipe.description}
                    </div>
                </div>
                <RecipeIngredient ingredients={recipe.ingredients} />
                <RecipeInstructions instructions={recipe.instructions} />
            </div>
        </div>
    )
}
