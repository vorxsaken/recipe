import { useRouter } from "next/router"
import Layout from "@/components/Layout";
import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";

export default function Recipe({ }) {
    const router = useRouter();
    const { recipeDetails } = router.query;

    return (
        <Layout>
            <div className="pt-6">
                <RecipeDetails recipeID={recipeDetails as string} />
            </div>
        </Layout>
    )
}
