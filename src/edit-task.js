import Element from './create-dom-element';
import {Task, findTask, tasks} from './task';
import { compareAsc, format } from 'date-fns';
import {displayTask, fillTasksTable} from './display-task';
import taskTable from './tasks-table';
import {createTask, getForm} from './create-task';

const titles = document.querySelectorAll('.task-title');

document.addEventListener('click', editTask)

function editTask(e) {
    if (e.target.classList.contains('task-edit-btn')){
        console.log(e.target);
    }

}

export default editTask;