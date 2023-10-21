
let arr = [
    {
        image: "./assets/img/Cloud.png",
        day: "sturday",
        degree: "22 ْ C"
    },
    {
        image: "./assets/img/rain.png",
        day: "sunday",
        degree: "40 ْ C"
    },
    {
        image: "./assets/img/RainThunder.png",
        day: "monday",
        degree: "28 ْ C"
    },
    {
        image: "./assets/img/Snow.png",
        day: "tuesday",
        degree: "28 ْ C"
    },
    {
        image: "./assets/img/sun.png",
        day: "wednesday",
        degree: "44 ْ C"
    },
    {
        image: "./assets/img/SunCloud.png",
        day: "thursday",
        degree: "30 ْ C"
    },
]
const images = document.querySelectorAll('.img-card');
const days = document.querySelectorAll('.day');
const temps = document.querySelectorAll('.temp');
let index = 0;
let randomNumber = Math.floor(Math.random() * 6);
document.getElementById('img-head').src = arr[randomNumber].image;
document.getElementById('temp-head').textContent = arr[randomNumber].degree;
document.getElementById('day-head').textContent = arr[randomNumber].day;
for (let i = randomNumber + 1; i < arr.length; i++) {
    images[index].src = arr[i].image;
    days[index].textContent = arr[i].day;
    temps[index].textContent = arr[i].degree;
    index++;
}
for (let i = 0; i < randomNumber; i++) {
    images[index].src = arr[i].image;
    days[index].textContent = arr[i].day;
    temps[index].textContent = arr[i].degree;
    index++;
}




