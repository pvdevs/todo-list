import './style.css';
import Element from './create-dom-element';
import createTaskElement from './display-task';
import {Task, editTask, findTask, tasks} from './tasks';

const content = document.getElementById('content');

const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','12/4','high'); //this will work through event listenner;

const task2 = new Task('Learn DJ STUF!','Learn to make the beats!','10/4','high'); //this will work through event listenner;

tasks.push(task)
tasks.push(task2)

editTask(task2.id, 'Testing Title', 'ayo');

console.log(tasks);

const test = createTaskElement(task);
content.appendChild(test);