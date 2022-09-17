import rocketImage from "../../assets/rocket.png"
import { HeaderBasic } from "./styledHeader"

export const Header = () => {
    return (
        <HeaderBasic>
             <img src={rocketImage} alt="RocketImage" />
            <h2>TO<span>DO</span></h2>
        </HeaderBasic>
    )
}