/**
 * DEVELOPER B: Data Management & Persistence
 */

const STORAGE_KEY = 'tasks_data';

// Retrieve tasks from LocalStorage
export function getTasks() {
  // 1. Fetch tasks from localStorage using STORAGE_KEY
  // 2. Parse the JSON array. Make sure to return an empty array if null
  return []; 
}

// Save tasks to LocalStorage
export function saveTasks(tasks) {
  // 1. Stringify the tasks array and save to localStorage
}

// Add a new task
export function addTask(newTask) {
  const tasks = getTasks();
  tasks.push(newTask);
  

   // ✅ Sort tasks by priority (High → Low)
    tasks.sort((a, b) => {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    saveTasks(tasks);
}

export function deleteTask(taskId) {
  // Implement logic to remove task by taskId
}

export function completeTask(taskId) {
  // Implement logic to toggle task "completed" status
}

// Shared helper for Developer A's validation
let tasks = []; // Or however you store them
export function isTitleUnique(title) {
    // Returns true if NO existing task has this title
    return !tasks.some(t => t.title.toLowerCase() === title.toLowerCase());

    
}


// 3. Multi-level Sorting Logic Function
export function getSortedTasks() {
  const tasks = getTasks();
  // Primary Sort: Priority (High > Medium > Low)
  // Secondary Sort: Created Time (Newest first)
  return tasks;
}
