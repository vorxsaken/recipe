import { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { Poppins } from 'next/font/google'
const lobster = Poppins({ weight: '400', subsets: ['latin'] });
import CreateCollection from './CreateCollection';
import SaveRecipe from './SaveRecipe';

export default function TitleRecipe({ title }: { title: string }) {
    const [showSaveRecipe, setshowSaveRecipe] = useState(false)
    const [showCreateCollection, setShowCreateCollection] = useState(false);

    const showSaveRecipeEvent = () => {
        setshowSaveRecipe(!showSaveRecipe);
    }

    const showCreateCollectionEvent = () => {
        setShowCreateCollection(!showCreateCollection)
    }

    return (
        <div className="w-full flex justify-center items-start">
            <span className={`w-full text-4xl font-bold text-slate-800 ${lobster.className}`}>
                {title}
            </span>
            <AiOutlineHeart
                onClick={showSaveRecipeEvent}
                className="text-4xl text-slate-800 cursor-pointer" />
            <SaveRecipe show={showSaveRecipe} closeEvent={showSaveRecipeEvent} createEvent={showCreateCollectionEvent} />
            <CreateCollection show={showCreateCollection} changeShowEvent={showCreateCollectionEvent} />
        </div>
    )
}
