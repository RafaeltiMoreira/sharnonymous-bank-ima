import { useState } from "react";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.css";
import { Button } from "../../components/Button";

export function Recovery() {
    const [email, setEmail] = useState('');

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email === '') {
        alert('Digite um email válido')
        return;
    }

    alert(`Email enviado para ${email}`);
    setEmail('');
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
              <legend>Recuperar senha</legend>
              <div className={styles.inputWrapper}>
                <label>
                    Digite o endereço de e-mail de acesso na Imã Pay
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
            </div>
          </fieldset>
          <Button action={handleClick} txt="Enviar" />
        </form>
      </div>
    </>
  );
}
