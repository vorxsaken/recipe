import Layout from "@/components/Layout"
import Collections from "@/components/Collections";
import { Merriweather_Sans } from 'next/font/google';
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const crete = Merriweather_Sans({ weight: '600', subsets: ['latin'] })

export default function collections({ collections }: { collections: any }) {
    console.log(collections);
    return (
        <Layout>
            <div className="w-full min-h-[700px] pl-20 py-2 flex flex-col justify-start items-start gap-10 pb-20">
                <div className={`text-3xl font-bold mt-12 text-zinc-800 pl-4 ${crete.className}`}>
                    Collections
                </div>
                <div className="flex flex-wrap justify-start items-start gap-6">
                    {
                        collections.collections.map((collection: any) => (
                            <Collections
                                key={collection.id}
                                kollection={collection}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}


export const getServerSideProps = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const prisma = new PrismaClient();

    const collections = await prisma.user.findUnique({
        where: {
            id: id as string
        },
        select: {
            collections: {
                include: {
                    recipes: true
                }
            }
        }
    })

    return {
        props: {
            collections
        }
    }
}