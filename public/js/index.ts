// Add Todo Modal
const addTodoModal = <HTMLElement>document.querySelector('section#add-todo-modal');

// Show Add Todo Modal
const addTodoButton = <HTMLButtonElement>document.querySelector('button#add-todo-button');

addTodoButton.addEventListener('click', () => {
    addTodoModal.classList.remove('hidden');
});

// Close Add Todo Modal
const closeModal = <SVGSVGElement>document.querySelector('svg#close-modal');

closeModal?.addEventListener('click', () => {
    addTodoModal.classList.add('hidden');
});

// Flash Message
const flashMessage = <HTMLElement>document.querySelector('section#flash-message');

// Change Flash Message Color Depending on Type
const flashType = flashMessage?.dataset.flashtype;

window.addEventListener('load', {
    handleEvent: () => {
        switch (flashType) {
            case 'add':
                flashMessage?.classList.add('bg-[#07bc0c]');
                break;
            case 'update':
                flashMessage?.classList.add('bg-[#f1c40f]');
                break;
            case 'delete':
                flashMessage?.classList.add('bg-[#e74c3c]');
                break;
            default:
                break;
        }
    },
});

// Close Flash Message
flashMessage?.addEventListener('click', () => {
    flashMessage?.remove();
});

setTimeout(() => {
    flashMessage?.remove();
}, 3000);
