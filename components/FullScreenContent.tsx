import { ReactNode, useRef } from "react";

interface fullscreenUI { children: ReactNode, show?: boolean, bg?: boolean, onChangeState: () => void }

export default function FullScreenContent({ children, show = false, bg, onChangeState }: fullscreenUI) {
    const ref = useRef(null);

    const hideModal = (event: MouseEvent) => {
        if (event.target == ref.current) {
            onChangeState()
        }
    }

    return (
        <>
            {show && (
                <div ref={ref} id='overlay' className={`w-screen h-full fixed bg-slate-800 top-0 
                    left-0 flex justify-center items-start px-4 z-20 ${bg ? 'bg-opacity-20' : 'bg-opacity-0'}`}
                    onClick={(e: any) => hideModal(e)}
                >
                    <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg relative top-24 flex flex-col 
                    justify-between items-center gap-4 pt-8 pb-8">
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
