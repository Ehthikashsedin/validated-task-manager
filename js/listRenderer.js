
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
      <div class="task-header">
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
      </div>
      <div class="task-details">
        <div class="task-meta">Created: ${new Date(task.createdAt).toLocaleString()}</div>
        <p class="task-description">${task.description ? task.description : 'No description provided.'}</p>
      </div>
    `;

    listContainer.appendChild(li);
  });
}


const container = document.getElementById('task-list-container');
container?.addEventListener('click', (e) => {
  const taskItem = e.target.closest('.task-item');
  if (!taskItem || !taskItem.dataset.id) return;

  if (e.target.closest('.delete-btn')) {
    deleteTask(taskItem.dataset.id);
    renderList();
    return;
  }

  if (e.target.closest('.complete-btn')) {
    completeTask(taskItem.dataset.id);
    renderList();
    return;
  }

  taskItem.classList.toggle('expanded');
});
