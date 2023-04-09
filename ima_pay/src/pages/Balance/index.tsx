
import styles from './styles.module.css';
import { IoPersonCircle } from 'react-icons/io5'
import { AiFillQuestionCircle, AiOutlineEye } from 'react-icons/ai'
import ImaPayLogo from '../../assets/logo-pay-ima.png'
import { MdPix, MdArrowCircleRight } from "react-icons/md"
import { RiBarcodeFill } from "react-icons/ri"
import { TbArrowsTransferDown, TbArrowsTransferUp } from "react-icons/tb"

export function Balance() {
    return (
        <>
            <div className={styles.head}>
                <div className={styles.profile}>
                    <IoPersonCircle size={64} color='var(--red)' />
                    <p>Olá, Hugo</p>
                </div>
                <div><img src={ImaPayLogo} alt='Logo' />
                </div>
                <div className={styles.inputQuestions}>
                    <input type='text' placeholder='Qual a sua dúvida?' />
                    <AiFillQuestionCircle size={24} color='var(--red)' />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.cardTransfer}>
                        <section>
                            <MdPix size={40} color='#fff'/>
                            <p>PIX</p>
                            </section>
                            <p>Faça suas transferências, cadastre suas chaves e checke os seus
                                contatos PIX. A solução para a falta de tempo e sem taxas de transferência.
                            </p>
                        </div>         
                                <div className={styles.cardTransfer}>
                        <section>
                            <TbArrowsTransferUp size={40} color='#fff'/>
                            <p>Transferências</p>
                            </section>
                            <p>Trasfira por TED ou PIX, escolha a melhor opção para o seu momento.
                            </p>
                        </div>
                        <div className={styles.cardTransfer}>
                        <section>
                            <TbArrowsTransferDown size={40} color='#fff'/>
                            <p>Depósito</p>
                            </section>
                            <p>Alimente a sua conta Imã Pay ou receba pagamentos em forma de depósito.
                            </p>
                        </div>     
                        <div className={styles.cardTransfer}>
                        <section>
                            <RiBarcodeFill size={40} color='#fff'/>
                            <p>Pagamentos</p>
                            </section>
                            <p>Pague as suas contas sem precisar enfretar fila, diretamente do app/site com nosso leitor de códigos de barras.
                            </p>
                        </div> 
                </div>
                <div className={styles.container}>
                    <div className={styles.realBalance}>
                        <h1>R$ 554,82</h1>
                        <p>115% CDI <span>R$ 13,54 neste mês</span></p>                     
                    </div>
                    <div className={styles.balanceDetails}>
                        <p>Saldo da conta: R$ 554,82</p>
                        <p>Disponível Cheque especial: R$ 200,00</p>
                        <p>Total disponível para saque: R$ 754,82</p>
                    </div>
                    <div className={styles.lastTransfer}>
                        <h3>Últimas transações</h3>
                        <section>
                            <p>14:25<br/>
                               23/03/2023 
                            </p>
                            <h2>
                                R$ -114,98
                            </h2>
                            <h4>PIX</h4>
                            <h4>BB</h4>
                            <p>João das Neves Neto</p>
                        </section>   <section>
                            <p>08:38<br/>
                               23/03/2023 
                            </p>
                            <h2>
                                R$ 94,98
                            </h2>
                            <h4>DEP</h4>
                            <h4>NU</h4>
                            <p>Maria das Neves Neto</p>
                        </section>
                    </div>
                    <div className={styles.footerTransfer}>
                        <h3>Histórico de transação</h3>
                        <MdArrowCircleRight size={32} color='var(--theme)'/>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.sideCard}>
                        <h2>Cartão de crédito</h2>
                        <section>
                            <h3>Fatura Atual</h3>
                            <h1>R$ 2376,17</h1>
                            <p>Limite disponível <span>R$ 372,78</span></p>
                        </section>
                    </div>
                    <div className={styles.sideCard}>
                        <h2>Empréstimo</h2>
                        <section>
                            <h3>limite disponível</h3>
                            <h1>R$ 25000,00</h1>
                            <p>Consulte as condições de empréstimo</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}