import './style.css';
import Element from './element-DOM';
import createTaskElement from './DOM';
import Task from './create-task';

const content = document.getElementById('content');

const task = new Task('titleTest','descTest','dueDateTest','priorityTest'); //this will work through event listenner;

const test = createTaskElement(task);

content.appendChild(test);