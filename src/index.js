import './style.css';
import Element from './elementDOM';

const content = document.getElementById('content');

const test = new Element('h1', 'hello', 'ts');

test.htmlElement.textContent = 'hello!'
content.appendChild(test.htmlElement)
