import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { skip } = JSON.parse(req.body);
    const prisma = new PrismaClient();

    if (skip != undefined) {
        try {
            const getRecipe = await prisma.recipe.findMany({
                skip: skip,
                take: 3,
                orderBy: {
                    created_at: 'desc'
                }

            }).catch(err => { throw new Error(err) });

            return res.status(200).send(getRecipe);

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }

    res.status(417).send('expected paramater not fullfilled');
}