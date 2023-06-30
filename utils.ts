import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from './lib/firebase'

const fetcher = async (url: string, body?: any) => {
    const fetching = await fetch(url, body && body);
    const result = await fetching.json();
    return result;
}

const uploadImages = (smallImage: any, bigImage: any) => {
    return new Promise((resolve) => {
        const smallImageRef = ref(storage, `images/${Date.now()}-small`);
        const bigImageRef = ref(storage, `images/${Date.now()}-big`);
        uploadBytes(smallImageRef, smallImage).then(async () => {
            uploadBytes(bigImageRef, bigImage).then(async () => {
                const smallImageUrl = await getDownloadURL(smallImageRef);
                const bigImageUrl = await getDownloadURL(bigImageRef);
                resolve({
                    smallImage: smallImageUrl,
                    bigImage: bigImageUrl
                })
            })
        })
    })
}

export interface imageType {
    [key: string]: Blob,
}

export { fetcher, uploadImages }