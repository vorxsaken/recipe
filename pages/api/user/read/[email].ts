import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.query;
    const prisma = new PrismaClient();

    try {
        const getuser = await prisma.user.findUnique({
            where: {
                email: email as string
            }
        })

        res.status(200).send(getuser);

    } catch (error) {
        res.status(500).send(error);
    }
}