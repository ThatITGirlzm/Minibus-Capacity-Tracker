let count = 0
const maxCapacity = 14

const countEl = document.getElementById("count")
const statusEl = document.getElementById("status")

function updateStatus() {
    if (count >= maxCapacity) {
        statusEl.textContent = "Status: FULL"
        statusEl.className = "full"
    } else {
        statusEl.textContent = "Status: Available"
        statusEl.className = "available"
    }
}

function increment() {
    if (count < maxCapacity) {
        count++
        countEl.textContent = count
        updateStatus()
    }
}

function decrement() {
    if (count > 0) {
        count--
        countEl.textContent = count
        updateStatus()
    }
}

function reset() {
    count = 0
    countEl.textContent = count
    updateStatus()
}

