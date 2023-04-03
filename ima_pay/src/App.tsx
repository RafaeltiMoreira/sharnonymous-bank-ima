import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import "./styles/App.css"
import Logo from "./assets/img/Logo.png"
import Deposito from "./assets/img/deposito.png"
import Transferencia from "./assets/img/transferencia.png"
import Boleto from "./assets/img/boleto.png"
import Search from "./assets/img/search.png"
import Pix from "./assets/img/pix.png"
import { MdSearch } from "react-icons/md"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className='logo'>
        <img id='logo' src={Logo}/>
      </div>
      <form  action="submit">
        <div className="form"> 
        <div className="form-pesquisa">
          <input className="input-pesquisa" type="text" placeholder="Faça sua pesquisa"/>
          <img src={Search}/>                    
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
          <img src={Pix}/>
        </div>

        <div className="historico2">
          <p>23/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Depósito <br/>
            Maria das Neves
          </p>
          <p>R$ 235,00</p>    
          <img src={Deposito}/>     
        </div>

        <div className="historico3">
          <p>03/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagamento <br/>
            Lojas Americanas
          </p>
          <p>R$ 231,63</p>         
          <img src={Boleto}/>   
        </div> 

        <div className="historico4">
          <p>03/03/2023</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Transferência <br/>
            Antônio das Neves
          </p>
          <p>R$ 231,63</p>
          <img src={Transferencia}/>
        </div>       
      </div>
    </ThemeProvider>
  )
}
