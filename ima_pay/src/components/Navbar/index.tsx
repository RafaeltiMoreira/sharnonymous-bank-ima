import styles from './styles.module.css';
import ImaPayLogo from '../../assets/logo-pay-ima.png';

export function Navbar() {
    return (
        <div className={styles.logo}>
            <img src={ImaPayLogo} alt="Logo" />
        </div>
    );
}