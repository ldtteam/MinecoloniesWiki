const userPrefers = getComputedStyle(document.documentElement).getPropertyValue("content");

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

if (theme === "dark") {
  updateTheme("dark", false);
} else if (theme === "light") {
  updateTheme("light", false);
} else if (userPrefers === "dark") {
  updateTheme("dark");
} else {
  updateTheme("light");
}

function updateTheme(theme, persist) {
  document.documentElement.setAttribute("data-theme", theme);
  Array.from(document.getElementsByClassName("theme-toggle")).forEach((f) => {
    if (theme === "light") {
      f.classList.add("fa-sun");
      f.classList.remove("fa-moon");
    } else if (theme === "dark") {
      f.classList.add("fa-moon");
      f.classList.remove("fa-sun");
    }
  });
  if (persist ?? true) {
    window.localStorage.setItem("theme", theme);
  }
}

function switchTheme() {
  let currentMode = document.documentElement.getAttribute("data-theme");
  if (currentMode === "dark") {
    themeModeSet("light");
  } else if (currentMode === "light") {
    themeModeSet("dark");
  } else {
    themeModeSet("light");
  }
}
