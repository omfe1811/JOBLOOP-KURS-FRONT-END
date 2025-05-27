const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const listContainer = document.querySelector('#list-container');
const clearTasksBtn=document.querySelector('#clear-all-tasks')
let tasks = [];
let filters={showCompleted: false};
const saveTasksToStorage = () => localStorage.setItem('tasks', JSON.stringify(tasks));
const toggleShowcompleted=document.querySelector("#show-completed");
toggleShowcompleted.addEventListener('change', (e)=>{
    filters.showCompleted=e.target.checked;
    renderPage();
})
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData=new FormData(taskForm);
    const userInput = formData.get('task-input');
    taskInput.value = "";
    tasks.push({
        timestamp: new Date(),
        description: userInput,
        completed: false
    })
    saveTasksToStorage();
    renderPage();
});
const completeTaskButton = (task) => {
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.checked = task.completed;
    inputElement.addEventListener('change', (e) => {
        console.log(e);
        task.completed = e.target.checked
        saveTasksToStorage();
        renderPage();
    });

    return inputElement;
};
const deleteTaskButton = (task) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('delete-task');
    buttonElement.textContent = 'Delete';
    buttonElement.addEventListener('click', () => {
        const taskIndex = tasks.indexOf(task);
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
            saveTasksToStorage();
            renderPage();
        }
    });

    return buttonElement;
}
const editTaskButton = (task, descriptionElement) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('edit-button');
    buttonElement.textContent = 'Edit';
    buttonElement.addEventListener('click', () => {
        task.description = descriptionElement.value;
        descriptionElement.readOnly = !descriptionElement.readOnly;
        buttonElement.textContent = descriptionElement.readOnly ? 'Edit' : 'Save';
        saveTasksToStorage();
    })

    return buttonElement;
};
clearTasksBtn.addEventListener('click', () => {
    tasks = [];
    saveTasksToStorage();
    renderPage();
});


const buildPage = (tasksArr) => {
    listContainer.innerHTML = "";

    tasksArr.forEach((task) => {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        task.completed
            ? taskContainer.classList.add("completed")
            : taskContainer.classList.remove("completed");

        const timestampElement = document.createElement("p");
        timestampElement.classList.add("datetime");
       timestampElement.textContent = new Date(task.timestamp).toLocaleString();

        const descriptionElement = document.createElement("input");
        descriptionElement.classList.add("description");
        descriptionElement.readOnly=true;
        descriptionElement.value = task.description;
        const completeTaskBtn = completeTaskButton(task);
        const deleteBtn = deleteTaskButton(task);
const editBtn = editTaskButton(task, descriptionElement);
        taskContainer.append(timestampElement, descriptionElement, completeTaskBtn, deleteBtn, editBtn);
        listContainer.prepend(taskContainer);
    });
};
const filterArray=(tasksArr)=>{
    return tasksArr.filter(task=>{
       return filters.showCompleted||!task.completed
    })
}
const renderPage = () => {

    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    buildPage(filterArray(tasks));
}
renderPage();