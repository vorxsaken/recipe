import React from 'react'

export default function RecipeIngredient() {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-2">
            <span className="text-lg font-bold text-slate-600">
                Ingredients
            </span>
            <ul className="font-thin list-disc list-outside text-slate-600 pl-8">
                <li className="pl-1">4 boneless, skinless chicken breasts</li>
                <li className="pl-1">3 tbsp olive oil</li>
                <li className="pl-1">3 tbsp lemon juice</li>
                <li className="pl-1">2 cloves garlic, minced</li>
                <li className="pl-1">1 tbsp fresh thyme leaves, chopped</li>
                <li className="pl-1">Salt and black pepper, to taste</li>
            </ul>
        </div>
    )
}
