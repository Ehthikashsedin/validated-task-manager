
import { setupForm } from './formHandler.js';
import { addTask } from './taskStore.js';

const listView = document.getElementById('listView');
const formView = document.getElementById('formView');
const tasksContainer = document.getElementById('tasksContainer');

const showForm = () => {
    formView.classList.remove('hidden');
    listView.classList.add('hidden');
};

const showList = () => {
    formView.classList.add('hidden');
    listView.classList.remove('hidden');
};

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btnCreate').addEventListener('click', showForm);
    document.getElementById('btnCancel').addEventListener('click', showList);

    setupForm((newTask) => {


        addTask(newTask);


        const emptyMessage = tasksContainer.querySelector('.empty-message');
        if (emptyMessage) emptyMessage.remove();

        const taskEl = document.createElement('div');
        taskEl.className = 'task-item';

        taskEl.innerHTML = `
            <div class="task-content">
                <h3>${newTask.title}</h3>
                <p>${newTask.description || 'No description provided.'}</p>
            </div>
            <span class="priority-tag priority-${newTask.priority}">
                ${newTask.priority}
            </span>
        `;

        tasksContainer.appendChild(taskEl);

        showList();
    });
});