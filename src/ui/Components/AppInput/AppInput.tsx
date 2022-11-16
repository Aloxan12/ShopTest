import React, {ChangeEvent} from 'react';
import './AppInput.scss'

interface IAppInputProps {
    value: string
    onChange: (value: string) => void
    border?: boolean
    placeholder?: string
    type?: string
}

export const AppInput = ({value, onChange, border, type, placeholder}: IAppInputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const result = e.currentTarget.value
        onChange(result)
    }

    return (
        <div className={'input-wrap'}>
            <input
                className={`input-base ${border ? 'input-border' : ''}`}
                value={value}
                onChange={onChangeHandler}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}