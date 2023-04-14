import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import Button from "@/components/Button";
import RecipeCard from "@/components/RecipeCard";

export default function Collection() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <div className="w-full min-h-[700px] flex flex-col justify-start items-start gap-14 px-16 pt-20 pb-10">
                <div className="w-full flex justify-between items-center">
                    <div className="text-4xl font-bold text-zinc-800">
                        Collection Name
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Button text>
                            Delete
                        </Button>
                        <Button text>
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="w-full flex justify-start items-center gap-8 flex-wrap">
                    {
                        [...Array(3)].map(i => (
                            <RecipeCard key={i} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
