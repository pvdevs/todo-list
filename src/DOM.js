import Element from './element-DOM';
import Task from './create-task';

const content = document.getElementById('content');


function createTaskElement(task) {
    const taskContainer = new Element('div','task').htmlElement;
    const taskInfo = new Element('div', 'task-info').htmlElement;
    const taskTitle = new Element('p','task-title').htmlElement;
    const taskDescription = new Element('p', 'task-description').htmlElement;
    const taskDueDate = new Element('p', 'task-due-date').htmlElement;
    const taskPriority = new Element('p', 'task-priority').htmlElement;
    const taskDoneBtn = new Element('button', 'task-done-btn').htmlElement;
    
    taskContainer.dataset.id = task.id; // Set the same task object identifier into the html
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskDueDate.textContent = task.dueDate;
    taskPriority.textContent = task.priority;

    taskInfo.append(taskDoneBtn, taskTitle, taskDescription, taskDueDate);
    taskContainer.append(taskInfo, taskPriority);
    content.appendChild(taskContainer);
    return taskContainer;
}

export default createTaskElement;