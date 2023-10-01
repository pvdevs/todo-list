import Element from "./create-dom-element";
import { tasks } from "./task";
import displayTask from "./display-task";
import populateTasks from "./populateStorage";

function taskTable() {
    const tasksContainer = new Element('div', 'tasks-container').htmlElement;

    return tasksContainer;
}

function fillTasksTable() {
    const tasksContainer = document.querySelector('.tasks-container');

    clearTaskTable();
    
    populateTasks();
    tasks.forEach(task => {
        tasksContainer.appendChild(displayTask(task));
    });

    return tasksContainer;
}

function clearTaskTable() {
    const tasksContainer = document.querySelector('.tasks-container');

    while(tasksContainer.firstChild) {
        tasksContainer.removeChild(tasksContainer.lastChild);
    }
}


export { taskTable, fillTasksTable, clearTaskTable };