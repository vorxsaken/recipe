import Button from "@/components/Button"
import TextField from "@/components/TextField"
import SelectImage from "@/components/CreateRecipe/SelectImage"
import AddList from "@/components/CreateRecipe/AddList"

export default function createRecipe() {
    return (
        <div className="min-h-[700px] flex flex-col justify-start items-center gap-4 pb-20">
            <div className="w-full flex justify-between items-center py-4 px-6">
                <Button text>
                    Cancel
                </Button>
                <Button>
                    Post
                </Button>
            </div>
            <div className="w-1/3 flex justify-start items-start gap-8">
                <TextField
                    placeholder="Give This Recipe A Name"
                    borderLess
                    textArea
                    className="placeholder:font-bold outline-none text-2xl resize-none font-black" />
            </div>
            <SelectImage />
            <div className="w-1/3 flex flex-col gap-6 mt-10">
                <TextField textArea placeholder="add description ..." />
                <TextField placeholder="add Calorie ..." textArea borderLess number />
            </div>
            <div className="w-1/3 flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Ingredients
                </div>
                <div className="w-full pl-8">
                    <AddList placeholder="ingredient" />
                </div>
            </div>
            <div className="w-1/3 flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Instructions
                </div>
                <div className="w-full pl-8">
                    <AddList placeholder="instructions" number />
                </div>
            </div>
        </div>
    )
}
