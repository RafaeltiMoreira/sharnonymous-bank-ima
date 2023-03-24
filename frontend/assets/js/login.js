let usuarios = [
    {'email': 'rafa@teste.com', 'senha': '123456'},
    {'email': 'maria@teste.com', 'senha': '123456'}
];

let email = document.querySelector('#form-email');
let senha = document.querySelector('#form-password');
let submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    login();
});

let eye = document.querySelector('#eye');
eye.addEventListener('click', () => {
    if(senha.getAttribute('type') === 'text') {
        senha.setAttribute('type', 'password');
    } else {
        senha.setAttribute('type', 'text');
    }
});

function login() {
    let errorMessage = document.querySelector('.errormsg');
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 1500);

    if(email.value === '' || senha.value === '' || !emailValido(email.value)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = `Digite o email e senha`;
        return;
    } 

    senha.addEventListener('change', () => {
        if(senha.value.length >= 6) {
            senha.classList.remove('error');
            return;
        }
    })

    if(senha.value.length < 6) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = `A senha deve conter 6 caracteres ou mais`;
        senha.classList.add('error');
        return;
    }

    for(let i in usuarios) {
        let usuario = usuarios[i];
        if(usuario.email !== email.value && usuario.senha !== senha.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'email ou senha incorreto';
            return false;
        }
    }
    
    alert(`Bem vindo ${email.value}`);
    return true;
}

function emailValido(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/);
  
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
}

