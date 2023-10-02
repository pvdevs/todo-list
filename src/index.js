import './style.css';
import Element from './create-dom-element';
import {displayTask} from './display-task';
import {taskTable, fillTasksTable} from './tasks-table';
import {Task, findTask, tasks} from './task';
import {getAddTaskButton, createTask} from './create-task';
import editBtnListener from './edit-task';
import {checkStorage} from './populateStorage';

const content = document.getElementById('content');
content.appendChild(taskTable()); // This starts the task table

const tasksContainer = document.querySelector('.tasks-container');

checkStorage();

//content.appendChild(fillTasksTable()); // delete later
//tasksContainer.appendChild(getAddTaskButton());

