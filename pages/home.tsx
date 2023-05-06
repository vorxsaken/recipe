import Layout from "@/components/Layout"
import PileButton from "@/components/PileButton"
import RecipeCard from "@/components/RecipeCard"

export default function Home() {
    return (
        <Layout>
            <div className="min-h-[700px] flex flex-col justify-start items-center gap-8 py-10">
                <div className="w-full flex justify-center items-center mt-10 md:mt-0">
                    <PileButton />
                </div>
                <div className="md:w-[1350px] w-full flex justify-center md:justify-start items-start gap-2 md:gap-4 flex-wrap">
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
