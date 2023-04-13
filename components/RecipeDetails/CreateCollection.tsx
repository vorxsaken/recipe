import FullScreenContent from "../FullScreenContent"
import TextField from "../TextField"
import Button from "../Button"
import {BsX} from 'react-icons/bs'

export default function CreateCollection({show, changeShowEvent}: {show: boolean, changeShowEvent: () => void}) {
    return (
        <FullScreenContent show={show} onChangeState={changeShowEvent} bg={true}>
            <div className="w-full min-h-[220px] bg-white rounded-lg flex flex-col justify-center items-center gap-6 pt-8">
                <div className="text-3xl absolute top-4 left-4">
                    <BsX onClick={changeShowEvent} className="cursor-pointer" />
                </div>
                <TextField large placeholder="Create Collection" />
                <Button>
                    Create
                </Button>
            </div>
        </FullScreenContent>
    )
}
