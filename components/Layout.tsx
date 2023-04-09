import { ReactNode } from "react"
import Nav from "./Navigation/Nav"
import Footer from "./Navigation/Footer"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Nav />
            <main className="md:mt-16 flex flex-col gap-10">
                {children}
            </main>
            <Footer />
        </>
    )
}
