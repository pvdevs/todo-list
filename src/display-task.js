// Set display to task through DOM

import Element from './create-dom-element';
import Task from './create-task';

const content = document.getElementById('content');

function getTaskPriority(task){
    const taskPriority = new Element('div', 'task-priority').htmlElement;
    const taskPriorityText = new Element('p', 'task-priority-text').htmlElement;
    const taskPriorityIcon = new Element('div', 'task-priority-icon').htmlElement;

    taskPriorityText.textContent = 'High priority';

    taskPriority.append(taskPriorityText, taskPriorityIcon);

    return taskPriority
}

function createTaskElement(task) {
    const taskContainer = new Element('div','task').htmlElement;
    const taskTitle = new Element('p','task-title').htmlElement;
    const taskDescription = new Element('p', 'task-description').htmlElement;
    const taskDueDate = new Element('p', 'task-due-date').htmlElement;
    const taskDoneBtn = new Element('button', 'task-done-btn').htmlElement;
    const taskPriority = getTaskPriority(task);

    taskContainer.dataset.id = task.id; // Set the same task object identifier into the html
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;

    taskContainer.append(taskDoneBtn, taskTitle, taskDescription, taskDueDate, taskPriority);
    content.appendChild(taskContainer);
    return taskContainer;
}

class TaskElement {
    constructor(task) {
        this._taskContainer = new Element('div','task').htmlElement;
        this._taskTitle = new Element('p','task-title').htmlElement;
        this._taskDescription = new Element('p', 'task-description').htmlElement;
        this._taskDueDate = new Element('p', 'task-due-date').htmlElement;
        this._taskDoneBtn = new Element('button', 'task-done-btn').htmlElement;
        this._taskContainer.dataset.id = task.id;
    }

    get taskTitle() {
        return this._taskTitle;
    }
    set taskTitle(value){
        // maybe some validation here
        this._taskTitle = value;
    }

    get taskDescription() {
        return this._taskDescription;
    }
    set taskDescription(value){
        // maybe some validation here
        this._taskDescription = value;
    }

    set taskTitle(value){
        // maybe some validation here
        taskTitle = value;
    }

    set taskTitle(value){
        // maybe some validation here
        taskTitle = value;
    }
}

// How do we display the Todo Update?

export default createTaskElement;