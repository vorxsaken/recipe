import { BsImageFill } from 'react-icons/bs'
import Image from 'next/image'
import Burger from '../../assets/images/sbdkajbskjdakjsdk.jpg';
import { useState, useRef, useEffect } from 'react';

export default function SelectImage() {
    const [image, setimage] = useState<Blob>();
    const [imageUrl, setImageUrl] = useState('')
    const ref = useRef(null)

    const chooseImage = () => {
        const inputFile = ref.current as any;
        inputFile.click()
    }

    const inputChange = (e: any) => {
        setimage(e.target.files[0])
        const url = URL.createObjectURL(e.target.files[0])
        setImageUrl(url);
    }

    useEffect(() => {
        setimage(new Blob())
    }, [])

    return (
        <>
            <input onChange={(e) => inputChange(e)} ref={ref} type="file" className='hidden' />
            {
                imageUrl ? (
                    <div onClick={chooseImage} className='w-1/3 h-[450px] overflow-hidden rounded-xl cursor-pointer relative'>
                        <Image src={imageUrl} alt='recipe image preview' fill className='object-cover' />
                    </div>
                ) : (
                    <div
                        onClick={chooseImage}
                        className="w-1/3 h-[450px] bg-zinc-200 rounded-xl flex justify-center items-center cursor-pointer overflow-hidden"
                    >
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <BsImageFill className='text-6xl text-zinc-400' />
                            <p className='text-zinc-400'>
                                Click this field to select image
                            </p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
