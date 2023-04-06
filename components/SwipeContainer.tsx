import { ReactNode, useState } from 'react'

export default function SwipeContainer({ children }: { children: ReactNode }) {
    const [xDown, setXDown] = useState(0);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (event: any) => {
        setIsMouseDown(true);
        setXDown(event.clientX);
        event.currentTarget.style.cursor = "grabbing";
    };

    const handleMouseMove = (event: any) => {
        if (!isMouseDown) {
            return;
        }

        const xUp = event.clientX;

        const xDiff = xDown - xUp;

        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        event.currentTarget.scrollLeft += xDiff;

        setXDown(xUp);
    };

    const handleMouseUp = (event: any) => {
        setIsMouseDown(false);
        event.currentTarget.style.cursor = "grab";
    };

    return (
        <div
            className='w-full overflow-x-auto scrollbar-hide flex gap-4 flex-nowrap select-none cursor-grab'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    )
}
