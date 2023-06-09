import React, { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'

interface GiveCommentUI {
    id: string,
    author: string,
    ownerId: string,
    reply?: boolean,
    hideReply?: () => void,
    appendComment?: (comment: any) => void,
    inquired?: string
}

export default function GiveComments({ id, author, ownerId, reply, inquired, hideReply, appendComment }: GiveCommentUI) {
    const [showButton, setShowButton] = useState(reply ? true : false);
    const [loading, setLoading] = useState(false);

    const sendComment = async () => {
        const comment = (document.getElementById('comment') as HTMLInputElement).value
        if (comment) {
            setLoading(true);
            await fetch(`http://localhost:3000/api/recipe/create/${reply ? 'reply' : 'comment'}`, {
                method: 'POST',
                body: JSON.stringify({
                    recipeId: id,
                    comment: comment,
                    author: author,
                    ownerId: ownerId,
                    inquired: reply ? inquired : ''
                })
            })
                .then((data) => data.json())
                .then((json) => {
                    setLoading(false);
                    if (appendComment) appendComment(json);
                    console.log(json);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error)
                });
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-end gap-4">
            <TextField
                onFocus={() => setShowButton(true)}
                textArea={true}
                width={70}
                placeholder={reply ? 'give reply for this comment' : 'what do you think about this recipe ?'}
                id="comment"
                small={reply}
            />
            {
                showButton && (
                    <div className="flex justify-center items-center gap-4 ">
                        <Button small text={true} onClick={() => hideReply && reply ? hideReply() : setShowButton(false)}>
                            Cancel
                        </Button>
                        <Button small onClick={sendComment} loading={loading}>
                            {reply ? 'Reply' : 'Send'}
                        </Button>
                    </div>
                )
            }
        </div>
    )
}
