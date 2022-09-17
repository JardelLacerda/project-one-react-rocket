import styled from "styled-components";

export const ContainerInput = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 95%;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: -30px;
`

export const InputCreate = styled.input`
    background-color: ${props => props.theme.colors.gray500};
    border: solid 1px ${props => props.theme.colors.gray700};
    border-radius: 10px;
    color: ${props => props.theme.colors.gray300};

    ::placeholder{
        color: ${props => props.theme.colors.gray300}
    }
    width: 90%;
    max-width: 500px;
    padding: 15px;

    font-size: 1.2rem;
`

export const ButtonCreate = styled.button`
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.gray100};
    border: solid 1px ${props => props.theme.colors.blueDark};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 13px;
    gap: 15px;

    font-size: 1.2rem;
`