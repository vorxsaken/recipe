import Layout from "@/components/Layout"
import PileButton from "@/components/PileButton"
import RecipeCard from "@/components/RecipeCard"
import { useState } from 'react'
import RecipeDetailsModal from "@/components/RecipeDetails/RecipeDetailsModal"
import Observer from "@/components/Observer"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addMultiple, selectAll, emptyRecipe } from "@/store/Reducers/recipeReducer"

export default function Home() {
    const dispatch = useDispatch();
    const [showLoad, setShowLoad] = useState(true);
    const [selected, setSelected] = useState('');
    const userId = useSelector((state: any) => state.user.userInfo.id);
    const SKIP_PAGE = useSelector((state: any) => state.user.recipeSkip);
    const CHECK_END_OF_PAGE = useSelector((state: any) => state.recipe.endPage);
    const recipes = useSelector(state => selectAll(state));

    const fetchRecipe = () => {
        fetch(`/api/recipe/read/${selected === 'Following' ? 'following' : ''}`, {
            method: 'POST',
            body: JSON.stringify({
                skip: SKIP_PAGE,
                id: userId
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.length < CHECK_END_OF_PAGE) setShowLoad(false);
                dispatch(addMultiple(json));
            })
            .catch(error => console.log(error))
    }

    const changeSelected = (sel: any) => {
        setShowLoad(true);
        dispatch(emptyRecipe());
        setSelected(sel);
    }

    const Recipes = recipes.length > 0 && (
        <>
            {
                recipes.map((recipe: any) => (
                    <RecipeCard
                        recipeId={recipe.id}
                        key={recipe.id}
                        image={recipe.smallImage}
                        title={recipe.title}
                        calorie={recipe.calorie}
                        ratings={recipe.ratings}
                        collection={recipe.collections}
                        serving={recipe.servingTime}
                        asLink
                        link={`/?recipeDetails=${recipe.id}`}
                    />
                ))
            }
        </>
    )

    const loading = showLoad ? (
        <>
            <Observer trigger={() => fetchRecipe()} />
        </>
    ) : recipes.length === 0 ? (
        <div className="w-full h-[200px] flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">
                No Recipes
            </span>
            <span className="text-sm font-thin text-gray-500">
                Think Of Following Some Other Users ?
            </span>
        </div>
    ) : (
        <div className="w-full h-[200px] flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">
                End Of Page
            </span>
            <span className="text-sm font-thin text-gray-500">
                Yo.. You have Some Problem With Your Taste ?
            </span>
        </div>
    )

    return (
        <div>
            <RecipeDetailsModal route="/" />
            <Layout title="Home">
                <div className={`min-h-[700px] flex flex-col justify-start items-center gap-8 py-10 overflow-hidden`}>
                    <div className="w-full flex justify-center items-center mt-10 md:mt-0">
                        <PileButton value={changeSelected} defaultValue="Recent">
                            <span>Recent</span>
                            {
                                userId && <span>Following</span>
                            }
                        </PileButton>
                    </div>
                    <div className="w-full flex justify-center px-3 md:justify-start items-start gap-2 md:gap-4 md:pl-10 flex-wrap">
                        {Recipes}
                        {loading}
                    </div>
                </div>
            </Layout>

        </div>
    )
}
