// JavaScript Personalizado para a Fase 2

// 1. Função Temporal (Exibir data e hora atual)
function exibirDataHora() {
    const elemento = document.getElementById('data-hora-atual');
    if (elemento) {
        const agora = new Date();
        const opcoes = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        elemento.textContent = 'Data e Hora Atual: ' + agora.toLocaleDateString('pt-BR', opcoes);
    }
}

// Chama a função imediatamente e a cada segundo
exibirDataHora();
setInterval(exibirDataHora, 1000);


// 2. Validação de Formulário (Bootstrap 5)
(function () {
    'use strict'

    // Busca todos os formulários que queremos aplicar estilos de validação Bootstrap
    const forms = document.querySelectorAll('.needs-validation')

    // Itera sobre eles e previne o envio
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    // Se o formulário for válido, exibe um alerta simples (simulando o envio)
                    alert('Agendamento enviado com sucesso! (Simulação)');
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// 3. Função para habilitar/desabilitar campo de endereço
document.addEventListener('DOMContentLoaded', function() {
    const teleBusca = document.getElementById('teleBusca');
    const entregaLocal = document.getElementById('entregaLocal');
    const enderecoField = document.getElementById('endereco');

    function toggleEndereco() {
        if (teleBusca.checked) {
            enderecoField.disabled = false;
            enderecoField.required = true;
            enderecoField.setAttribute('placeholder', 'Rua, número, bairro (Obrigatório para Tele-busca)');
        } else {
            enderecoField.disabled = true;
            enderecoField.required = false;
            enderecoField.setAttribute('placeholder', 'Rua, número, bairro');
        }
    }

    if (teleBusca && entregaLocal && enderecoField) {
        teleBusca.addEventListener('change', toggleEndereco);
        entregaLocal.addEventListener('change', toggleEndereco);
        
        // Inicializa o estado
        toggleEndereco();
    }
});
