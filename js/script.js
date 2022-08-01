$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

function enviarMensagem() {
    let nome = document.querySelector('[name="nome"]').value;
    let email = document.querySelector('[name="email"]').value;
    let mensagem = document.querySelector('[name="mensagem"]').value;

    console.log('Enviado mensagem...: ', { nome, email, mensagem });
    
    limparFormulario();

    alert("Até mais e obrigado pelos peixes!");
}

function limparFormulario() {
    document.querySelector('[name="nome"]').value = '';
    document.querySelector('[name="email"]').value = '';
    document.querySelector('[name="mensagem"]').value = '';
}