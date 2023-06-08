import Image from "next/image"
import Skeletons from "../Skeletons"

export default function Comments({ comments }: { comments: any[] }) {

    if (!comments) {
        return (
            <div className="w-full p-2 flex flex-col justify-start items-start gap-6">
                <div className="flex justify-start items-start gap-4">
                    <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full flex justify-center items-center">
                        <Skeletons type="image" />
                    </div>
                    <div className=" w-[500px] flex flex-col justify-start items-start gap-4">
                        <Skeletons type="title" />
                        <Skeletons type="paragraph" count={3} />
                    </div>
                </div>
            </div>
        )
    }

    if (comments.length === 0) {
        return (
            <div className="w-full flex justify-center items-center flex-col p-2">
                <span className="font-bold text-base text-slate-800">
                    No Comment Yet
                </span>
                <span className="font-thin text-xs text-slate-600">
                    Be the first one to comment in this recipe
                </span>
            </div>
        )
    }

    return (
        <div className="w-full p-2 flex flex-col justify-start items-start gap-6">
            {
                comments.map((comment: any) => (
                    <div className="flex justify-start items-start gap-4">
                        <div className="w-10 h-10 overflow-hidden rounded-full flex justify-center items-center relative">
                            <Image src={comment.owner.image} alt='burger' fill className="pointer-events-none object-cover" />
                        </div>
                        <div className=" w-[500px] flex flex-col justify-start items-start">
                            <span className="font-bold text-md text-slate-800">
                                {comment.author}
                            </span>
                            <span className="text-sm text-gray-700">
                                {comment.text}
                            </span>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
