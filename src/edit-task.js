import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import { compareAsc, format } from 'date-fns';
import {displayTask} from './display-task';
import {taskTable, fillTasksTable} from './tasks-table';
import {createTask, getForm, formIsInvalid} from './create-task';
import { checkStorage, updateStorage } from './populateStorage';

const titles = document.querySelectorAll('.task-title');

document.addEventListener('click', editBtnListener)

function editBtnListener(e) {
    
    if (e.target.classList.contains('task-edit-btn')){

        const taskId = e.target.parentNode.parentNode.dataset.id;
        editTask(taskId);

    }

}

function editTask(id) {
    const taskContainer = document.querySelector(`[data-id = ${id}]`);
    const task = findTask(id);
    const editTask = createTask(task);

    taskContainer.replaceChild(editTask, taskContainer.firstChild);

    saveChanges(task);
}

function saveChanges(task) {
    const btn = document.getElementById('save-btn');

    btn.addEventListener('click', e => {
        const taskContainer = document.querySelector(`[data-id = ${task.id}]`);

        const title = document.querySelector('.title-input');
        const description = document.querySelector('.description-textarea');
        const dueDate = document.querySelector('.add-task-date');
        const priority = document.querySelector('.select-priority-btn');

        if(formIsInvalid()) console.log('invalid');
        else {
            task.title = title.value;
            task.description = description.value;
            task.dueDate = dueDate.value;
            task.priority = priority.value;
    
            updateStorage();
            checkStorage()
        }
    });
}

function cancelChanges(task) {
    const btn = document.getElementById('cancel-btn');

    btn.addEventListener('click')
}

export default editBtnListener;