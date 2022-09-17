import { Countable, MainContainer, ToDoList } from "./styledMain"

import clipBoardImage from '../../assets/Clipboard.png'
import { Card } from "../card/Card"
import { useState } from "react"
import { InputText } from "../InputText/InputText"

export const Main = () => {

    const [list, setList] = useState<string[]>([])

    const [countPostFinish, setCountPostFinish] = useState<number>(0)
	
	const createCard = (content:string) => {
		setList([...list, content])
	}

    const removeCard = (indice:number) => {
        const newList = list.filter((element, index) => index !== indice)
        setList(newList)
    }

    return (
        <>
            <InputText action={createCard}/>

            <MainContainer>
                <Countable>
                    <h2>Tarefas Criadas <span>{list.length}</span></h2>
                    <h3>Concluídas 
                        {list.length === 0 ? 
                            <span>0</span> : 
                            <span>{countPostFinish} de {list.length}</span>
                        }
                    </h3> 
                </Countable>

                <ToDoList>
                    {list.length === 0 ? 
                        <>
                            <img src={clipBoardImage} alt="Icone de ClipBoard" />
                            <h2>Você ainda não tem tarefas cadastradas <br/>
                            <span>Crie tarefas e organize seus itens a fazer</span></h2>
                        </>
                    :
                    list.map((item:string, index:number) => {
                        return <Card 
                        key={index}
                        indice={index}
                        content={item} 
                        removeCard={removeCard} 
                        setCountPostFinish={setCountPostFinish}
                        />
                    })
                }
                </ToDoList>
            </MainContainer>
        </>
    )
}