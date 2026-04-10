/**
 * DEVELOPER A: Form Logic & Validation
 */
import { isTitleUnique } from './taskStore.js';

export function setupForm(onSubmitCallback) {
  const form = document.getElementById('task-form');
  // 1. Get references to form inputs (Title, Priority, Description, Submit Button)

  // 2. Add event listeners for "input" on the title field to check validity:
  //    - Must be >= 3 characters
  //    - Must be unique (use `isTitleUnique(currentTitle)`)
  //    - Render visual error messages appropriately
  //    - Enable/Disable submit button based on these conditions

  // 3. Prevent form default submission, build the newTask object, 
  //    and call the `onSubmitCallback(newTask)`.
  //    newTask object should look like:
  //    {
  //       id: Date.now().toString(),
  //       title: titleInput.value,
  //       priority: priorityInput.value,
  //       description: descriptionInput.value,
  //       createdAt: Date.now(),
  //       completed: false
  //    }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implementation here...
  });
}
