import { tasks } from "./task";


function populateTasks() {
    localStorage.setItem('tasks',JSON.stringify(tasks)); // To set tasks in the beginning of events


    tasks.length = 0
    const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
    updatedTasks.forEach(task => tasks.push(task));
}

export default populateTasks;
