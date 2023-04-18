import Layout from "@/components/Layout"
import PileButton from "@/components/PileButton"
import RecipeCard from "@/components/RecipeCard"

export default function Home() {
    return (
        <Layout>
            <div className="min-h-[700px] flex flex-col justify-start items-start gap-8 py-10 px-20">
                <div className="w-full flex justify-center items-center">
                    <PileButton />
                </div>
                <div className="w-full flex justify-center items-start gap-4 flex-wrap">
                    {
                        [...Array(10)].map(i => (
                            <RecipeCard key={i} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
