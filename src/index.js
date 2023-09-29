import './style.css';
import Element from './create-dom-element';
import displayTask from './display-task';
import {Task, findTask, tasks} from './tasks';
import createTask from './create-task';


const content = document.getElementById('content');

const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','12/4','high'); //this will work through event listenner;

const task2 = new Task('Learn DJ STUF!','Learn to make the beats!','12/04/2024','high'); //this will work through event listenner;

tasks.push(task); // delete later
tasks.push(task2); // delete later
console.log(tasks); // delete later

// Move this to separate module later
document.body.addEventListener('click', e => {
    if( e.target.classList.contains('task-edit-btn')) {
        console.log('works');
    }
})
//
const test = displayTask(task);
const test2 = createTask(task2);

content.append(test,test2);