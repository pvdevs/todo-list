// This module will contain all the tasks
import uniqid from 'uniqid'; // Used this package to generate unique Id's;

// Create new Tasks
class Task {
    constructor(title, description, dueDate, priority, project) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._project = project;
        this._id = uniqid();
    }

    get id() {
        return this._id;
    }
    
    get title() {
        return this._title;
    }
    set title(value) {
        // validation here, prob.
        this._title = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        // validation here, prob.
        this._description = value;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        // validation here, prob.
        this._dueDate = value;
    }
    
    get priority() {
        return this._priority;
    }
    set priority(value) {
        // validation here, prob.
        this._priority = value;
    }
    
    get project() {
        return this_.project;
    }
    set project(value) {
        // validation here, prob.
        this._project = value;
    }

    toJSON(){ //need to review, projects must always have a value to go here
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            id: this.id
        }
    }
}

// Edit Task // Still thinking about this Feature, it may be better if we change directly with findtask, with DOM, that way we can set each info equal to the textContent;

// Find Task
function findTask(taskId){
    const foundTask = tasks.find(task => task.id === taskId);
    return foundTask;
}

// Tasks
const tasks = [];

export {Task, findTask, tasks}