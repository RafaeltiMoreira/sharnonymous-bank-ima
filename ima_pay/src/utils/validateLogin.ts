import { validateEmail } from "./regex";

export function validateLogin(email: string, password: string): string | null {
    if (email === "" || password === "" || !validateEmail.test(email)) {
      return "Digite o email e senha";
    }
  
    return null;
}