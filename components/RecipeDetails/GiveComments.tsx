import React from 'react'
import TextField from '../TextField'
import Button from '../Button'
import StarRating from '../StarRating'

export default function GiveComments() {
    return (
        <div className="w-full flex flex-col justify-center items-end gap-4">
            <TextField textArea={true} width={45} placeholder='what do you think about this recipe ?' />
            <div className="flex justify-center items-center gap-4 ">
                <Button text={true}>
                    Cancel
                </Button>
                <Button>
                    Send
                </Button>
            </div>
        </div>
    )
}
