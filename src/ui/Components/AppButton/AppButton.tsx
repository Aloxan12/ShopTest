import React from 'react';

interface IAppButton{
    title: string
    onClick:()=> void
    disabled?: boolean
}

export const AppButton = ({title, onClick, disabled}:IAppButton) => {
    return <button onClick={onClick} disabled={disabled}>{title}</button>

}