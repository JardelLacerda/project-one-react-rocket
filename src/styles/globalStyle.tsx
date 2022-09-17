import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        background-color: ${props => props.theme.colors.gray600};
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }
`