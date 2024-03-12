// date
const timestamp = Date.now();
    const convertedDateTimeDisplay = document.getElementById('convertedDateTime');

    // Convert the timestamp to a Date object
    const date = new Date(timestamp);

    // Format the date and time in the Berlin timezone
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true,
        timeZone: 'Europe/Berlin' 
    };
    const formattedDateTime = date.toLocaleString('en-US', options);

    // Get the timezone abbreviation for Berlin
    const timeZoneAbbr = Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone: 'Europe/Berlin' }).formatToParts().find(part => part.type === 'timeZoneName').value;

    // Display the formatted date and time along with the timezone
    convertedDateTimeDisplay.textContent = `${formattedDateTime}, ${timeZoneAbbr}`;



// greetings

const greetButtonEl = document.querySelector("#hiButton");
const nameEl = document.querySelector("#name");

greetButtonEl.addEventListener("click", () => {
  const yourName = prompt("Please enter your name: ");
  nameEl.textContent = " " + yourName;
});

// colorFlipper

const colorChangeEl = document.querySelector("#colorFlipper");

colorChangeEl.addEventListener("click", () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  colorChangeEl.style.backgroundColor = color;
});

// Counter

const counterDisplayEl = document.querySelector("#counterDisplay");
const plusButtonEl = document.querySelector("#counterAdd");
const minusButtonEl = document.querySelector("#counterSub");

let count = 0;

plusButtonEl.addEventListener("click", add);
minusButtonEl.addEventListener("click", sub);

function add() {
  count++;
  counterDisplayEl.textContent = count;
}

function sub() {
  count--;
  counterDisplayEl.textContent = count;
}

// To-do list

const inputEl = document.querySelector("#todoInputBar");
addTaskButtonEl = document.querySelector("#addToListButton");
const listEl = document.querySelector("#list");

addTaskButtonEl.addEventListener(
  "click",
  (addTask = () => {
    if (inputEl.value !== "") {
      const newTask = document.createElement("li");
      listEl.appendChild(newTask);
      newTask.textContent = inputEl.value;
    }
    inputEl.value = "";
  })
);

// Modal

const openModalButtonEl = document.querySelector("#openModalButton");
const modalEl = document.querySelector(".modal");

openModalButtonEl.addEventListener("click", () => {
  console.log("clicked");
  modalEl.classList.add("open");
});

modalEl.addEventListener("click", () => {
  modalEl.classList.remove("open");
});

// Slider

const data = [
  {
    image: "mush1.png",
    name: "mushroom one",
  },
  {
    image: "mush2.png",
    name: "mushroom two",
  },
  {
    image: "mush3.png",
    name: "mushroom three",
  },
];

const slidesContainer = document.querySelector("#slidesContent");
const nextButtonEl = document.querySelector("#nextSlide");
const prevButtonEl = document.querySelector("#prevSlide");

const makeMushroomSlideHtml = (shroom) => {
  return `
            <div class="shroomCard">
                <img src="${shroom.image}" width="180"/>
                <h4>${shroom.name}</h4>
            </div>
        `;
};

let currentShroom = 0;

const jumpNextSlide = () => {
  if (currentShroom < data.length - 1) {
    currentShroom += 1;
    updateSlide();
  }
};

const jumpPrevSlide = () => {
  if (currentShroom > 0) {
    currentShroom -= 1;
    updateSlide();
  }
};

nextButtonEl.addEventListener("click", jumpNextSlide);
prevButtonEl.addEventListener("click", jumpPrevSlide);

const updateSlide = () => {
  let markup = makeMushroomSlideHtml(data[currentShroom]);
  slidesContainer.innerHTML = markup;
};

updateSlide();


//