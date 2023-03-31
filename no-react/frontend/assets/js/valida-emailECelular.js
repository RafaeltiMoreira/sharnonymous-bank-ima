const email = document.getElementById('email');
var mensagemErroEmail = document.getElementById('erroEmail')

function emailValido(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return mensagemErroEmail.innerHTML = "";
    }
    return mensagemErroEmail.innerHTML = "<p>Email inválido!</p>";
}

email.addEventListener('focusout', ()=>{
    emailValido(email.value)
})