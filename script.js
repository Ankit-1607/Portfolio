function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Select the toggle button and theme-dependent elements
const toggleButton = document.getElementById('mode-toggle');
const linkedinIcons = document.querySelectorAll(".linkedin-icon");
const githubIcon = document.querySelector(".github-icon");
const arrowIcons = document.querySelectorAll(".arrow-icon");
const emailIcon = document.querySelector(".email-icon");
const themeIcon = document.querySelector(".hamburger-theme");
const checkMarkIcons = document.querySelectorAll(".checkmark-icon");

// Asset mappings for themes
const assets = {
  dark: {
    toggleButton: "./assets/sun.png",
    linkedin: "./assets/linkedin_dark_theme.png",
    github: "./assets/github_dark_theme.png",
    arrow: "./assets/arrow_dark.png",
    email: "./assets/email_dark.png",
    themeIcon: "./assets/sun.png",
    checkMark: "./assets/checkmark_dark_theme.png"
  },
  light: {
    toggleButton: "./assets/moon.png",
    linkedin: "./assets/linkedin.png",
    github: "./assets/github.png",
    arrow: "./assets/arrow.png",
    email: "./assets/email.png",
    themeIcon: "./assets/moon.png",
    checkMark: "./assets/checkmark.png"
  },
};

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  // Fetch saved theme or set default as dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateAssets(savedTheme);
});


toggleButton.addEventListener("click", () => toggleTheme());
themeIcon.addEventListener("click", () => toggleTheme())

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateAssets(newTheme);
}

function updateAssets(theme) {
  console.log("Theme updated to:", theme);

  const themeAssets = assets[theme];

  toggleButton.src = themeAssets.toggleButton;

  linkedinIcons.forEach((icon) => {
    icon.src = themeAssets.linkedin;
  });

  arrowIcons.forEach((icon) => {
    icon.src = themeAssets.arrow;
  });

  checkMarkIcons.forEach((icon) => {
    icon.src = themeAssets.checkMark;
  })

  githubIcon.src = themeAssets.github;
  emailIcon.src = themeAssets.email;
  themeIcon.src = themeAssets.themeIcon;
}
