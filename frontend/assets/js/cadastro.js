async function buscaEndereco(CEP) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existe');
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('logradouro')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')
        var complemento = document.getElementById('complemento')

        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf
        logradouro.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        complemento.value = consultaCEPConvertida.complemento

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido. tente novamente com um CEP diferente!</p>"
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => {
    if (cep.value === "") {
        cidade.value = ""
        estado.value = ""
        logradouro.value = ""
        bairro.value = ""
        complemento.value = ""
    } else {
        buscaEndereco(cep.value)
    }
})