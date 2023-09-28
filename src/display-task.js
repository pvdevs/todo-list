import Element from './create-dom-element';
import {Task, findTask, tasks} from './tasks';

const content = document.getElementById('content');

function getTaskPriority(task){
    const taskPriority = new TaskPriority(`${task.priority}`);

    return taskPriority.priority;
}

class TaskPriority {
    constructor(priorityLevel){
        this._container = new Element('div', 'task-priority').htmlElement;
        this._text = new Element('p', 'task-priority-text').htmlElement;
        this._icon = new Element('div', 'task-priority-icon').htmlElement;

        this._text.textContent = `${priorityLevel} priority`;
        this._icon.classList.add(`${priorityLevel}-priority-icon`);

        this._text.textContent = this._text.textContent.charAt(0).toUpperCase() + this._text.textContent.slice(1);

        this._container.append(this._text, this._icon);
    }

    get priority() {
        return this._container;
    }
}

function displayTask(task) {
    const container = new Element('div','task').htmlElement;
    const title = new Element('p','task-title').htmlElement;
    const description = new Element('p', 'task-description').htmlElement;
    const dueDate = new Element('p', 'task-due-date').htmlElement;
    const doneBtn = new Element('button', 'task-done-btn').htmlElement;
    const taskPriority = getTaskPriority(task);
    const editBtn = new Element('p', 'task-edit-btn').htmlElement;

    container.dataset.id = task.id; // Set the same task object identifier into the html
    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    editBtn.textContent = 'Edit';

    container.append(doneBtn, title, description, dueDate, taskPriority, editBtn);
    content.appendChild(container);
    return container;
}

// How do we display the Task Update?


/* First do the add new task
function editTaskElement(taskId) {
    const task = findTask(taskId);
    const taskElement = document.querySelector([`data-id=${taskId}`]);
    const
}
*/



export default displayTask;