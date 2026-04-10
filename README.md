# Validated Task Manager

A complete, interactive Task Manager built with Vanilla JavaScript, focusing on real-time form validation, multi-level array sorting, DOM manipulation, event delegation, and `localStorage` for data persistence. 

## Features

* **Real-time Form Validation**: Ensures task titles are unique and meet the minimum length requirement dynamically as you type.
* **Smart Priority Levels**: Selection (High, Medium, Low) that auto-defaults to "Medium" for quick input.
* **Data Persistence**: Tasks are saved automatically using `localStorage`, meaning data persists even if you refresh or close the browser.
* **Multi-Level Sorting**: 
  - Primary Sort: Grouped by Priority (High > Medium > Low).
  - Secondary Sort: Within each priority group, the newest tasks appear at the top.
* **Event Delegation**: Highly efficient DOM management where a single parent event listener intercepts and handles all "Mark Complete" and "Delete" actions across the dynamic task list.
* **Component-Based Vanilla JS**: The app leverages ES6 modules to split application concerns logically into sub-files, creating a maintainable, clean architecture without the need for heavy external frameworks.

## Setup & Running the Application

Because this application uses native JavaScript ES6 Modules (`type="module"` in `index.html`), opening the HTML file directly in the browser via `file://` will cause a CORS error. You must serve these files through a local server.

### Using VSCode (Recommended)
1. Install the **Live Server** extension.
2. Open the project folder in VSCode.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Using Node.js
If you have Node.js installed, you can quickly spawn a server in your terminal:
```bash
npx serve .
```

### Using Python
If you have Python installed, you can use its built-in module:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Project Structure & Architecture

To allow seamless teamwork and avoid Git merge conflicts, the codebase is physically separated into logical modules:

* `index.html` — The template containing the static UI sections for the form and the tasks wrapper.
* `css/styles.css` — Visual styles and CSS-based priority feedback logic.
* `js/main.js` — The application's entry point that coordinates data retrieval and bindings when the DOM is fully loaded.
* `js/formHandler.js` — Governs form validations (lengths, uniqueness checks). Collects DOM input values to construct new objects.
* `js/taskStore.js` — Controls the Data layer. Uses `localStorage` interfaces, manipulates task arrays, and dictates the multi-level sorting equations.
* `js/listRenderer.js` — Controls the Presentation layer for tasks. Iterates sorted arrays to inject HTML dynamically into the DOM, while maintaining centralized event listeners.
