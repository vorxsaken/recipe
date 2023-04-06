import { AiOutlineHome, AiOutlineAlert, AiOutlineContacts } from 'react-icons/ai'
import { BiFoodMenu } from 'react-icons/bi'

export default function BottomMenu() {
    return (
        <div className="w-full px-6 py-4 flex justify-between items-center border-t-2 border-slate-100 md:hidden">
            <div className="flex flex-col items-center justify-center">
                <AiOutlineHome className="text-2xl" />
                <span className="text-sm">Home</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <AiOutlineAlert className="text-2xl" />
                <span className="text-sm">About</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <BiFoodMenu className="text-2xl" />
                <span className="text-sm">Recipes</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <AiOutlineContacts className="text-2xl" />
                <span className="text-sm">Contact</span>
            </div>
        </div>
    )
}
