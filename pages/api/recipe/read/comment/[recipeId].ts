import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { recipeId } = req.query;
    const prisma = new PrismaClient();

    try {
        const getComments = await prisma.comment.findMany({
            where: {
                recipeId: recipeId as string 
            },
            include: {
                reply: true,
                owner: true
            }
        }).catch(error => {throw new Error(error)})

        res.status(200).send(getComments)

    } catch (error) {
        res.status(500).send(error);
    }
}