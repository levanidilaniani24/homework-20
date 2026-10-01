const clock = document.querySelector("#clock");


function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;


    if (hours === 0) {
        hours = 12;
    }


    hours = String(hours).padStart(2, "0");


    clock.textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();

setInterval(updateClock, 1000);

const images = [
    "./images/image1.png",
    "./images/image2.png",
    "./images/image3.png"
];


const sliderImage =
    document.querySelector("#slider-image");


let currentIndex = 0;

let sliderInterval;

function showSlide() {

    sliderImage.src =
        images[currentIndex];
}


function nextSlide() {

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }


    showSlide();
}

function startSlider() {

    sliderInterval = setInterval(
        nextSlide,
        5000
    );
}


showSlide();

startSlider();

sliderImage.addEventListener(
    "mouseenter",
    () => {

        clearInterval(
            sliderInterval
        );

    }
);


sliderImage.addEventListener(
    "mouseleave",
    () => {

        startSlider();

    }
);

const targetDate =
    new Date("2027-08-14T20:00:00");


const daysElement =
    document.querySelector("#days");

const hoursElement =
    document.querySelector("#hours");

const minutesElement =
    document.querySelector("#minutes");




function updateCountdown() {

    const now = new Date();


    const difference =
        targetDate - now;


    if (difference <= 0) {

        daysElement.textContent = "0";

        hoursElement.textContent = "0";

        minutesElement.textContent = "0";

        return;
    }

    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference /
            (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference /
            (1000 * 60)) % 60
    );


    daysElement.textContent =
        days;

    hoursElement.textContent =
        hours;

    minutesElement.textContent =
        minutes;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
