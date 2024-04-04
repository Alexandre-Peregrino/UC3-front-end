// Adicione um listener de clique ao botão de agendar consulta
document.getElementById('openCalendarBtn').addEventListener('click', function() {
    // Obter os valores dos campos
    var nomePaciente = document.getElementById('nomePaciente').value;
    var dataConsulta = document.getElementById('dataConsulta').value;
    var especialidade = document.getElementById('especialidade').value;
    // Criar um objeto com os dados da consulta
    var consulta = {
        nomePaciente: nomePaciente,
        dataConsulta: dataConsulta,
        especialidade: especialidade,  
    }
    // Converter o objeto para JSON e armazená-lo no localStorage
    localStorage.setItem('consulta', JSON.stringify(consulta));
    // Atualizar os detalhes da consulta
    updateConsultaDetails();
});
// Função para atualizar os detalhes da consulta
function updateConsultaDetails() {
    var consulta = JSON.parse(localStorage.getItem('consulta'));
    if (consulta) {
        document.getElementById('output').value = `
            Nome do Paciente: ${consulta.nomePaciente}
            Data e Hora da Consulta: ${consulta.dataConsulta}
            Especialidade: ${consulta.especialidade}`;
    }
}
consulta.value="";
// Chamar a função updateConsultaDetails() para exibir os detalhes da consulta
updateConsultaDetails();

document.getElementById('buscar').addEventListener('click', function() {
    // Obtém a chave digitada pelo usuário
    var nome = document.getElementById('nome').value;

    function updateConsultaDetails(consulta) {
        // Verifica se há dados armazenados na variável consulta
        if (consulta.nomePaciente==nome) {
            // Atualiza os detalhes da consulta com os dados da variável consulta
            document.getElementById('output').value = `
                Nome do Paciente: ${consulta.nomePaciente}
                Data e Hora da Consulta: ${consulta.dataConsulta}
                Especialidade: ${consulta.especialidade}`;
        } else {
            // Exibe mensagem se os dados não forem encontrados
            document.getElementById('output').value = "Os dados não foram encontrados para a chave informada.";
        }
    }
})
    
    // Chama a função com a chave digitada
    updateConsultaDetails('consulta'); // Supondo que 'consulta' seja a chave
    




