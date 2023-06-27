import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"
import Layout from "@/components/Layout"
import Image from "next/image"
import RecipeCard from "@/components/RecipeCard"
import Button from "@/components/Button"
import { BsPlus, BsCheck2 } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import RecipeDetailsModal from "@/components/RecipeDetails/RecipeDetailsModal"
import Observer from "@/components/Observer"

type User = {
    id: string,
    name: string,
    image: string
}

export default function Profile({ user, totalRecipes, foll }: { user: User, totalRecipes: string, foll: any }) {
    const userId = useSelector((state: any) => state.user.userInfo.id);
    const [userRecipe, setuserRecipe] = useState<any[]>([]);
    const [followerCount, setfollowerCount] = useState<number>(foll?._count?.follower || 0)
    const skip = useSelector((state: any) => state.user.recipeSkip);
    const [isNotFollow, setIsNotFollow] = useState(true);
    const [showLoad, setshowLoad] = useState(true)
    const CHECK_END_OF_PAGE_VARIABLE = 10;
    const CHECK_IF_FOLLOW = foll?.follower?.some((follow: any) => follow.userFollow.user.id === userId) || false
    
    const fetchRecipes = async () => {
        fetch('http://localhost:3000/api/user/read/recipe', {
            method: 'POST',
            body: JSON.stringify({
                skip: skip,
                userId: user.id
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.length < CHECK_END_OF_PAGE_VARIABLE) setshowLoad(false);
                setuserRecipe([...userRecipe, ...json]);
            })
            .catch(error => console.log(error))

    }

    const follow = () => {
        fetch(`http://localhost:3000/api/user/create/follow`, {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                userDotId: user.id
            })
        })
            .then(() => {
                setIsNotFollow(false);
                setfollowerCount(followerCount + 1);
            })
            .catch(error => console.log(error));
    }

    const recipes = userRecipe.length > 0 && (
        <div className="w-full flex flex-col justify-center items-start gap-4 pl-20">
            <div className="text-xl font-bold text-zinc-800">
                Recipes
            </div>
            <div className="w-full flex flex-wrap justify-start items-center gap-4">
                {
                    userRecipe.map((recipe: any) => (
                        <>
                            <RecipeCard
                                title={recipe.title}
                                image={recipe.smallImage}
                                calorie={recipe.calorie}
                                recipeId={recipe.id}
                                shallow
                                link={`/profile/${user.id}/?recipeDetails=${recipe.id}`}
                            />
                        </>
                    ))
                }
            </div>
        </div>
    )

    const loading = showLoad ? (
        <>
            <Observer trigger={() => fetchRecipes()} />
        </>
    ) : userRecipe.length === 0 && (
        <div className="w-full h-[200px] flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">
                No Recipes
            </span>
            <span className="text-sm font-thin text-gray-500">
                Show your recipes to other users
            </span>
        </div>
    )

    const userButton = userId === user.id ? (
        <Button small text>
            Edit Profile
        </Button>
    ) : (
        <Button small text={isNotFollow}>
            {
                !isNotFollow ? (
                    <div className="flex flex-row gap-1 select-none">
                        <BsCheck2 className="text-lg" />
                        <span className="text-sm font-thin">Followed</span>
                    </div>
                ) : (
                    <div className="flex flex-row gap-1 select-none" onClick={follow}>
                        <BsPlus className="text-lg" />
                        <span className="text-sm font-thin">Follow</span>
                    </div>
                )
            }
        </Button>
    )

    useEffect(() => {
        setuserRecipe([]);
        setshowLoad(true);
        setfollowerCount(foll?._count?.follower || 0);
        if(CHECK_IF_FOLLOW) setIsNotFollow(false);
    }, [user.id])

    return (
        <Layout>
            <RecipeDetailsModal route={`/profile/${user.id}`} shallow />
            <div className="min-h-[600px] flex flex-col justify-start items-center gap-10 pb-10">
                <div className="w-[600px] flex justify-start items-start gap-10 mt-10">
                    <div className="w-36 h-36 rounded-full overflow-hidden bg-slate-300 relative">
                        <Image src={user.image} alt='avatar profile' fill className="object-cover" />
                    </div>
                    <div className="max-w-[400px] flex flex-col gap-3">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-zinc-800">
                                {user.name}
                            </span>
                            <div className="flex justify-start items-start gap-4 text-sm text-gray-500">
                                <span>
                                    <span className="font-bold text-gray-600">{totalRecipes}</span>&nbsp;
                                    Recipes
                                </span>
                                <span>
                                    <span className="font-bold text-gray-600">{followerCount}</span>&nbsp;
                                    Follower
                                </span>
                                <span>
                                    <span className="font-bold text-gray-600">{foll?._count?.following || 0}</span>&nbsp;
                                    Following
                                </span>
                            </div>
                        </div>
                        <div className="text-xs font-medium text-zinc-500">
                            Don't forget to run the necessary Prisma commands (e.g., prisma generate, prisma migrate) to apply the changes to
                            your Prisma client and database
                        </div>
                        {userButton}
                    </div>
                </div>
                {recipes}
                {loading}
            </div >
        </Layout >
    )
}

export const getServerSideProps = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
        where: {
            id: id as string
        },
        select: {
            id: true,
            name: true,
            image: true
        }
    })

    const totalRecipes = await prisma.recipe.count({
        where: {
            ownerId: id as string
        }
    })

    const foll = await prisma.user.findUnique({
        where: {
            id: id as string
        },
        select: {
            _count: {
                select: {
                    follower: true,
                    following: true
                }
            },
            follower: {
                select: {
                    userFollow: {
                        select: {
                            user: true
                        }
                    }
                }
            },
            following: {
                select: {
                    userFollow: {
                        select: {
                            user: true
                        }
                    }
                }
            },

        }
    })

    return {
        props: {
            user,
            totalRecipes,
            foll
        }
    }
}


