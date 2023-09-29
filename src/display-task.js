import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import taskTable from './tasks-table';

const content = document.getElementById('content');

// this needs to go, i alredy done this in another module
function getTaskPriority(task){
    const taskPriority = new TaskPriority(`${task.priority}`);

    return taskPriority.priority;
}

class TaskPriority {
    constructor(priorityLevel){
        this._container = new Element('div', 'task-priority').htmlElement;
        this._text = new Element('p', 'task-priority-text').htmlElement;
        this._icon = new Element('div', 'task-priority-icon').htmlElement;

        this._text.textContent = `${priorityLevel} priority`;
        this._icon.classList.add(`${priorityLevel}-priority-icon`);

        this._text.textContent = this._text.textContent.charAt(0).toUpperCase() + this._text.textContent.slice(1);

        this._container.append(this._text, this._icon);
    }

    get priority() {
        return this._container;
    }
}

function displayTask(task) {
    const taskContainer = new Element('div', 'task-container').htmlElement;
    const container = new Element('div','task').htmlElement;
    const title = new Element('p','task-title').htmlElement;
    const description = new Element('p', 'task-description').htmlElement;
    const dueDate = new Element('p', 'task-due-date').htmlElement;
    const doneBtn = new Element('button', 'task-done-btn').htmlElement;
    const taskPriority = getTaskPriority(task);
    const editBtn = new Element('p', 'task-edit-btn').htmlElement;

    container.dataset.id = task.id; // Set the same task object identifier into the html
    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    editBtn.textContent = 'Edit';

    container.append(doneBtn, title, description, dueDate, taskPriority, editBtn);
    taskContainer.appendChild(container);

    content.appendChild(taskContainer);
    return taskContainer;
}

function fillTasksTable() {
    const tasksContainer = document.querySelector('.tasks-container');

    clearTaskTable();
    
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

export {displayTask, fillTasksTable};