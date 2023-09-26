import uniqid from 'uniqid'; // Used this package to generate unique Id's;

class Task {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
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
}

export default Task;