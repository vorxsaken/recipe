import Image from "next/image"

export default function CommentCard({ comment, image, author, inquired }: { comment: string, image: string, author: string, inquired?: string }) {
    return (
        <div className="flex justify-start items-start gap-4">
            <div className="w-10 h-10 overflow-hidden rounded-full flex justify-center items-center relative">
                <Image src={image} alt='avatar' fill className="pointer-events-none object-cover" />
            </div>
            <div className=" w-[500px] flex flex-col justify-start items-start">
                <span className="font-bold text-md text-slate-800">
                    {author}
                </span>
                <span className="text-sm text-gray-700">
                    {inquired && (<span className="text-pink-600 text-sm">@{inquired}</span>)} {comment}
                </span>
            </div>
        </div>
    )
}