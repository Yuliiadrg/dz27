// Мінімум
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), 
// і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
const car = {
    manufacturer: "BMW Motor Corporation",
    modelOfCar: "M4", //OR 'model-of-car': 'M4' it's also similar to previous, OR [modelOfCar]: 'M4'
    yearOfManufacture: 2020,
    averageSpeed: "250km/h",
    fuelTankVolume: 50,
    averageFuelConsumption: 5.8,
    drivers: ["Oleg", "Yuliia"],
}
console.log(car);
car.driver = "Dmitriy"
console.log(car["driver"])
console.log("driver" in car)
// /* Норма
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// - Для виведення часу на екран.
// - Зміни часу на передану кількість секунд.
// - Зміни часу на передану кількість хвилин.
// - Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
// а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/
function isDefaultNumber(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
let currentTime = {
    curentDate: new Date(),
    showMyCurentTime: function() {
        document.querySelector('.display--hour').innerHTML = isDefaultNumber(this.curentDate.getHours()) + ':';
        document.querySelector('.display--minutes').innerHTML = isDefaultNumber(this.curentDate.getMinutes()) + ':';
        document.querySelector('.display--seconds').innerHTML = isDefaultNumber(this.curentDate.getSeconds());
    },
    getChangedTime: function () {
        let hourInput = document.querySelector('#change-hour');
        let minutesInput = document.querySelector('#change-minutes');
        let secondsInput = document.querySelector('#change-seconds');
        let changeOnSec = 0;

        if (hourInput.value) {
            changeOnSec += 3600 * parseInt(hourInput.value);
        }
        if (minutesInput.value) {
            changeOnSec += 60 * parseInt(minutesInput.value);
        }
        if (secondsInput.value) {
            changeOnSec += parseInt(secondsInput.value);
        }

        let newTimestamp = this.curentDate.getTime() + changeOnSec * 1000;
        return new Date(newTimestamp);
    },
    showNewTime: function (date) {
        document.querySelector('.new--hour').innerHTML = isDefaultNumber(date.getHours()) + ':';
        document.querySelector('.new--minute').innerHTML = isDefaultNumber(date.getMinutes()) + ':';
        document.querySelector('.new--second').innerHTML = isDefaultNumber(date.getSeconds());
    }
};

document.querySelector('.btn').addEventListener("click",
    function (e) {
    e.preventDefault();
    currentTime.showNewTime(currentTime.getChangedTime());
    }
    );
currentTime.showMyCurentTime();