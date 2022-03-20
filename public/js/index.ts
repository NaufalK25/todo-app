// Add Todo Modal
const addTodoModal = <HTMLElement>document.querySelector('section#add-todo-modal');

// Show Add Todo Modal
const addTodoButton = <HTMLButtonElement>document.querySelector('button#add-todo-button');

addTodoButton.addEventListener('click', () => {
    addTodoModal.classList.remove('hidden');
    const inputTitle = <HTMLInputElement>document.querySelector('input#title');
    inputTitle.focus();
});

// Close Add Todo Modal
const closeModal = <SVGSVGElement>document.querySelector('svg#close-modal');

closeModal?.addEventListener('click', () => {
    addTodoModal.classList.add('hidden');
});

// Show Todo Description
const todos: NodeListOf<HTMLElement> = document.querySelectorAll('section.todo-container');
const todosDesc: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p.todo-desc');

todos?.forEach(todo => {
    const todoContainerId = todo.id.replace('todo-container-', '');
    todosDesc?.forEach(todoDesc => {
        const todoDescId = todoDesc.id.replace('todo-desc-', '');
        if (todoContainerId === todoDescId) {
            todo?.addEventListener('mouseover', () => {
                todoDesc?.classList.remove('hidden');
            });
            todo?.addEventListener('mouseout', () => {
                todoDesc?.classList.add('hidden');
            });
        } else {
            todoDesc?.classList.add('hidden');
        }
    });
});

// Flash Message
const flashMessage = <HTMLElement>document.querySelector('section#flash-message');

// Change Flash Message Color Depending on Type
const flashType = flashMessage?.dataset.flashtype;

window.addEventListener('load', {
    handleEvent: () => {
        switch (flashType) {
            case 'success':
                flashMessage?.classList.add('bg-green-500');
                break;
            case 'warning':
                flashMessage?.classList.add('bg-yellow-500');
                break;
            case 'error':
                flashMessage?.classList.add('bg-red-500');
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
