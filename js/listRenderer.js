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

  // 2. Iterate over the tasks and display them.
  //    Display ONLY Title and Priority. Description/CreatedAt remain hidden.
  //    Add buttons or icons for "Delete" and "Mark Complete".
  
  // Example structure to append:
  /*
    <li class="task-item priority-high" data-id="123">
      <span>Task Title</span>
      <button class="delete-btn">Delete</button>
      <button class="complete-btn">Complete</button>
    </li>
  */
}

// 3. Event Delegation Setup
// Attach a single click listener to the `task-list-container`
const container = document.getElementById('task-list-container');
container?.addEventListener('click', (e) => {
  // Check if target is a delete-btn
  if (e.target.classList.contains('delete-btn')) {
    // const id = find the parent item's data-id
    // deleteTask(id);
    // renderList();
  }

  // Check if target is a complete-btn
  if (e.target.classList.contains('complete-btn')) {
    // const id = find the parent item's data-id
    // completeTask(id);
    // renderList();
  }
});
