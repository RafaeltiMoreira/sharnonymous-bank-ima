import styles from "./styles.module.css";
import InvestImg from "../../assets/invest.svg";
import LogoImaPay from "../../assets/logo-pay-ima.png";
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export function ModalHome({ isOpen, closeModal }: Props) {
  if (isOpen) {
    return (
      <div className={styles.modalInit}>
        <div className={styles.modal}>
          <div className={`${styles.group} ${styles.action}`}>
            <button onClick={closeModal} className={styles.btn}>Fechar</button>
          </div>
          <div id="form">
            <img
              className={styles.imgModal}
              src={InvestImg}
              alt="Imagem de pessoa regando planta, mas os frutos são moedas."
            />
            <div className={styles.group}>
              <ul className={styles.groupBtn}>
                <img
                  className={styles.imgBtn}
                  src={LogoImaPay}
                  alt="Imagem da logomarca da empresa Imã Pay."
                />
                <li className={styles.navItemOpen}>
                  <Link to='/register'>Abrir conta</Link>
                </li>
                <li className={styles.navItemEnter}>
                  <Link to='/login'>Já sou cliente</Link>
                </li>
              </ul>
            </div>
          </div>
          <h3 className={styles.textH3}>Crie uma conta em minutos.</h3>
          <p className={styles.textModal}>
            Com a Imã Pay, você pode criar sua conta em minutos. Não é
            necessário visitar uma agência ou esperar dias.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
