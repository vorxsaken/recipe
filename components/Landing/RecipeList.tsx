import SliderContainer from "../SliderContainer"
import RecipeCard from "../RecipeCard"
import SaveRecipe from "../RecipeDetails/SaveRecipe"
import CreateCollection from "../RecipeDetails/CreateCollection"
import { useState } from 'react';

export default function RecipeList({ wrap }: { wrap?: boolean }) {
    const [saveRecipe, setsaveRecipe] = useState(false);
    const [createCollection, setcreateCollection] = useState(false);

    const item = [...Array(8)].map(i => (
        <RecipeCard likeEvent={() => setsaveRecipe(!saveRecipe)} />
    ))

    return (
        <>
            <SliderContainer title="Hottest Food 🔥" items={item} wrap={wrap} />
            <SaveRecipe
                show={saveRecipe}
                closeEvent={() => setsaveRecipe(!saveRecipe)}
                createEvent={() => setcreateCollection(!createCollection)}
            />
            <CreateCollection
                show={createCollection}
                changeShowEvent={() => setcreateCollection(!createCollection)}
            />
        </>
    )
}
