import { HeaderLoginContainer, HeaderLoginContent } from "./styles";
import { Power } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoImaPay from "../../assets/pay-ima.svg";

export function HeaderLogin() {
    return (
        <HeaderLoginContainer>
            <HeaderLoginContent>
                <img src={logoImaPay} alt="Logo com texto Imã Pay" />

                <NavLink to="/">
                    <button type="submit">
                        <Power
                            className="btn-power"
                            size={28}
                            weight="bold"
                            alt="Botão de sair" />
                        Sair
                    </button>
                </NavLink>

            </HeaderLoginContent>
        </HeaderLoginContainer>
    )
}