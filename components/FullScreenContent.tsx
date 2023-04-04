import { ReactNode, useEffect, useRef } from "react";
import { useFullscreenContentContext } from "@/Reducer/FullScreenContentReducer";

export default function FullScreenContent({ children, show = false }: { children: ReactNode, show?: boolean }) {
    const [state, dispatch] = useFullscreenContentContext();
    const ref = useRef(null);

    const hideModal = (event: MouseEvent) => {
        if (event.target == ref.current) {
            dispatch({ type: 'HIDE_MODAL' })
        }
    }

    return (
        <>
            {show && (
                <div ref={ref} id='overlay' className="w-screen h-full fixed bg-slate-800 bg-opacity-10 top-0 
                left-0 flex justify-center items-start px-4 z-20" onClick={(e: any) => hideModal(e)}
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
