let form = document.querySelector('#form');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.querySelector('input[type="email"]');

    if(email.value === '' || !emailValido(email.value)) {
        let errorMessage = document.querySelector('.msgErro');
        errorMessage.classList.add('errorMessage');
        errorMessage.textContent = 'Digite um email válido';
        input.classList.add('error');
        return;
    }

    let content = document.querySelector('.content');
    content.classList.add('emailSent');
    content.innerHTML = 
        `E-mail de recuperação<br>enviado para<br>${email.value}<br><p>Enviado</p>
        <span class="material-icons" id="done-icon">done</span> 
        `
    ;
    form.style.display = 'none';
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
