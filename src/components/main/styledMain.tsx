import styled from "styled-components";


export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 95%;
    max-width: 1300px;
    margin: 50px auto;
`

export const Countable = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        color: ${props => props.theme.colors.blue};
    }

    h3{
        color: ${props => props.theme.colors.purple}
    }

    h2, h3{
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }

    span{
        border: solid 1px none;
        color: ${props => props.theme.colors.gray100};
        background-color: ${props => props.theme.colors.gray400};
        padding: 5px;
        border-radius: 100%;
    }
    
`


export const ToDoList = styled.section`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: none;
    gap: 30px;
    border-top: solid 1px ${props => props.theme.colors.gray300};
    border-radius: 10px;
    padding: 20px 10px;

    img{
        width: 80px;
    }

    h2{
        color: ${props => props.theme.colors.gray300};
        font-weight: bold;
        text-align: center;
        span{
            font-weight: 400;
        }
    }

    @media (min-width: 700px) {
        h2{
            font-size: 2rem;
        }

        img{
            width: 100px;
        }
    }
`