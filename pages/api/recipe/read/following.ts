import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../_base";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, skip } = JSON.parse(req.body);

    try {
        // const followingRecipe = await database.user.findMany({
        //     where: {
        //         id
        //     },
        //     include: {
        //         following: {
        //             skip: skip,
        //             take: 20,
        //             select: {
        //                 userFollow: {
        //                     select: {
        //                         user: {
        //                             select: {
        //                                 recipes: {
        //                                     include: {
        //                                         collections: {
        //                                             select: {
        //                                                 id: true,
        //                                                 name: true
        //                                             }
        //                                         },
        //                                         ratings: {
        //                                             select: {
        //                                                 id: true,
        //                                                 value: true
        //                                             }
        //                                         }
        //                                     },
        //                                     orderBy: {
        //                                         created_at: "asc"
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     },
        // }).catch(error => { throw new Error(error) })
        // const arrays: any[] = followingRecipe[0]?.following.map((foll: any) => foll.userFollow?.user.recipes) || [];
        // let result: any[] = [];
        // for(let i = 0; i < arrays?.length; i++) {
        //     result = [...result, ...arrays[i]]
        // }

        // res.status(200).send(result);

        const recipes = await prisma?.user.findUnique({
            where: { id },
            select: {
                following: {
                    select: {
                        userFollow: {
                            select: {
                                user: {
                                    select: {
                                        name: true,
                                        recipes: {
                                            orderBy: {
                                                created_at: 'desc'
                                            },
                                            take: 20,
                                            skip: skip,
                                            include: {
                                                collections: {
                                                    select: {
                                                        id: true,
                                                        name: true
                                                    }
                                                },
                                                ratings: {
                                                    select: {
                                                        id: true,
                                                        value: true
                                                    }
                                                }
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        const twoDImArray = recipes?.following.map(foll => foll.userFollow?.user.recipes.map(recipe => recipe)) as any;
        const oneDimArray = [].concat(...twoDImArray);

        res.status(200).send(oneDimArray);

    } catch (error) {
        res.status(500).send(error)
    }
}