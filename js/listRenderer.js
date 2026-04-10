/**
 * DEVELOPER B: UI Rendering for Task List
 */
import { getSortedTasks, deleteTask, completeTask } from './taskStore.js';

export function renderList() {
  const listContainer = document.getElementById('task-list');
  if (!listContainer) return;

  const tasks = getSortedTasks(); // Get the sorted tasks to display

  // 1. Clear the current list container
  listContainer.innerHTML = '';

  if (tasks.length === 0) {
    listContainer.innerHTML = '<li class="empty-message">No tasks currently. Yay!</li>';
    return;
  }

  // 2. Iterate over the tasks and display them.
  //    Display ONLY Title and Priority. Description/CreatedAt remain hidden.
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item priority-${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`;
    // Attach data-id to the list item itself for the delegated event listeners
    li.dataset.id = task.id;

    // Build the inner HTML focusing solely on Title and Priority badge
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

// 3. Event Delegation Setup
// Attach a single click listener to the `task-list-container`
const container = document.getElementById('task-list-container');
container?.addEventListener('click', (e) => {
  
  // Handing the Delete click
  if (e.target.classList.contains('delete-btn')) {
    // Find the closest task-item to get the dataset ID
    const taskItem = e.target.closest('.task-item');
    if (taskItem && taskItem.dataset.id) {
      deleteTask(taskItem.dataset.id);
      renderList(); // Re-render once changed
    }
  }

  // Handling the Complete click
  if (e.target.classList.contains('complete-btn')) {
    const taskItem = e.target.closest('.task-item');
    if (taskItem && taskItem.dataset.id) {
      completeTask(taskItem.dataset.id);
      renderList(); // Re-render once changed
    }
  }
});
