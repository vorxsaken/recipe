import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../_base";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId, userDotId } = JSON.parse(req.body);

    try {
        database.follower.updateMany({
            where: {
                userId: userDotId
            },
            data: {
                
            }
        })
    } catch (error) {
        
    }
}