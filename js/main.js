import { setupForm } from './formHandler.js';
import { addTask } from './taskStore.js';
import { renderList } from './listRenderer.js';

const listView = document.getElementById('listView');
const formView = document.getElementById('formView');

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

    // Initial render
    renderList();

    setupForm((newTask) => {
        addTask(newTask);
        
        // Re-render the list using Dev B's component
        renderList();

        showList();
    });
});