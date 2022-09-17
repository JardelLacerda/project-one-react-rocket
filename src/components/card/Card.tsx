import { CardBase } from "./styledCard"

import trashImage from '../../assets/trash.png'
import React from "react"

export const Card = (
    {
        indice,
        removeCard,
        content, 
        setCountPostFinish,
    }: 
    {
        indice: number,
        removeCard: Function,
        content: string, 
        setCountPostFinish: Function,
    }) => {


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedInput = event.currentTarget

        if(checkedInput.checked){
            setCountPostFinish((state:number) => state +1)
        }else{
            setCountPostFinish((state:number) => state -1)
        }
    }

    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const input = event.currentTarget?.parentElement?.firstChild as HTMLInputElement;


        if(input.checked){
            console.log("Oi")
            input.checked = false 
            setCountPostFinish((state:number) => state -1) 
        }

        removeCard(indice)

    }

    return (
        <CardBase>
            <input type="checkbox" onChange={handleCheck}/>
            <p>{content}</p>
            <button onClick={handleRemove}>
                <img src={trashImage} alt='Remover Card'/>
            </button>
        </CardBase>
    )
}