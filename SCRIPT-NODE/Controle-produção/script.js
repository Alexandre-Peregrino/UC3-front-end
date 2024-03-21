document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.querySelector('.days');
    const taskBox = document.getElementById('taskBox');
    const saveTasksButton = document.getElementById('saveTasksButton');
    const closeTaskBoxButton = document.getElementById('closeTaskBoxButton');
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Dia da semana do primeiro dia do mês
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Determinar o número de células vazias no início do calendário para alinhar corretamente os dias da semana
    let emptyCells = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Preencher as células vazias no início do calendário
    for (let i = 0; i < emptyCells; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendarBody.appendChild(emptyCell);
    }

    // Preenche o calendário com os dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = day;
        dateCell.classList.add('date');
        calendarBody.appendChild(dateCell);
        
        // Adiciona um evento de clique para cada data
        dateCell.addEventListener('click', function() {
            const taskTitle = document.querySelector('.task-title');
            const taskContent = document.querySelector('.task-content');
            const taskForm = document.querySelector('.task-form');
            
            // Defina aqui as tarefas para a data selecionada
            const tasks = getTasksForDate(day, currentMonth + 1, currentYear);
            
            // Atualize o título e o conteúdo do contêiner de tarefas
            taskTitle.textContent = `Tarefas do Dia - ${day}/${currentMonth + 1}/${currentYear}`;
            taskContent.textContent = tasks.length > 0 ? tasks.join(', ') : 'Nenhuma tarefa para este dia.';
            
            // Exiba o contêiner de tarefas
            taskBox.classList.remove('hidden');
            
            // Defina a função de salvamento de tarefas ao clicar no botão
            saveTasksButton.onclick = function() {
                const selectedTasks = Array.from(document.querySelectorAll('input[name="task"]:checked')).map(task => task.value);
                saveTasks(day, currentMonth + 1, currentYear, selectedTasks);
                // Pintar a data
                dateCell.classList.add('task-saved');
                taskBox.classList.add('hidden');
            };

            // Defina a função para fechar o contêiner de tarefas ao clicar no botão de fechar
            closeTaskBoxButton.onclick = function() {
                taskBox.classList.add('hidden');
            };
        });
    }
});

// Função de exemplo para obter tarefas para uma data específica
function getTasksForDate(day, month, year) {
    // Aqui você pode implementar a lógica para obter tarefas do dia do banco de dados ou de onde quer que sejam armazenadas
    // Por enquanto, vamos apenas retornar algumas tarefas de exemplo
    return [];
}

// Função para salvar tarefas na data selecionada
function saveTasks(day, month, year, tasks) {
    // Aqui você pode implementar a lógica para salvar as tarefas na data selecionada, como em um banco de dados
    // Por enquanto, vamos apenas exibir as tarefas no console
    console.log(`Tarefas do dia ${day}/${month}/${year}:`, tasks);
}
