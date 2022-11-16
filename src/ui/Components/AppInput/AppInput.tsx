import React, {ChangeEvent} from 'react';
import './AppInput.scss'

interface IAppInputProps{
    value: string
    onChange: (value: string)=> void
    border?: boolean
}

export const AppInput = ({value, onChange, border}:IAppInputProps) => {

    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        const result = e.currentTarget.value
        onChange(result)
    }

    return (
        <div className={'input-wrap'}>
            <input className={`input-base ${border ? 'input-border' : ''}`} value={value} onChange={onChangeHandler}/>
        </div>
    )
}