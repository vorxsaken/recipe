import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { recipeId, comment, author, ownerId } = JSON.parse(req.body);
    const prisma = new PrismaClient();

    try {
        const sendComment = await prisma.comment.create({
            data: {
                recipeId: recipeId,
                text: comment,
                author: author,
                ownerId: ownerId,
                created_at: Date.now()
            }
        }).catch(error => { throw new Error(error) });

        res.status(200).send(sendComment);

    } catch (error) {
        res.status(500).send(error)
    }
}