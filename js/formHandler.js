

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
        const priority = priorityInput.value;

        const titleTooShort = title.length < 3;
        const isDuplicate = title.length >= 3 && !isTitleUnique(title);

        const isTitleValid = title.length >= 3 && !isDuplicate;
        const isPriorityValid = priority === 'High' || priority === 'Medium' || priority === 'Low';

        if (title.length === 0) {
            titleError.textContent = 'Title is required (minimum 3 characters).';
            titleError.style.display = 'block';
            titleInput.classList.add('is-invalid');
        } else if (titleTooShort) {
            titleError.textContent = 'Title must be at least 3 characters.';
            titleError.style.display = 'block';
            titleInput.classList.add('is-invalid');
        } else if (isDuplicate) {
            titleError.textContent = 'A task with this title already exists.';
            titleError.style.display = 'block';
            titleInput.classList.add('is-invalid');
        } else {
            titleError.textContent = '';
            titleError.style.display = 'none';
            titleInput.classList.remove('is-invalid');
        }

        const isFormValid = isTitleValid && isPriorityValid;

        submitBtn.disabled = !isFormValid;
    }

    titleInput.addEventListener('input', validateForm);
    priorityInput.addEventListener('change', validateForm);


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (submitBtn.disabled) return;

        const newTask = {
            id: Date.now().toString(),
            title: titleInput.value.trim(),
            priority: priorityInput.value,
            description: descriptionInput ? descriptionInput.value.trim() : '',
            createdAt: Date.now(),
            completed: false
        };


        if (typeof onSubmitCallback === 'function') {
            onSubmitCallback(newTask);
        }

        form.reset();
        priorityInput.value = 'Medium';
        validateForm();
    });

    validateForm();
}