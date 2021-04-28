import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField} from "@material-ui/core";

export type EditableSpanType = {
    title: string
    changeTitle:(title: string)=> void
}

export const EditableSpan = (props: EditableSpanType)=>{
    const[editMode, setEditMode] = useState<boolean>(false)
    const[title, setTitle] = useState<string>(props.title)

    const changeTitle=(e:ChangeEvent<HTMLInputElement>)=>{
        return setTitle(e.currentTarget.value)
    }
    const onEditMode = ()=>{
        setEditMode(true)
        setTitle(props.title)
    }
    const offEditMode = ()=>{
        setEditMode(false)
        props.changeTitle(title)
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>)=> {
        if (e.charCode === 13) {
            setEditMode(false)
            props.changeTitle(title);
        }
    }

    return editMode
    ? <TextField
            value={title}
            onChange={changeTitle}
            onBlur={offEditMode}
            autoFocus
            onKeyPress={onEnter}
        />
    : <span onDoubleClick={onEditMode}>{props.title}</span>
}