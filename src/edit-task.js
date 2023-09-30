import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import { compareAsc, format } from 'date-fns';
import {displayTask, fillTasksTable} from './display-task';
import taskTable from './tasks-table';
import {createTask, getForm} from './create-task';

const titles = document.querySelectorAll('.task-title');

document.addEventListener('click', editBtnListener)

function editBtnListener(e) {
    
    if (e.target.classList.contains('task-edit-btn')){

        const taskId = e.target.parentNode.dataset.id;
        editTask(taskId);

    }

}

function editTask(id) {
    const taskContainer = document.querySelector(`[data-id = ${id} ]`);
    const task = findTask(id);

    const editTask = createTask(task);

    console.log(taskContainer);

    taskContainer.parentNode.replaceChild(editTask,taskContainer);
}



export default editBtnListener;