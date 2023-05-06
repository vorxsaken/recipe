import Button from "@/components/Button"
import TextField from "@/components/TextField"
import SelectImage from "@/components/CreateRecipe/SelectImage"
import AddListIngredient from "@/components/CreateRecipe/AddListIngredient"
import AddListInstructions from "@/components/CreateRecipe/AddListInstructions"
import FullScreenContent from "@/components/FullScreenContent"
import { useState, useRef } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../lib/firebase'
import { AiFillWarning } from 'react-icons/ai'
import SelectField from "@/components/SelectField"

interface imageType {
    [key: string]: Blob,
}

export default function createRecipe() {
    const [image, setimage] = useState<imageType>({});
    const [Ingredients, setIngredients] = useState<Object[]>([])
    const [loadingButton, setloadingButton] = useState(false);
    const [showAlertModal, setshowAlertModal] = useState(false);
    const [categories, setcategories] = useState<string[]>([]);
    const instructionsRef = useRef(null);
    var instructions: string[] = [];
    const options = ['Appetizers', 'Soups and stews', 'Salads', 'Pasta', 'Meat', 'Seafood', 'Vegetarian', 'Desserts', 'Breakfast', 'Beverages'];

    const addImage = (e: any) => setimage(e);
    const addInstructions = (e: any) => (instructions = e);
    const addIngredient = (e: any) => setIngredients(e);
    const addCategories = (e: any) => setcategories(e);

    const onchangeAlertModal = () => {
        setshowAlertModal(!showAlertModal);
    }

    const uploadImages = () => {
        return new Promise((resolve) => {
            const smallImageRef = ref(storage, `images/${Date.now()}-small`);
            const bigImageRef = ref(storage, `images/${Date.now()}-big`);
            uploadBytes(smallImageRef, image.smallImage).then(async () => {
                uploadBytes(bigImageRef, image.bigImage).then(async () => {
                    const smallImageUrl = await getDownloadURL(smallImageRef);
                    const bigImageUrl = await getDownloadURL(bigImageRef);
                    resolve({
                        smallImage: smallImageUrl,
                        bigImage: bigImageUrl
                    })
                })
            })
        })
    }

    const postRecipe = async () => {
        setloadingButton(true);
        const TitleTextField = document.getElementById('title') as any;
        const DescriptionTextField = document.getElementById('description') as any;
        const CalorieTextField = document.getElementById('calorie') as any;
        const instructionsRefAny = instructionsRef.current as any;
        instructionsRefAny.getInstructions();
        const CHECK_IF_SOME_FIELDS_EMPTY = !TitleTextField.value || !DescriptionTextField.value || !CalorieTextField.value || Object.keys(image).length === 0 || instructions.some(i => i === '') || Ingredients.length === 0 || categories.length === 0;

        if (CHECK_IF_SOME_FIELDS_EMPTY) {
            setshowAlertModal(true);
            setloadingButton(false);
            return;
        };

        const imageUrl = await uploadImages() as any;
        fetch('http://localhost:3000/api/recipe/create', {
            method: 'POST',
            body: JSON.stringify({
                title: TitleTextField.value,
                description: DescriptionTextField.value,
                calorie: CalorieTextField.value,
                categories: categories,
                smallImage: imageUrl?.smallImage || '',
                bigImage: imageUrl?.bigImage || '',
                instructions: instructions,
                ingredients: Ingredients
            })
        }).then(data => data.json()).then(recipe => {
            setloadingButton(false);
            console.log(recipe)
        });
    }

    return (
        <div className="min-h-[700px] flex flex-col justify-start items-center gap-4 pb-20">
            <FullScreenContent show={showAlertModal} bg onChangeState={onchangeAlertModal}>
                <div className="flex flex-col gap-8 justify-center items-center">
                    <AiFillWarning className="text-8xl text-red-600" />
                    <span className="text-xl font-bold">Fields Cannot be Empty !!</span>
                </div>
            </FullScreenContent>
            <div className="w-full flex justify-between items-center py-4 px-6">
                <Button text>
                    Cancel
                </Button>
                <Button onClick={postRecipe} loading={loadingButton}>
                    Post
                </Button>
            </div>
            <div className="w-[500px] flex justify-start items-start gap-8">
                <TextField
                    id='title'
                    placeholder="Give This Recipe A Name"
                    borderLess
                    textArea
                    className="placeholder:font-bold outline-none text-2xl resize-none font-black" />
            </div>
            <SelectImage onChange={addImage} />
            <div className="w-[500px] flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Basic Information
                </div>
                <TextField id='description' textArea placeholder="add description ..." />
                <TextField id='calorie' placeholder="add Calorie ..." textArea borderLess number />
            </div>
            <div className="w-[500px] flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Categories
                </div>
                <SelectField multiple options={options} placeholder='select categories' setSelection={addCategories} />
            </div>
            <div className="w-[500px] flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Ingredients
                </div>
                <div className="w-full">
                    <AddListIngredient setIngredient={addIngredient} />
                </div>
            </div>
            <div className="w-[500px] flex flex-col gap-6 mt-10">
                <div className="w-full text-2xl font-bold">
                    Instructions
                </div>
                <div className="w-full pl-8">
                    <AddListInstructions setInstructions={addInstructions} ref={instructionsRef} />
                </div>
            </div>
        </div>
    )
}
