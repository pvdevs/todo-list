import './style.css';
import Element from './create-dom-element';
import {displayTask, fillTasksTable} from './display-task';
import taskTable from './tasks-table';
import {Task, findTask, tasks} from './task';
import {createTask} from './create-task';
import editTask from './edit-task';

const content = document.getElementById('content');

content.appendChild(taskTable()); // This starts the task table

const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','12/4','high'); //this will work through event listenner;
const task2 = new Task('Learn DJ STUF!','Learn to make the beats!','2024-02-14','high'); //this will work through event listenner;

tasks.push(task2); // delete later
content.appendChild(fillTasksTable()); // delete later

// Move this to separate module later
/*
document.body.addEventListener('click', e => {
    editTask(e);
});
*/
document.body.addEventListener('click', editTask);


//const test2 = createTask(task2);  comment this to avoid conflicts while build edit-tasks module
//content.appendChild(test2);