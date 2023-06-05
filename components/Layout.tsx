import { ReactNode } from "react"
import Nav from "./Navigation/Nav"
import Footer from "./Navigation/Footer"
import { useSession } from "next-auth/react"
import store from "@/store"
import { getUserInfo } from "@/store/Reducers/userReducer"
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import React from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    const { data: session } = useSession();
    const isUserInfoFetched = useSelector((state: any) => state.user.isUserInfoFetched)

    if (!isUserInfoFetched) {
        store.dispatch(getUserInfo(session?.user?.email as string));
    }

    return (
        <div className="">
            <Nav />
            <main className="md:mt-16 flex flex-col gap-10">
                {children}
            </main>
            <Footer />
        </div>
    )
}
