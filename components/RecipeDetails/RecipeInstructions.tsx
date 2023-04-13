import React from 'react'

export default function RecipeInstructions() {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-2">
            <span className="text-lg font-bold text-slate-600">
                Instructions
            </span>
            <ul className="font-thin list-decimal list-outside text-slate-600 pl-8">
                <li className="pl-1">Preheat grill to medium-high heat.</li>
                <li className="pl-1">In a small bowl, whisk together olive oil, lemon juice, honey, garlic, thyme, salt, and black pepper.</li>
                <li className="pl-1">Place chicken breasts in a large, shallow dish and pour marinade over the top, making sure each breast is well coated.</li>
                <li className="pl-1">Marinate in the refrigerator for at least 30 minutes.</li>
                <li className="pl-1">Remove chicken from marinade and discard any excess.</li>
                <li className="pl-1">Grill chicken for 6-8 minutes per side, or until fully cooked through.</li>
                <li className="pl-1">Serve with your favorite sides and enjoy!</li>
            </ul>
        </div>
    )
}
