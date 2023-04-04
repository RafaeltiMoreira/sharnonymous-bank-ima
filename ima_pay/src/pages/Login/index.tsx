import { useState } from "react";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { users } from "../../helpers/users";
import { useNavigate } from 'react-router-dom'; 

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        for(let i in users) {
            let user = users[i];
            if(user.email !== email && user.password !== password) {
              alert('USUARIO ERRADO')
                return false;
            }
        }

        navigate('/user');
        return true;
    }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.form}>
        <div>
            <ArrowIcon />
        </div>
        <fieldset>
            <div className={styles.fieldsetWrapper}>
              <legend>Acessar conta</legend>
              <div className={styles.inputWrapper}>
                <label>
                  E-mail cadastrado
                  <span>(digite um e-mail que mais utilize)</span>
                </label>
                <input
                  type="email"
                  name="form-email"
                  id="form-email"
                  placeholder="Digite seu e-mail"
                  onChange={handleInputEmail}
                  value={email}
                />
              </div>

              <div className={styles.inputPass}>
                <label>
                  Senha <span>(mínimo de 6 caracteres)</span>
                </label>

                <input
                  type="password"
                  name="form-password"
                  id="form-password"
                  placeholder="Digite sua senha"
                  onChange={handleInputPassword}
                  value={password}
                />
              </div>
              <Link className={styles.forgot} to="/recovery">Esqueci minha senha</Link>
            </div>
          </fieldset>
          <Button action={handleSubmit} txt="Entrar"/>
        </form>
      </div>
    </>
  );
}
