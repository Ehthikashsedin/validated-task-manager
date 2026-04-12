

import { isTitleUnique } from './taskStore.js';

export function setupForm(onSubmitCallback) {

    const form = document.getElementById('todoForm');
    const titleInput = document.getElementById('title');
    const priorityInput = document.getElementById('priority');
    const descriptionInput = document.getElementById('description');
    const titleError = document.getElementById('title-error');
    const submitBtn = document.getElementById('submitBtn');

    if (!form || !submitBtn) return;

    function validateForm() {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const priority = priorityInput.value;

        const isDuplicate = !isTitleUnique(title);

        const isTitleValid = title.length > 3 && !isDuplicate;
        const isDescriptionValid = description.length > 0;
        const isPriorityValid = priority !== "";

        if (title.length > 0 && title.length <= 3) {
            titleError.textContent = "Title must be > 3 characters.";
            titleError.style.display = 'block';
            titleInput.classList.add('is-invalid');
        } else if (isDuplicate && title.length > 0) {
            titleError.textContent = "Task already exists!";
            titleError.style.display = 'block';
            titleInput.classList.add('is-invalid');
        } else {
            titleError.textContent = "";
            titleError.style.display = 'none';
            titleInput.classList.remove('is-invalid');
        }

        const isFormValid = isTitleValid && isDescriptionValid && isPriorityValid;

        submitBtn.disabled = !isFormValid;
        submitBtn.style.opacity = isFormValid ? '1' : '0.5';
    }

    titleInput.addEventListener('input', validateForm);
    descriptionInput.addEventListener('input', validateForm);
    priorityInput.addEventListener('change', validateForm);


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (submitBtn.disabled) return;

        const newTask = {
            id: Date.now().toString(),
            title: titleInput.value.trim(),
            priority: priorityInput.value,
            description: descriptionInput.value.trim(),
            createdAt: Date.now(),
            completed: false
        };


        console.log("New Task Created:", newTask);

        if (typeof onSubmitCallback === 'function') {
            onSubmitCallback(newTask);
        }

        form.reset();
        validateForm();
    });

    validateForm();
}