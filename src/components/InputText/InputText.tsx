import { ButtonCreate, ContainerInput, InputCreate } from "./styledInputText"
import plusImage from '../../assets/plus.svg'
import React, { useState } from "react"


export const InputText = ({action}: {action:Function}) => {
    const [valueInput, setValueInput] = useState('')

    const handleEvent = (event:React.SyntheticEvent) => {
        event.preventDefault()
        if(valueInput){
            action(valueInput)
        }
    }

    return (
        <ContainerInput onSubmit={handleEvent}>
            <InputCreate 
                onChange={(event) => setValueInput(event.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <ButtonCreate> Criar <img src={plusImage} alt='Icone de adição'/></ButtonCreate>
        </ContainerInput>
    )
}