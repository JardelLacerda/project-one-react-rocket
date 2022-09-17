import styled from "styled-components";
import checkedImage from '../../assets/checked.png'

export const CardBase = styled.div`
    width: 100%;
    border: solid 1px ${props => props.theme.colors.gray500};
    background-color: ${props => props.theme.colors.gray400};
    color: ${props => props.theme.colors.gray100};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-size: 1.3rem;

    input{
        all: unset;
        width: 30px;
        height: 30px;
        border: solid 2px ${props => props.theme.colors.blue};
        border-radius: 100%;
        background-color: ${props => props.theme.colors.gray400};

        :checked{
            background-color: ${props => props.theme.colors.purple};
            border:solid 2px ${props => props.theme.colors.purple};
            background-image: url(${checkedImage});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 1rem;
        }

        :checked ~ p{
            color: ${props => props.theme.colors.gray300};
            text-decoration: line-through;
        }
    }

    img{
        width: 30px;
    }

`