import { useState } from "react";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { users } from "../../helpers/users";
import { useNavigate } from "react-router-dom";
import { Error } from "../../components/Error";
import { validateEmail } from "../../utils/regex";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let i in users) {
      let user = users[i];

      if (email === "" || password === "" || !validateEmail.test(email)) {
        setLoginError(true);
        setErrorMessage("Digite o email e senha corretamente");
        setTimeout(() => {
          setLoginError(false);
          setEmail("");
        }, 1000);
        return true;
      }

      if (user.email !== email || user.password !== password) {
        setLoginError(true);
        setErrorMessage("Email ou senha incorretas");
        setTimeout(() => {
          setLoginError(false);
          setEmail("");
          setPassword("");
        }, 1000);
        return;
      }

      navigate("/user");
      return true;
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form>
          <div>
            <ArrowIcon />
          </div>
          <fieldset>
            <div className={styles.fieldsetWrapper}>
              <legend>Acessar conta</legend>
              {loginError && <Error msg={`${errorMessage}`} />}
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
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>
                  Senha <span>(mínimo de 6 caracteres)</span>
                </label>

                <input
                  type="password"
                  name="form-password"
                  id="form-password"
                  placeholder="Digite sua senha"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className={styles.linkArea}>
                <div>
                  <span>Não possui conta?</span>
                  <Link className={styles.link} to="/register"> clique aqui</Link>
                </div>
                <Link className={styles.forgot} to="/recovery">
                  Esqueci minha senha
                </Link>
              </div>
          </fieldset>
          <Button action={handleSubmit} txt="Entrar" />
        </form>
      </div>
    </>
  );
}
