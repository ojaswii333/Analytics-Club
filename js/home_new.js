window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader")

    preloader.style.opacity = "0"

    setTimeout(() => {
        preloader.style.display = "none"
    }, 600)

})

// Event counter 
const eventDate = new Date("2026-03-21T10:00:00").getTime()

function updateValue(id, value) {

    const el = document.getElementById(id)

    if (el.innerText != value) {

        el.style.transform = "scale(1.2)"

        setTimeout(() => {
            el.innerText = value
            el.style.transform = "scale(1)"
        }, 150)

    }

}

function updateCountdown() {

    const now = new Date().getTime()

    const distance = eventDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    updateValue("days", days)
    updateValue("hours", hours)
    updateValue("minutes", minutes)
    updateValue("seconds", seconds)
}

setInterval(updateCountdown, 1000)
updateCountdown()
