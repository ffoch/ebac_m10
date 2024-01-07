$(document).ready(function (){

    $('#form').validate({

        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            cpf: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            name:'O campo Nome não pode estar vazio.',
        }
    })

$('#cep').mask('00000-000')
$('#telefone').mask('(00) 0 0000-0000')
$('#cpf').mask('000.000.000-00')

})