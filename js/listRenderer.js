
import { getSortedTasks, deleteTask, completeTask } from './taskStore.js';

export function renderList() {
  const listContainer = document.getElementById('task-list');
  if (!listContainer) return;

  const tasks = getSortedTasks();
  listContainer.innerHTML = '';

  if (tasks.length === 0) {
    listContainer.innerHTML = '<li class="empty-message">No tasks currently. Yay!</li>';
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item priority-${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <div class="task-info">
        <span class="title">${task.title}</span>
        <span class="badge badge-${task.priority.toLowerCase()}">${task.priority}</span>
      </div>
      <div class="actions">
        <button class="complete-btn" ${task.completed ? 'disabled' : ''}>
          ${task.completed ? '✓' : 'Complete'}
        </button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    listContainer.appendChild(li);
  });
}


const container = document.getElementById('task-list-container');
container?.addEventListener('click', (e) => {

  if (e.target.classList.contains('delete-btn')) {
    const taskItem = e.target.closest('.task-item');
    if (taskItem && taskItem.dataset.id) {
      deleteTask(taskItem.dataset.id);
      renderList();
    }
  }

  if (e.target.classList.contains('complete-btn')) {
    const taskItem = e.target.closest('.task-item');
    if (taskItem && taskItem.dataset.id) {
      completeTask(taskItem.dataset.id);
      renderList();
    }
  }
});
