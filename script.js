// document.addEventListener("DOMContentLoaded", function() {
//     const msg = document.getElementById("t1-msg")
//     msg.innerHTML = "Hello, World!";
//
//
//
//
//
//
// })
/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
document.getElementById("t1-msg").innerHTML = "Hello, World!";
/*  
/*
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/

const t2sts = document.getElementById("t2-status");
const button = document.getElementById("t2-btn");
button.addEventListener("click", function() {
    t2sts.innerHTML = "You clicked the button!"
});

/*
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
const t3loadQuote = document.getElementById("t3-loadQuote");
const t3quote = document.getElementById("t3-quote");
const t3author = document.getElementById("t3-author");
t3loadQuote.addEventListener("click", function() {
fetch("https://dummyjson.com/quotes/random")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        return response.json();
    })
    .then(function (json) {
        t3quote.innerHTML = json.quote;
        t3author.innerHTML = json.author;

    })
    .catch(function (error) {
        console.error(error);
    })
})


/*


=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

const t4temp = document.getElementById("t4-temp");
const t4hum = document.getElementById("t4-hum");
const t4wind = document.getElementById("t4-wind")

const t4loadWx = document.getElementById("t4-loadWx");
t4loadWx.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=e720b4ca17b718918a2f3c3c31ecc166&units=metric")
        .then(function (response){
            if(!response.ok){
                throw new Error("HTTP " + response.status);
            }
            return response.json();
        })
        .then(function (json) {
            t4temp.innerHTML = json.main.temp;
            t4hum.innerHTML = json.main.humidity;
            t4wind.innerHTML = json.wind.speed;
        })
        .catch(function (error) {
            console.log(error);
    })
})

