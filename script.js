var btn = document.querySelector("button")
var input = document.querySelector("input")

var mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener("click", () => {
    if (input.value.match(mailFormat) && input.value != "")
        input.classList.remove("active")
    else
        input.classList.add("active")
})