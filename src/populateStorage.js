import { tasks, Task } from "./task";
import {taskTable, fillTasksTable} from './tasks-table';

const content = document.getElementById('content');

function checkStorage() {
    if (!localStorage.getItem('tasks')) {
        
        console.log('populatin'); // remove later

        populateStorage();
        content.appendChild(fillTasksTable())
      
    } else {
        
        console.log(localStorage.getItem('tasks'));
        
        console.log('not populatin'); // remove later
        
        setStyles();
        content.appendChild(fillTasksTable())
      }
}

function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function setStyles() {

    tasks.length = 0;
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
    
    updatedTasks.forEach(task => tasks.push(task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function populateStorage() {
    const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','2024-02-14','high');
    const task2 = new Task('Learn DJ STUF!','Learn to make the beats!','2024-02-14','high'); // this will work through event listenner;
    tasks.push(task);
    tasks.push(task2);

    localStorage.setItem('tasks',JSON.stringify(tasks)); // To set tasks in the beginning of events
    
    console.log(localStorage.getItem('tasks'));
    setStyles();
}

export {checkStorage, updateStorage};
