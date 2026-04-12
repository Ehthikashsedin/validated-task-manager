# Validated Task Manager (Planning & Work Split)

This repository serves as the shared workspace for our Vanilla JavaScript Task Manager project. The goal is to build an interactive application focusing on real-time validation, DOM manipulation, multi-level sorting, and `localStorage`.

To ensure we can work simultaneously without running into Git merge conflicts, the application architecture has been strictly decoupled into two distinct domains. 

---

## Developer A: UI, Forms, and State Validation
**Primary Files:** `index.html` (Form section), `css/styles.css`, `js/formHandler.js`

**The Plan:**
1. **Design & Layout**: Build out the structural HTML skeleton and write the CSS to make the application look modern. Create specific visual feedback classes (e.g. `.is-invalid` borders for errored inputs).
2. **Form Interaction**: Wire up the `task-title`, `task-priority`, and `task-description` inputs.
3. **Real-time Validation**: 
   - Listen to active keystrokes on the title input.
   - Enforce a minimum length of 3 characters.
   - Call the centralized uniqueness function to ensure the entered title doesn't already exist.
   - Restrict the "Add Task" button dynamically (disabled until fully valid).
4. **Data Dispatch**: Upon successful form submission, construct the new task object and dispatch it to Developer B's data store.

---

## Developer B: Data Management & List Rendering
**Primary Files:** `js/taskStore.js`, `js/listRenderer.js`
*(Note: Developer B's storage and DOM insertion code has been implemented!)*

**The Plan:**
1. **Data Persistence**: Utilize the browser's `localStorage` to serialize, save, and read the master task array so items survive page reloads.
2. **Sorting Logic**: Write a heavy multi-level sorting function that organizes the retrieved list computationally:
   - Primary Sort: Priority (High = 3 > Medium = 2 > Low = 1).
   - Secondary Sort: Chronological (Newest tickets pushed to the top of their respective group).
3. **Dynamic UI Rendering**: Iterate the strictly sorted array into the DOM. Render *only* the Title and Priority badge on the card, internally concealing the task Description and Timestamp.
4. **Event Delegation**: Attach a highly-efficient single click listener on the parent list container to intercept and process "Mark Complete" and "Delete" clicks via dataset IDs.

---

