import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../_base";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId, follower } = JSON.parse(req.body);
    
    try {
        const getFollow = await database.follower.create({
            data: {
                follower: follower,
                userId: userId
            }
        }).catch(error => {throw new Error(error)})

        res.status(200).send(getFollow)

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}