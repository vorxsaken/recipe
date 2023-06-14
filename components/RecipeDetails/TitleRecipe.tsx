import { useState } from 'react'
import { AiFillFolderAdd } from "react-icons/ai";
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
            <div className='bg-gray-100 hover:bg-gray-200 group p-2 rounded-xl cursor-pointer' onClick={showSaveRecipeEvent}>
                <AiFillFolderAdd
                    className="text-3xl text-slate-500 group-hover:text-slate-600" 
                />
            </div>
            <SaveRecipe show={showSaveRecipe} closeEvent={showSaveRecipeEvent} createEvent={showCreateCollectionEvent} />
            <CreateCollection show={showCreateCollection} changeShowEvent={showCreateCollectionEvent} />
        </div>
    )
}
