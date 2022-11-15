import React from 'react';
import './AppButton.scss'

interface IAppButton{
    title: string
    onClick:()=> void
    disabled?: boolean
}

export const AppButton = ({title, onClick, disabled}:IAppButton) => {
    return <button className={'btn'} onClick={onClick} disabled={disabled}>{title}</button>

}