import { useRef, useState } from "react";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Error } from "../../components/Error";
import { users } from "../../models/users";
import { validateLogin } from "../../utils/validateLogin";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validateLogin(email, password);

    if (validationError) {
      setLoginError(true);
      setErrorMessage(validationError);
      setTimeout(() => {
        setLoginError(false);
        setEmail("");
      }, 1000);
      return;
    }

    let userFound = false;
    for (let user of users) {
      if (user.email === email && user.password === password) {
        userFound = true;
        navigate(`/user/${user.id}`, { state: { user } });
        break;
      }
    }

    if (!userFound) {
      setLoginError(true);
      setErrorMessage("Email ou senha incorretas");
      setTimeout(() => {
        setLoginError(false);
      }, 1000);
      return;
    }
  };

  const toggleShow = () => {
    if (inputRef.current) {
      if (inputRef.current.type === "password") {
        setSeePassword(true);
        inputRef.current.type = "text";
      } else {
        setSeePassword(false);
        inputRef.current.type = "password";
      }
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className={styles.inputWrapper}>
                <label>
                  Senha <span>(mínimo de 6 caracteres)</span>
                </label>

                <input
                  ref={inputRef}
                  type="password"
                  name="form-password"
                  id="form-password"
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button
                  type="button"
                  className={styles.iconArea}
                  onClick={toggleShow}
                >
                  {seePassword ? (
                    <BsEyeFill className={styles.eye} />
                  ) : (
                    <BsEyeSlashFill className={styles.eye} />
                  )}
                </button>
              </div>
            </div>
            <div className={styles.linkArea}>
              <div>
                <span>Não possui conta?</span>
                <Link className={styles.link} to="/register">
                  clique aqui
                </Link>
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
