const addTodoModal = <HTMLElement>document.querySelector('section#add-todo-modal');

// Show Add Todo Modal
const addTodoButton = <HTMLAnchorElement>document.querySelector('a#add-todo-button');

addTodoButton.addEventListener('click', () => {
    addTodoModal.classList.remove(...['hidden']);
});

// Close Add Todo Modal
const closeModal = <SVGSVGElement>document.querySelector('svg#close-modal');

closeModal?.addEventListener('click', () => {
    addTodoModal.classList.add('hidden');
});

// Close Flash Message
const flashMessage = <HTMLElement>document.querySelector('section#flash-message');

flashMessage?.addEventListener('click', () => {
    flashMessage.classList.add('hidden');
});

setTimeout(() => {
    flashMessage.classList.add('hidden');
}, 2000);
