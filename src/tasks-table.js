import Element from "./create-dom-element";

function taskTable() {
    const tasksContainer = new Element('div', 'tasks-container').htmlElement;

    return tasksContainer;
}

export default taskTable;