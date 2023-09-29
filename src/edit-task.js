import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import { compareAsc, format } from 'date-fns';
import {displayTask, fillTasksTable} from './display-task';
import taskTable from './tasks-table';
import {createTask, getForm} from './create-task';

const titles = document.querySelectorAll('.task-title');



function editTask(e) {

    if(e.target.classList.contains('task-title')) {

        const parentId = e.target.parentNode.dataset.id;
        const taskContainer = document.querySelector(`[data-id=${parentId}]`).parentNode;
        const task = findTask(parentId);

        clearTask(taskContainer);

        const form = getForm(task);
        taskContainer.parentNode.appendChild(form);
        console.log(taskContainer); //delete

        document.addEventListener('click', (ev) => {
            // Your code here, including the btnEvents() function.
            if(ev.target.id === 'save-btn'){
                saveEditBtnEvent(parentId);
            }
        });
        return taskContainer;
        
    }

}

function displayEditedTask(task,parentContainer) {
    parentContainer.remove();
    displayTask(task)
}

function saveEditBtnEvent(id) {
    const saveBtn = document.getElementById('save-btn');

    saveBtn.addEventListener('click', e => {

        const title = document.getElementById('title-input').value;
        const description = document.getElementById('description-textarea').value;
        const dueDate = document.querySelector('.add-task-date').value;
        const priority = document.querySelector('.select-priority-btn').value;
        ////
        const thisTask = findTask(id);
        const taskContainer = document.querySelector(`[data-id=${id}]`).parentNode;

        thisTask.title = title;
        thisTask.description = description;
        thisTask.dueDate = dueDate;
        thisTask.priority = priority;

        console.log(thisTask);
        const editedTask = displayTask(thisTask);

        displayEditedTask(thisTask,taskContainer)
        return editedTask;
    })
}


function clearTask(taskContainer) {
    while(taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.lastChild);
    }
}

export default editTask;
