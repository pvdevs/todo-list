import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import { compareAsc, format } from 'date-fns';
import {displayTask} from './display-task';
import {taskTable, fillTasksTable} from './tasks-table';
import {checkStorage, updateStorage} from './populateStorage';

const content = document.getElementById('content');

function appendCreateTask() {
    const container = document.querySelector('.create-task-container');

    container.replaceChildren();
    container.appendChild(createTask());

    saveBtnEvent();
}

function getAddTaskButton() {
    const container = new Element('div', 'create-task-container').htmlElement;

    const btn = new Element('button', 'add-task-btn').htmlElement;
    btn.type = 'button';
    btn.textContent = 'Add new task';

    btn.addEventListener('click', appendCreateTask);

    container.appendChild(btn);
    return container;
}

function createTask(task) {
    const container = new Element('div', 'add-task-container').htmlElement;

    const form = getForm(task);

    container.append(form);
    return container;
}

function getForm(task) {
    const form = new Element('form','add-task-form').htmlElement;

    const formTop = getFormTop(task);
    const formBottom = getFormBottom(task);

    form.append(formTop, formBottom);

    //btnEvents();

    document.addEventListener('DOMContentLoaded', () => {
        // Your code here, including the btnEvents() function.
        saveBtnEvent();
    });

    return form;
}

function getFormTop(task) {
    const formTop = new Element('div', 'add-task-form-top').htmlElement;
    const title = new Element('input', 'add-task-input', 'title-input').htmlElement;;
    const description = new Element('textarea', 'add-task-description-label', 'description-textarea').htmlElement;

    if(task !== undefined) {
        title.value = task.title;
        description.value = task.description;
    } else {
        title.value = 'teste';
        description.value = 'teste';
    }

    formTop.append(title, description);

    return formTop;
}

function getFormBottom(task) {
    const formBottom = new Element('div', 'add-task-bottom').htmlElement;

    const formBottomLeft = getFormBottomLeft(task);
    const formBottomRight = getFormBottomRight();

    formBottom.append(formBottomLeft, formBottomRight);

    return formBottom;
}

function getFormBottomLeft(task) {
    const formBottomLeft = new Element('div', 'add-task-bottom-left').htmlElement;
    const taskPriority = getPriority(task);
    const taskDate = getDate(task);

    formBottomLeft.append(taskDate, taskPriority);

    return formBottomLeft;
}

function getFormBottomRight() {
    const formBottomRight = new Element('div', 'form-task-bottom-right').htmlElement;
    const cancelBtn = new Element ('button', 'form-btn', 'cancel-btn').htmlElement;
    const saveBtn = new Element ('button', 'form-btn', 'save-btn').htmlElement;

    saveBtn.type = 'button';
    cancelBtn.type= 'cancel';

    cancelBtn.textContent = 'Cancel';
    saveBtn.textContent = 'Save';

    formBottomRight.append(cancelBtn, saveBtn);
    
    return formBottomRight
}

function getDate(task) {
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const taskDate = new Element('input', 'add-task-date').htmlElement;

    taskDate.type = 'date';

    if(task !== undefined) taskDate.value = task.dueDate;
    taskDate.min = todayDate;

    return taskDate;
}

function getChoosedPriority(task) {
    const priorityLevels = {
        'high' : highPriority(),
        'mid' : mediumPriority(),
        'low' : lowPriority()
    }

    if(task !== undefined) priorityLevels[task.priority.toLowerCase()].selected = true;
    return priorityLevels;
}

function highPriority() {
    const optionHigh = document.createElement('option');

    optionHigh.value = 'High';
    optionHigh.textContent = 'High Priority';

    return optionHigh;
}

function mediumPriority() {
    const optionMid = document.createElement('option');
    optionMid.value = 'Mid';
    optionMid.textContent = 'Mid Priority';

    return optionMid;
}

function lowPriority() {
    const optionLow = document.createElement('option');
    optionLow.value = 'Low';
    optionLow.textContent = 'Low Priority';

    return optionLow;
}

function getPriority(task) {
    const selectContainer = new Element('div', 'select-priority-container').htmlElement;
    const selectBtn = new Element('select', 'select-priority-btn').htmlElement;
    const icon = new Element('div', 'priority-icon').htmlElement;

    const priorityLevels = getChoosedPriority(task);

    Object.values(priorityLevels).forEach(value => {
        selectBtn.appendChild(value);
    });

    selectContainer.append(icon, selectBtn);

    return selectContainer;
}

function saveBtnEvent() {
    const saveBtn = document.getElementById('save-btn');

    saveBtn.addEventListener('click', e => {

        const title = document.getElementById('title-input');
        const description = document.getElementById('description-textarea');
        const dueDate = document.querySelector('.add-task-date');
        const priority = document.querySelector('.select-priority-btn');
        ////

        const task = new Task(title.value, description.value, dueDate.value, priority.value);
        tasks.push(task);

        updateStorage();
        checkStorage()
    })
}

export {getAddTaskButton, createTask, getForm};