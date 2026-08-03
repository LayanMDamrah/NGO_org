const toggleBtn = document.getElementById("theme-toggle");
const icon = document.querySelector("#theme-toggle i");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {
        localStorage.setItem("theme", "light");

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


