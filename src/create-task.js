import Element from './create-dom-element';
import {Task, findTask, tasks} from './tasks';


function getForm() {
    const form = new Element('form','add-task-form').htmlElement;

    const formTop = getFormTop();
    const formBottom = getFormBottom();

    form.append(formTop, formBottom);

    return form;
}

function getFormTop() {
    const formTop = new Element('div', 'add-task-form-top').htmlElement;
    const title = new Element('input', 'add-task-input', 'title-input').htmlElement;;
    const description = new Element('textarea', 'add-task-description-label', 'description-textarea').htmlElement;

    title.value = 'teste';
    description.value = 'teste';

    formTop.append(title, description);

    return formTop;
}

function getFormBottom() {
    const formBottom = new Element('div', 'add-task-bottom').htmlElement;

    const formBottomLeft = getFormBottomLeft();
    const formBottomRight = getFormBottomRight();

    formBottom.append(formBottomLeft, formBottomRight);

    return formBottom;
}

function getFormBottomLeft() {
    const formBottomLeft = new Element('div', 'add-task-bottom-left').htmlElement;
    const taskPriority = getPriority();
    const taskDate = getDate();

    formBottomLeft.append(taskDate, taskPriority);

    return formBottomLeft;
}

function getFormBottomRight() {
    const formBottomRight = new Element('div', 'form-task-bottom-right').htmlElement;
    const cancelBtn = new Element ('button', 'cancel-btn').htmlElement;
    const saveBtn = new Element ('button', 'save-btn').htmlElement;

    cancelBtn.textContent = 'Cancel';
    saveBtn.textContent = 'Save';

    formBottomRight.append(cancelBtn, saveBtn);

    return formBottomRight
}

function getDate() {
    const todayDate = new Date().toJSON().slice(0,10);
    const taskDate = new Element('input', 'add-task-date').htmlElement;

    taskDate.type = 'date';
    taskDate.min = todayDate;

    return taskDate;
}


function getPriority(currentPriority) {
    const selectContainer = new Element('div', 'select-priority-container').htmlElement;
    const selectBtn = new Element('select', 'select-priority-btn').htmlElement;
    const optionHigh = new Element('option').htmlElement;
    const optionMid = new Element('option').htmlElement;
    const optionLow = new Element('option').htmlElement;
    const icon = new Element('div', 'priority-icon').htmlElement;

    optionHigh.value = 'High';
    optionHigh.textContent = 'High Priority'

    optionMid.value = 'Medium';
    optionMid.textContent = 'Medium Priority';

    optionLow.value = 'Low';
    optionLow.textContent = 'Low Priority';

    optionMid.selected = true;

    icon.classList.add(`${currentPriority}-priority-icon`);

    selectBtn.append(optionHigh,optionMid,optionLow);
    selectContainer.append(icon, selectBtn);

    return selectContainer;
}

function createTask() {
    const container = new Element('div', 'add-task-container').htmlElement;

    const form = getForm();

    container.append(form);
    return container;
}

export default createTask;