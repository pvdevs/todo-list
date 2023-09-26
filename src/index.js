import './style.css';
import Element from './create-dom-element';
import createTaskElement from './display-task';
import Task from './create-task';

const content = document.getElementById('content');

const task = new Task('titleTest','descTest','dueDateTest','high-priority'); //this will work through event listenner;

const test = createTaskElement(task);

content.appendChild(test);