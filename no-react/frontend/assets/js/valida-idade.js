var dataDeNascimento = document.getElementById('data_nascimento')
var mensagemErroIdade = document.getElementById('erroNascimento')
function ehMaiorDeIdade(dataDeNascimento){
    const dataNascimento = new Date(dataDeNascimento.value)
    if(!validaIdade(dataNascimento)){
        mensagemErroIdade.innerHTML = "<p>Usuário não é maior de 18 anos.</p>"
    } else{
        mensagemErroIdade.innerHTML = ""
    }
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18;
}

dataDeNascimento.addEventListener('focusout', ()=> ehMaiorDeIdade(dataDeNascimento))