import React, {ChangeEvent} from 'react';

interface IAppInputProps{
    value: string
    onChange: (value: string)=> void
}

export const AppInput = ({value, onChange}:IAppInputProps) => {

    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        const result = e.currentTarget.value
        onChange(result)
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
        </div>
    )
}