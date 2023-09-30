//import { container } from 'webpack';
import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import {taskTable} from './tasks-table';

// this needs to go, i alredy done this in another module

function getContainer(id) {
    const _container = new Element('div', 'task-container').htmlElement;

    _container.dataset.id = id;

    return _container;
}

function getTaskContainer() {
    const _container = new Element('div','task').htmlElement;

    return _container;
}

function getTitle(title) {
    const _title = new Element('p','task-title').htmlElement;
    _title.textContent = title;

    return _title
}

function getDescription(description) {
    const _description = new Element('p', 'task-description').htmlElement;
    _description.textContent = description;

    return _description;
}

function getDueDate(date) {
    const _date = new Element('p', 'task-due-date').htmlElement;
    _date.textContent = date;

    return _date;
}

function getPriority(priority) {

    const _priority = priority;

    const _container = new Element('div', 'task-priority').htmlElement;
    const _text = new Element('p', 'task-priority-text').htmlElement;
    const _icon = new Element('div', 'task-priority-icon').htmlElement;

    _text.textContent = `${priority} priority`;
    _icon.classList.add(`${_priority.toLowerCase()}-priority-icon`);

    _container.append(_text, _icon);

    return _container;
}

function displayTask(task) {
    const container = getContainer(task.id);
    const taskContainer = getTaskContainer();
    const title = getTitle(task.title);
    const description = getDescription(task.description);
    const dueDate = getDueDate(task.dueDate);
    const taskPriority = getPriority(task.priority);
    
    const doneBtn = new Element('button', 'task-done-btn').htmlElement;
    const editBtn = new Element('p', 'task-edit-btn').htmlElement;

    editBtn.textContent = 'Edit';

    taskContainer.append(doneBtn, title, description, dueDate, taskPriority, editBtn);
    container.appendChild(taskContainer);

    return container;
}

export default displayTask; 