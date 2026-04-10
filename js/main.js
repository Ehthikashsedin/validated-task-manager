import { getTasks, addTask, deleteTask, completeTask } from './taskStore.js';
import { setupForm } from './formHandler.js';
import { renderList } from './listRenderer.js';

// Wait for the DOM to be ready before initializing
document.addEventListener('DOMContentLoaded', () => {
  console.log("App initializing...");

  // Load initial tasks from storage
  const tasks = getTasks();
  
  // Render the initial task list
  renderList(tasks);

  // Setup form validation and submission
  setupForm((newTask) => {
    // When the form successfully submits a valid task:
    addTask(newTask);
    renderList(getTasks()); // Re-render the list
  });
});
