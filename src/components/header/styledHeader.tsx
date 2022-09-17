import styled from "styled-components";

export const HeaderBasic = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    background-color: ${props => props.theme.colors.gray700};
    gap: 15px;
    font-weight: bold;

    img{
        width: 20px;
    }

    h2{
        font-size: 2rem;
        color: ${props => props.theme.colors.blue};
    }

    span{
        color: ${props => props.theme.colors.purple};
    }
`