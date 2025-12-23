let count = 0;
let capacity = 14;

let countEl = document.getElementById("count-el");
let statusEl = document.getElementById("status-el");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", function () {
    if (count < capacity) {
        count++;
        countEl.textContent = count;
        statusEl.textContent = "Available";
    } else {
        statusEl.textContent = "BUS FULL";
    }
});

decrementBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countEl.textContent = count;
        statusEl.textContent = "Available";
    }
});

resetBtn.addEventListener("click", function () {
    if (confirm("Start new trip?")) {
        count = 0;
        countEl.textContent = 0;
        statusEl.textContent = "Available";
    }
});
statusEl.className = "available";
// when full:
statusEl.className = "full";

