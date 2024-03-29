import React, { MouseEvent} from 'react';
import './AppButton.scss'

export enum BtnColorType {
    white ='white',
    blue ='blue',
}

interface IAppButton{
    title: string
    onClick:()=> void
    disabled?: boolean
    color?:BtnColorType
}

export const AppButton = React.memo(({title, onClick, disabled, color = BtnColorType.white}:IAppButton) => {
    return <button className={`btn ${color}`} onClick={onClick} disabled={disabled}>{title}</button>
})