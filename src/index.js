import './style.css';
import Element from './create-dom-element';
import createTaskElement from './display-task';
import Task from './create-task';

const content = document.getElementById('content');

const task = new Task('Buy my P.O 33 K.O','Buy as soon as possible to make the beats!','12/4','high'); //this will work through event listenner;

const test = createTaskElement(task);

content.appendChild(test);