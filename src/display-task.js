// Set display to task through DOM

import Element from './create-dom-element';
import Task from './create-task';

const content = document.getElementById('content');

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

function createTaskElement(task) {
    const taskContainer = new Element('div','task').htmlElement;
    const taskTitle = new Element('p','task-title').htmlElement;
    const taskDescription = new Element('p', 'task-description').htmlElement;
    const taskDueDate = new Element('p', 'task-due-date').htmlElement;
    const taskDoneBtn = new Element('button', 'task-done-btn').htmlElement;
    const taskPriority = getTaskPriority(task);
    const editBtn = new Element('p', 'task-edit-btn').htmlElement;

    taskContainer.dataset.id = task.id; // Set the same task object identifier into the html
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    editBtn.textContent = 'Edit';

    taskContainer.append(taskDoneBtn, taskTitle, taskDescription, taskDueDate, taskPriority, editBtn);
    content.appendChild(taskContainer);
    return taskContainer;
}

// How do we display the Task Update?

export default createTaskElement;