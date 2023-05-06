import { BsImageFill } from 'react-icons/bs'
import Image from 'next/image'
import Burger from '../../assets/images/sbdkajbskjdakjsdk.jpg';
import { useState, useRef, useEffect } from 'react';
import Compressor from 'compressorjs';

export default function SelectImage({ onChange }: { onChange: (e: any) => void }) {
    const [image, setimage] = useState<Blob>()
    const [imageUrl, setImageUrl] = useState('')
    const ref = useRef(null)

    const compressImage = (uncompressImage: any) => {
        return new Promise((resolve) => {
            let compressedImage = {};
            // small image for thumbnail and etc
            new Compressor(uncompressImage, {
                quality: 0.8,
                width: 200,
                success(res) {
                    compressedImage = {
                        smallImage: res
                    }
                }
            })

            // big image for image details and etc
            new Compressor(uncompressImage, {
                quality: 0.6,
                width: 800,
                success(res) {
                    compressedImage = {
                        ...compressedImage,
                        bigImage: res
                    }

                    resolve(compressedImage)
                }
            })
        })
    }

    const chooseImage = () => {
        const inputFile = ref.current as any;
        inputFile.click()
    }

    const inputChange = async (e: any) => {
        setimage(e.target.files[0])
        const url = URL.createObjectURL(e.target.files[0])
        setImageUrl(url);
        const compressedImage = await compressImage(e.target.files[0]);
        onChange(compressedImage)
    }

    useEffect(() => {
        setimage(new Blob())
    }, [])

    return (
        <>
            <input onChange={(e) => inputChange(e)} ref={ref} type="file" className='hidden' />
            {
                imageUrl ? (
                    <div onClick={chooseImage} className='w-[500px] h-[450px] overflow-hidden rounded-xl cursor-pointer relative'>
                        <Image src={imageUrl} alt='recipe image preview' fill className='object-cover' />
                    </div>
                ) : (
                    <div
                        onClick={chooseImage}
                        className="w-[500px] h-[450px] bg-zinc-200 rounded-xl flex justify-center items-center cursor-pointer overflow-hidden"
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
