import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import LoadingAnimation from '../assets/92025-loading.json'

export default function Observer({trigger, small}: {trigger: () => void, small?: boolean}) {
    const [isIntersecting, setIsIntersection] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersection(entry.isIntersecting);
            }
        );
        observer.observe(ref.current as any)

        return () => observer.disconnect();

    }, [isIntersecting])

    useEffect(() => {
        if(isIntersecting){
            trigger()
        }
    }, [isIntersecting])

    return (
        <div ref={ref} className="w-full flex justify-center items-center mt-6">
            <Lottie className={small ? 'w-20' : 'w-36'} animationData={LoadingAnimation} />
        </div>
    )
}
