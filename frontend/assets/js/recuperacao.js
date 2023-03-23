let submitButton = document.querySelector('#button');
let formContent = document.querySelector('.form-content');
let backIcon = document.querySelector('.div-back');
const email = document.querySelector('#form-email');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    formContent.style.display = 'none';
    backIcon.style.display = 'none';
    let box = document.querySelector('#box');
    box.classList.add('emailSent');
    box.innerHTML = 
        `E-mail de recuperação<br>enviado para<br>${email.value}
        <div>
            <span class="material-icons" id="done-icon">done</span>
            <p>Enviado</p>
        </div>
        <div class="access">
            <a href="login.html">Acessar conta</a>
        </div>
        `
    ;
});

function emailValido(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

function toggleButton() {
    if(!emailValido(email.value) || email.value === '') {
        document.querySelector('.btn').disabled = true;
        return;
    }   
    document.querySelector('.btn').disabled = false;
}
