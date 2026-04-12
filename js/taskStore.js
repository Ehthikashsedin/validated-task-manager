const STORAGE_KEY = 'tasks_data';
export function getTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTask(newTask) {
  const tasks = getTasks();
  tasks.push(newTask);
  saveTasks(tasks);
}

export function deleteTask(taskId) {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasks(updatedTasks);
}

export function completeTask(taskId) {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => 
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  saveTasks(updatedTasks);
}


export function isTitleUnique(title) {
  const tasks = getTasks();
  return !tasks.some(task => task.title.toLowerCase() === title.toLowerCase());
}


export function getSortedTasks() {
  const tasks = [...getTasks()];

  // Priority order mapping
  const priorityMap = { high: 3, medium: 2, low: 1 };

  return tasks.sort((a, b) => {
    // Primary Sort: Priority (High > Medium > Low)
    const prioA = priorityMap[a.priority?.toLowerCase()] || 0;
    const prioB = priorityMap[b.priority?.toLowerCase()] || 0;

    if (prioB !== prioA) {
      return prioB - prioA;
    }

    // Secondary Sort: Created Time (Newest first)
    return b.createdAt - a.createdAt;
  });
}
