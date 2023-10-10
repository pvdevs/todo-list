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
    cancelBtnEvent();
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
    const titleDiv = new Element('div', 'title-input-div').htmlElement;
    const descriptionDiv = new Element('div', 'description-textarea-div').htmlElement;
    const title = new Element('input', 'title-input').htmlElement;
    const description = new Element('textarea', 'description-textarea').htmlElement;

    if(task !== undefined) {
        title.value = task.title;
        description.value = task.description;
    } else {
        title.placeholder = 'Title';
        description.placeholder = 'Description';
    }

    titleDiv.appendChild(title)
    descriptionDiv.appendChild(description);

    formTop.append(titleDiv, descriptionDiv);

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
    cancelBtn.type= 'button';

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
    taskDate.value = todayDate;

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

function cancelBtnEvent() {
    const cancelBtn = document.getElementById('cancel-btn');

    cancelBtn.addEventListener('click', e => {
        const tasksContainer = document.querySelector('.tasks-container');
        const createTaskContainer = document.querySelector('.create-task-container');
        tasksContainer.removeChild(createTaskContainer);

        tasksContainer.appendChild(getAddTaskButton());
    })
}

function saveBtnEvent() {
    const saveBtn = document.getElementById('save-btn');

    saveBtn.addEventListener('click', e => {

        const title = document.querySelector('.title-input');
        const description = document.querySelector('.description-textarea');
        const dueDate = document.querySelector('.add-task-date');
        const priority = document.querySelector('.select-priority-btn');
        ////

        if(formIsInvalid()) return;

        else {
           const task = new Task(title.value, description.value, dueDate.value, priority.value);
           tasks.push(task);

           updateStorage();
           checkStorage()
        }

    })
}

function formIsInvalid() {

    const form = getFormObj();

    let isInvalid = false;

    clearInvalidInputs(form)

    Object.keys(form).forEach(key => {
        if (form[key].value === '') {

            const invalidInput = form[key];
            displayInvalidInput(invalidInput);

            isInvalid = true;
        }       
    });

    return isInvalid;
}

function getFormObj() {
    const form  = {
        'title' : document.querySelector('.title-input'),
        'description' : document.querySelector('.description-textarea'),
        'dueDate' : document.querySelector('.add-task-date'),
        'priority' : document.querySelector('.select-priority-btn')
    }

    return form
}

function clearInvalidInputs(form){
    const invalidText = document.querySelector('.invalid-input-text');
    const titleInput = document.querySelector('.title-input-div');
    const descriptionTextArea = document.querySelector('.description-textarea-div');

    const titleInputInvalidText = document.querySelector('.title-input-div .invalid-input-text');
    const descriptionTextAreaInvalidText = document.querySelector('.description-textarea-div .invalid-input-text');

    if(titleInputInvalidText) titleInput.removeChild(titleInputInvalidText);
    if(descriptionTextAreaInvalidText) descriptionTextArea.removeChild(descriptionTextAreaInvalidText);
    


    Object.keys(form).forEach(key => form[key].classList.remove('invalid-input'));
}

function displayInvalidInput(input) {
    const invalidText = new Element('small', 'invalid-input-text').htmlElement;
    invalidText.textContent = 'This field is required!'


    console.log(typeof(input));
    console.log(input);

    input.parentNode.appendChild(invalidText);
    input.classList.add('invalid-input');
}


export {getAddTaskButton, createTask, getForm, formIsInvalid};