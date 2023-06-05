import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { ratingId, value } = JSON.parse(req.body);
    const prisma = new PrismaClient();

    try {
        const updateRating = await prisma.rating.update({
            where: {
                id: ratingId
            },
            data: {
                value: value
            }
        })

        res.status(200).send(updateRating)
    } catch (error) {
        res.status(500).send(error)
    }

}