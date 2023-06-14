import Image from "next/image"
import { BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import { useState, useEffect, useRef } from "react"

export default function CommentCard({ comment, image, author, inquired }: { comment: string, image: string, author: string, inquired?: string }) {
    const [showOptions, setshowOptions] = useState(false);
    const [showThreeDots, setshowThreeDots] = useState(false);
    const ref = useRef(null)

    const hideThreeDots = () => {
        if (showOptions) setshowThreeDots(true)
        else setshowThreeDots(false)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            const current = ref.current as any;
            if (showOptions && ref.current && !current.contains(e.target)) {
                setshowOptions(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside, false);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showOptions])

    return (
        <div
            className="flex justify-start items-start gap-4"
            onMouseEnter={() => setshowThreeDots(true)}
            onMouseLeave={() => hideThreeDots()}
        >
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
            {
                showThreeDots && (
                    <div className="right-0 text-slate-800 text-lg cursor-pointer relative">
                        <div className="p-2 rounded-full" onClick={() => setshowOptions(!showOptions)}>
                            <BsThreeDotsVertical />
                        </div>
                        {
                            showOptions && (
                                <div ref={ref} className="min-w-[90px] absolute flex flex-col justify-start items-start gap-2 py-1 bg-white drop-shadow-xl text-sm rounded-lg">
                                    <span className="w-full flex justify-start items-center gap-2 hover:bg-gray-100 px-6 py-2">
                                        <BsTrash className="text-lg text-slate-800" />
                                        <span className="text-base">Delete</span>
                                    </span>
                                </div>
                            )
                        }
                    </div>

                )
            }
        </div>
    )
}