let form = document.querySelector('#form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    form.style.display = 'none';
    let content = document.querySelector('.content');
    content.classList.add('emailSent');
    content.innerHTML = 
        `E-mail de recuperação<br>enviado para<br>${email.value}<br><p>Enviado</p>
        <span class="material-icons" id="done-icon">done</span>
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
        document.querySelector('#btn').disabled = true;
        return;
    }   
    document.querySelector('#btn').disabled = false;
}
