import './style.css';

const content = document.getElementById('content');
const hello = document.createElement('h3');

hello.classList.add('hello');
hello.textContent = 'Hello';

content.appendChild(hello);