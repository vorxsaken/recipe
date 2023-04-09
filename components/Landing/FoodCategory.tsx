import SliderContainer from "../SliderContainer"
import SwipeContainer from "../SwipeContainer"
import CategoryCard from "../CategoryCard"

export default function FoodCategory() {
    const array = [1,2,3,4,5,6,7,8,9, 10, 11, 12, 13];
    const category = array.map((i, index) => (
        <CategoryCard key={index} />
    ))

    return (
        <SliderContainer title="Choose Categories 🍔" items={category} />
    )
}
