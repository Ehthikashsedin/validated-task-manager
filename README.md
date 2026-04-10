# Validated Task Manager

This repository contains the base structure for the Task Manager project. The project is already physically split into two independent halves to allow parallel development without merge conflicts.

## Getting Started

1. Since we are using ES6 Modules (the `type="module"` in our `index.html`), opening `index.html` directly via the `file://` protocol will result in a CORS error. 
2. You must run this via a local server. If you use VSCode, install the **Live Server** extension and click "Go Live", or run `python -m http.server` / `npx serve` in this directory.

## Project Split & Responsibilities

### Developer A: Forms, Validation & Design
**Files to edit:** 
- `index.html` (Form section)
- `css/styles.css`
- `js/formHandler.js`

**Your Tasks:**
- Structure the "Create Task" form in `index.html`.
- Style the UI (design, color scheme, feedback classes like `.is-invalid`).
- Write the input validation logic in `formHandler.js` (Title min 3 chars, uniqueness check).
- Collect the data and pass the `newTask` object to the submit callback.

### Developer B: Data Management, Sorting & UI Rendering
**Files to edit:**
- `index.html` (Task List section)
- `js/taskStore.js`
- `js/listRenderer.js`

**Your Tasks:**
- In `taskStore.js`, implement `localStorage` saving/retrieving.
- Write the Multi-level sorting logic in `taskStore.js`.
- In `listRenderer.js`, build the DOM elements to display the tasks.
- Attach the event delegation listener to handle "Delete" and "Complete" buttons.

Happy Coding!
