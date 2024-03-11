// greetings

const greetButtonEl = document.querySelector('#hiButton')
const nameEl = document.querySelector('#name')

greetButtonEl.addEventListener('click', () => {
    const yourName = prompt('Please enter your name: ');
    nameEl.textContent = " " + yourName
} )

// colorFlipper

const colorChangeEl = document.querySelector('#colorFlipper')

colorChangeEl.addEventListener('click', () => {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i=0; i< 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    colorChangeEl.style.backgroundColor = color

})

// Counter

const counterDisplayEl = document.querySelector('#counterDisplay');
const plusButtonEl = document.querySelector('#counterAdd');
const minusButtonEl = document.querySelector('#counterSub');

let count = 0;

plusButtonEl.addEventListener('click', add);
minusButtonEl.addEventListener('click', sub);

function add() {
    count++;
    counterDisplayEl.textContent = count;
}

function sub() {
    count--;
    counterDisplayEl.textContent = count;
}


// To-do list

const inputEl = document.querySelector('#todoInputBar');
addTaskButtonEl = document.querySelector('#addToListButton')
const listEl = document.querySelector('#list')

addTaskButtonEl.addEventListener('click', addTask = () => {
   if (inputEl.value !== "" ) {
        const newTask = document.createElement('li')
        listEl.appendChild(newTask);
        newTask.textContent = inputEl.value
   }
   inputEl.value = ""
});

// Modal

const openModalButtonEl = document.querySelector('#openModalButton')
const modalEl = document.querySelector(".modal")

openModalButtonEl.addEventListener('click', () => {
    console.log('clicked')
    modalEl.classList.add('open');
} )

modalEl.addEventListener('click', () => {
    modalEl.classList.remove('open');
} )