import SliderContainer from "../SliderContainer"
import RecipeCard from "../RecipeCard"

export default function RecipeList({wrap}: {wrap?:boolean}) {
    const array = [1,2,3,4,5,6,7,8]
    const item = array.map(i => (
        <RecipeCard />
    ))

    return (
        <>
            <SliderContainer title="Hottest Food 🔥" items={item} wrap={wrap} />            
        </>
    )
}
