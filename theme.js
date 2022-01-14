const themeToggler = document.querySelector("#theme-toggler");

window.addEventListener("load", () => {
  if(localStorage.getItem("rps:theme") == "dark"){
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark")
  }
})

themeToggler.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("rps:theme", "light")
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("rps:theme", "dark")
  }
});
