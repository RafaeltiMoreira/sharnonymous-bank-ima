import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import "./App.css"
import Logo from "./assets/img/Logo.png"
import { MdSearch } from "react-icons/md"
import { MdPix } from "react-icons/md"
import { MdOutlinePayments } from "react-icons/md"
import { BiTransferAlt } from "react-icons/bi";
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className='logo'>
        <img id='logo' src={Logo}/>
      </div>
      <form  action="submit">
        <div className="form"> 
        <div className="div-pesquisa">
          <input className="input-pesquisa"  type="text" placeholder="Faça sua pesquisa"/>
          <MdSearch size={32} color="#ce1051"/>
        </div>          
        </div>
      </form>
      <div className="historicos">
      <div className="historico1">
          <p>23/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pix <br/>
            João das Neves
          </p>
          <p>R$ 114,00</p>
          <p className="pix"><MdPix/></p>
        </div>

        <div className="historico2">
          <p>23/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Depósito <br/>
            Maria das Neves
          </p>
          <p>R$ 235,00</p>
          <p className="transferencia"> <BiTransferAlt/> </p>    
        </div>

        <div className="historico3">
          <p>03/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagamento <br/>
            Lojas Americanas
          </p>
          <p>R$ 231,63</p>
          <p className="pagamento"> <MdOutlinePayments/> </p>        
        </div> 

        <div className="historico4">
          <p>03/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Transferência <br/>
            Antônio das Neves
          </p>
          <p>R$ 600,00</p>
          <p className="transferencia"> <BiTransferAlt/> </p>
        </div>       
      </div>
    </ThemeProvider>
  )
}
