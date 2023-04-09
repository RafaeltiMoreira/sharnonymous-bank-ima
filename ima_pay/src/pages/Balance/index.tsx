
import styles from './styles.module.css';
import { IoPersonCircle } from 'react-icons/io5'
import { AiFillQuestionCircle, AiOutlineEye } from 'react-icons/ai'
import ImaPayLogo from '../../assets/logo-pay-ima.png'
import { MdPix } from "react-icons/md"
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

                </div>
                <div className={styles.container}>

                </div>
            </div>
        </>
    )
}