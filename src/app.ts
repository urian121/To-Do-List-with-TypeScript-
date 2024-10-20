// Seleccionamos los elementos del DOM
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

interface Task {
    id: number;
    description: string;
}

// Array que contiene las tareas
let tasks: Task[] = [];

function addTask(): void {
    const description = taskInput.value.trim();
    if (description) {
        const task: Task = {
            id: Date.now(),
            description
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks(): void {
    taskList.innerHTML = ""; // Limpiamos la lista antes de renderizar
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.description;
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click", addTask);
