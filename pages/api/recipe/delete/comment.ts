import { getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { commentId, email } = JSON.parse(req.body);
    const session = await getServerSession(req, res, authOptions);
    const prisma = new PrismaClient();

    try {
        if(email === session?.user?.email) {
            const deleteComment = await prisma.comment.delete({
                where: {
                    id: commentId as string
                }
            }).catch(error => {throw new Error(error)})
    
            res.status(200).send(deleteComment)
        }

        res.status(401).send('different user')

    } catch (error) {
        res.status(500).send(error);
    }
}