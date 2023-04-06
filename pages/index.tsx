import Layout from "@/components/Layout"
import Hero from "@/components/Landing/Hero"
import RecipeList from "@/components/Landing/RecipeList"

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <RecipeList />
      </Layout>
    </>
  )
}
