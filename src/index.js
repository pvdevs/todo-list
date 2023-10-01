import './style.css';
import Element from './create-dom-element';
import {displayTask} from './display-task';
import {taskTable, fillTasksTable} from './tasks-table';
import {Task, findTask, tasks} from './task';
import {getAddTaskButton, createTask} from './create-task';
import editBtnListener from './edit-task';
import populateTasks from './populateStorage';



const content = document.getElementById('content');

const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','2024-02-14','high');
const task2 = new Task('Learn DJ STUF!','Learn to make the beats!','2024-02-14','high'); //this will work through event listenner;

tasks.push(task);
tasks.push(task2);

content.appendChild(taskTable()); // This starts the task table

content.appendChild(fillTasksTable()); // delete later
content.appendChild(getAddTaskButton());

//populateTasks();
