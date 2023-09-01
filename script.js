// JavaScript code to change the text color when a button is clicked
const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', () => {
    text.style.color = 'red';
});
