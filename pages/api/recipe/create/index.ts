import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { authOptions } from '../../auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, smallImage, categories, bigImage, description, calorie, instructions, ingredients } = JSON.parse(req.body);
    const session = await getServerSession(req, res, authOptions);
    const prisma = new PrismaClient();

    if(session) {
        try {
            if(!title || !smallImage || !categories || !bigImage || !description || !calorie || instructions.length == 0 || ingredients.length == 0) {
                return res.status(417).send('some field empty'); 
            }

            const userId = await prisma.user.findUnique({
                where: {
                    email: session.user?.email as any
                }
            })
            
            
            const createRecipe = await prisma.recipe.create({
                data: {
                    title: title,
                    smallImage: smallImage,
                    bigImage: bigImage,
                    description: description,
                    calorie: calorie,
                    categories: categories,
                    instructions: instructions,
                    ownerId: userId?.id,
                    created_at: Date.now(),
                    ingredients: {
                        create: ingredients
                    }
                },
                include: {
                    ingredients: true
                }
            }).catch((err: any) => {
                throw new Error(err);
            })
    
            return res.status(200).send(createRecipe);
    
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    }

    res.status(401)
}