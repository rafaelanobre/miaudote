import { styled } from "styled-components"
import logo from "../images/miaudote-menu.svg"                      
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="Miaudote logo"></img>

            <Link to='/pets'>
                <BotaoAdotar>
                    Quero Adotar
                </BotaoAdotar>
            </Link>

            <div>
                <Link to='/signin'>
                    <BotaoApagado>
                        Entrar
                    </BotaoApagado>
                </Link>

                <Link to='/signup'>
                    <BotaoCadastro>
                        Cadastre-se
                    </BotaoCadastro>
                </Link>
            </div>
        </HeaderContainer>
    )
}
const BotaoApagado = styled.button`
    font-size: 1.25em;
    min-width: max-content;
    background-color: #DADADA;
    color: #6A459C;
    border: none;
`
const BotaoAdotar = styled.button`
    font-size: 1.25em;
    min-width: max-content;
    background-color: #DADADA;
    color: #6A459C;
    border: none;
`
const BotaoCadastro = styled.button`
    font-size: 1.25em;
    min-width: max-content;
    background-color: #6A459C;
    color: #fff;
    border: none;
`
const HeaderContainer = styled.div`
    background-color: #DADADA;
    margin: -1.5em;
    margin-bottom: 0.5em;
    padding: 1em 3em;
    box-shadow: 0em 0.25em 0.75em 0.25em rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-width: 20vw;
    }
    div{
        display: flex;
        gap:1em
    }

    @media screen and (max-width: 767px) {
        padding: 1em;
        img{
            max-width: 45vw;
            padding-left: 1em;
            margin: -0em 0.125em;
        }
        div{
            display: flex;
            gap:0em
        }
        ${BotaoCadastro} {
            display: none;
        }
        ${BotaoAdotar} {
            display: none;
        }
        ${BotaoApagado} {
            font-size: 1em;
        }
    }
`
