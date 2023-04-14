import Layout from "@/components/Layout"
import Collections from "@/components/Collections";
import { Merriweather_Sans } from 'next/font/google';
const crete = Merriweather_Sans({weight: '600', subsets: ['latin']})

export default function collections() {
    return (
        <Layout>
            <div className="w-full min-h-[700px] pl-20 py-2 flex flex-col justify-start items-start gap-10">
                <div className={`text-3xl font-bold mt-12 text-zinc-800 pl-4 ${crete.className}`}>
                    Collections
                </div>
                <Collections />
                {/* <div className="w-full flex flex-col gap-2 justify-start items-start">
                    <div className="text-xl font-bold text-zinc-800">
                        Create Your First Collection
                    </div>
                    <div className="w-[500px] text-sm font-thin text-zinc-800">
                        As you search, tap the heart icon to save your favorite places to stay or things to do to a collection.
                    </div>
                </div> */}
            </div>
        </Layout>
    )
}
