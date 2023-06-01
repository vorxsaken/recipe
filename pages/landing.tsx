import Layout from "@/components/Layout"
import Hero from "@/components/Landing/Hero"
import RecipeList from "@/components/Landing/RecipeList"
import FoodCategory from "@/components/Landing/FoodCategory";

export default function Landing() {
  return (
    <>
      <Layout>
        <Hero />
        <RecipeList />
        <FoodCategory />
      </Layout>
    </>
  )
}
