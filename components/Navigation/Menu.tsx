import React from 'react'

export default function Menu() {
    return (
        <div className="flex justify-center items-center gap-6 font-semibold text-slate-600 text-[0.9rem]">
            <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Home</div>
            <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">About</div>
            <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Recipes</div>
            <div className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer">Contact</div>
        </div>
    )
}
