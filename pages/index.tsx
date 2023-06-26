import Layout from "@/components/Layout"
import PileButton from "@/components/PileButton"
import RecipeCard from "@/components/RecipeCard"
import store from "../store/index"
import { getInitialRecipe, selectAllRecentRecipe } from '../store/Reducers/recipeReducer'
import { useState, useEffect, useRef } from 'react'
import Lottie from 'lottie-react';
import loading from '../assets/newScene.json'
import RecipeDetailsModal from "@/components/RecipeDetails/RecipeDetailsModal"

export default function Home() {
    const [recents, setRecents] = useState<any[]>([])
    const pileButt = ['Recent', 'Following'];
    const pileButtUrl = ['/home', '/home/following']
    const lotRef = useRef(null);

    useEffect(() => {
        const loadRef = lotRef.current as any;
        loadRef.setSpeed(2.5);
        
        const getRecipe = async () => {
            await store.dispatch(getInitialRecipe());
            const recipes = selectAllRecentRecipe.selectAll(store.getState()) as any
            setRecents(recipes)
        }

        return () => {
            getRecipe()
        }
    }, [])

    return (
        <div>
            <RecipeDetailsModal route="/" />
            <Layout>
                <div className={`min-h-[700px] flex flex-col justify-start items-center gap-8 py-10 overflow-hidden`}>
                    <div className="w-full flex justify-center items-center mt-10 md:mt-0">
                        <PileButton buttons={pileButt} select={pileButt[0]} url={pileButtUrl} />
                    </div>
                    <div className="w-full flex justify-center md:justify-start items-start gap-2 md:gap-4 md:pl-10 flex-wrap">
                        {
                            recents.length > 0  ?
                                recents.map((recent: any) => (
                                    <RecipeCard
                                        recipeId={recent.id}
                                        key={recent.id}
                                        image={recent.smallImage}
                                        title={recent.title}
                                        calorie={recent.calorie}
                                        asLink
                                        link={`/?recipeDetails=${recent.id}`}
                                    />
                                )) : (
                                    <div className="w-full py-8 flex justify-center items-center">
                                        <Lottie className="w-52" animationData={loading} lottieRef={lotRef} />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Layout>

        </div>
    )
}
