import { useRouter } from "next/router"
import Layout from "@/components/Layout";
import RecipeDetails from "@/components/RecipeDetails/index";

export default function Recipe() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <RecipeDetails />            
        </Layout>
    )
}
