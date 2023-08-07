// Code Starts Here

let theme = localStorage.getItem("theme");

const themeToggle = document.getElementById("theme-toggle");

const enableDarkTheme = () => {
  document.body.classList.add("dark-theme");
  themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("theme", "dark-theme");
};

const disableDarkTheme = () => {
  document.body.classList.remove("dark-theme");
  themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("theme", null);
};

if (theme === "dark-theme") {
  enableDarkTheme();
}

themeToggle.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  if (theme !== "dark-theme") {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
});