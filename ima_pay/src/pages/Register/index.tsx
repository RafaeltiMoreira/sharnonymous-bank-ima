import styles from './styles.module.css';
import { ArrowIcon } from '../../components/ArrowIcon';
import { Button } from '../../components/Button';
import Invest from '../../assets/invest.svg';
import { useEffect, useState } from 'react';
import { users } from '../../helpers/users';
import { Error } from '../../components/Error';
import { validateCpf, validateEmail, validatePassword } from '../../utils/regex';

export function Register() {
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [registerError, setRegisterError] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const isFormValid = cpf !== "" && name !== "" && celular !== "" && email !== "" && password !== "";
    //const isEmailValid = validateEmail.test(email);
    //const isPasswordValid = validatePassword.test(password);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!isFormValid) {
            setIsInputEmpty(true);
        } else {
            setIsInputEmpty(false);
            setIsFormSubmitted(true);
            alert('FORMULARIO ENVIADO')
        }
    }

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.leftSide}>
                        <div className={styles.imgArea}>
                            <ArrowIcon />
                            <legend>Abra agora sua Conta Digital</legend>
                        </div>
                        <img src={Invest} alt="Invest" />
                    </div>
                    <div className={styles.rightSide}>
                        {registerError && <Error msg={`${errorMessage}`}/> }
                        <div className={styles.inputWrapper}>
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                name="cpf"
                                id="cpf"
                                onChange={e => setCpf(validateCpf(e.target.value))} 
                                value={cpf}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="name">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="cel">Celular</label>
                            <input
                                type="tel"
                                name="cel"
                                id="cel"
                                onChange={e => setCelular(e.target.value)}
                                value={celular}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                style={{ borderBottom: isFormSubmitted && isInputEmpty ? "red" : "" }}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                style={{ borderBottom: isFormSubmitted && isInputEmpty ? "red" : "" }}
                            />
                        </div>
                        <Button size="400" action={handleSubmit} txt="Enviar" />
                    </div>
                </form>
            </div>
        </>
    );
}