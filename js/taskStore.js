/**
 * DEVELOPER B: Data Management & Persistence
 */

const STORAGE_KEY = 'tasks_data';

// Retrieve tasks from LocalStorage
export function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Save tasks to LocalStorage
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Add a new task
export function addTask(newTask) {
  const tasks = getTasks();
  tasks.push(newTask);
  saveTasks(tasks);
}

// Delete an existing task by ID
export function deleteTask(taskId) {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasks(updatedTasks);
}

// Mark a task as completed
export function completeTask(taskId) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    // Toggle completion status or set to true
    tasks[taskIndex].completed = true;
    saveTasks(tasks);
  }
}

// Shared helper for Developer A's validation
export function isTitleUnique(title) {
  const tasks = getTasks();
  return !tasks.some(task => task.title.toLowerCase() === title.toLowerCase());
}

// 3. Multi-level Sorting Logic Function
export function getSortedTasks() {
  const tasks = getTasks();
  
  // Priority order mapping
  const priorityMap = { 'high': 3, 'medium': 2, 'low': 1 };
  
  return tasks.sort((a, b) => {
    // Primary Sort: Priority (High > Medium > Low)
    const prioA = priorityMap[a.priority?.toLowerCase()] || 0;
    const prioB = priorityMap[b.priority?.toLowerCase()] || 0;
    
    if (prioB !== prioA) {
      return prioB - prioA; // Descending order
    }
    
    // Secondary Sort: Created Time (Newest first)
    return b.createdAt - a.createdAt; // Descending order
  });
}
