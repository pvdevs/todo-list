import Element from './create-dom-element';
import createTaskElement from './display-task';
import {Task, findTask, tasks} from './tasks';

const editBtns = document.querySelectorAll('.task-edit-btn');

function editBtnEvent() {
    editBtns.forEach(btn => {
        btn.addEventListener('click', e => console.log('works'));
    })
}

export default editBtnEvent