const navToggle = document.getElementById("checkbox3")
const navMobile = document.querySelector(".navbar_mobile")
const container = document.querySelector(".website_container")

navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open")
    container.classList.toggle("menu_open")
})