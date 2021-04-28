import {Button, IconButton, TextField} from "@material-ui/core";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {AddBox, Create, Delete} from "@material-ui/icons";

export type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyBoardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) addItem()
    }
    return (
        <div>
            <TextField
                variant={'outlined'}
                value={title}
                error={!!error}
                onChange={onChangeHandler}
                onKeyPress={onKeyBoardEvent}
                label={'Title'}
                helperText={error}
            />
            <IconButton color={'primary'} onClick={addItem}>
                <Create />
            </IconButton>
        </div>
    )
}