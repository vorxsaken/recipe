import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query as any;
    const prisma = new PrismaClient();

    try {
        const getRecipe = await prisma.recipe.findUnique({
            where: {
                id: slug
            },
            include: {
                ingredients: true,
                ratings: true
            }
        }).catch((error) => {
            throw new Error(error)
        })

        return res.send(getRecipe)
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}