let pickachuIcon = document.querySelector("#pickachuIcon");
var jokes = [
    "I ate a clock yesterday, it was very time-consuming.",
    "A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.",
    "Employee of the month is a good example of how somebody can be both a winner and a loser at the same time.",
    "I don’t have a girlfriend, but I know a girl that would get really mad if she heard me say that.",
    "Relationships are great, but have you ever had stuffed crust pizza?",
    "The worst time to have a heart attack is during a game of charades.",
    "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
    "I have a friend. He keeps trying to convince me he’s a compulsive liar, but I don’t believe him.",
];


// Pickachu opens the menu to select 

let icons = document.querySelectorAll(".icon");
console.log(icons);
pickachuIcon.addEventListener("click", () => {
    console.log("clicked");
    pickachuIcon.classList.toggle("animation");
    for (const icon of icons) {
        console.log();
        icon.classList.toggle("hideIcon");

        // pickachuIcon.classList.add("hideIcon");
    }
});


pickachuIcon.addEventListener("mouseover", () => {
    infoTitle.innerText = "You can click me and select option";
})
// Response screen after selecting the Option


let closeBtn = document.querySelector(".closeBtn");
let responseContainer = document.querySelector(".responseContainer");
closeBtn.addEventListener("click", () => {
    responseContainer.classList.toggle("responseContainerHide");
})





// Joke will display after clicking joke icon

let jokeIcon = document.querySelector("#jokeIcon");
let result = document.querySelector(".result");
jokeIcon.addEventListener("click", () => {
    let randomNUmber = Math.floor(Math.random() * 8);
    console.log(randomNUmber);
    let joke = jokes[randomNUmber];
    result.innerText = joke;
    responseContainer.classList.toggle("responseContainerHide");
    console.log(joke);
});

let infoTitle = document.querySelector(".infoTitle");
jokeIcon.addEventListener("mouseover", () => {

    infoTitle.innerText = "Pickachu,tell me a joke";
})



// Weather  text will be displayed after clicking the weather icon

let weather = document.querySelector("#weather");

weather.addEventListener("click", () => {
    result.innerText = "The weather really just kind of sucks here, and I know you wanted the weather at your location, but that's life for you.";
    responseContainer.classList.toggle("responseContainerHide");
})



weather.addEventListener("mouseover", () => {
    infoTitle.innerText = "Pickachu,What's the weather Today?";
})



// Show the time 

let clock = document.querySelector("#clock");
console.log(clock);



clock.addEventListener("click", () => {
    console.log("clicked");
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    result.innerText = `Now the time is:${time}`;
    responseContainer.classList.toggle("responseContainerHide");
})

clock.addEventListener("mouseover", () => {
    infoTitle.innerText = "Pickachu,What's the time now?";
})


//show the date
let calendar = document.querySelector("#calendarIcon");

calendar.addEventListener("click", () => {
    console.log("clicked");
    let today = new Date();
    let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    result.innerText = `Today's Date is:${date}`;
    responseContainer.classList.toggle("responseContainerHide");
})

calendar.addEventListener("mouseover", () => {
    infoTitle.innerText = "Pickachu,can you tell today's date?";
})




