import { useState } from 'react'
import GiveComments from './GiveComments';

export default function CommentInfo({ created, id, author, ownerId, inquired }: { created: number, id: string, author: string, ownerId: string, inquired: string }) {
    const [showReply, setshowReply] = useState(false);

    const getDate = (date: number) => {
        const convert = new Date(date)
        const month = (convert.getMonth() + 1).toString();
        return `${convert.getDate()}/${month.length < 2 ? '0' + month : month}/${convert.getFullYear()}`;
    }

    return (
        <div className="text-[0.62rem] font-thin text-gray-500 flex justify-start items-start mt-1 gap-3">
            <span>{getDate(created)}</span>
            <span className="hover:text-gray-700 cursor-pointer" onClick={() => setshowReply(true)}>Reply</span>
            {
                showReply && (
                    <GiveComments id={id} author={author} ownerId={ownerId} reply inquired={inquired} />
                )
            }
        </div>
    )
}
