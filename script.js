var btn = document.querySelector("button")
var input = document.querySelector("input")

var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

btn.addEventListener("click", () => {
    if (!input.value.match(mailFormat))
        input.classList.add("active")
    else
        input.classList.remove("active")
})