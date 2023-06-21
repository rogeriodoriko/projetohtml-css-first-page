const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Verificar se o modo escuro está ativado no localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Função para aplicar o modo escuro
function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "true");
}

// Função para desativar o modo escuro
function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
}

// Verificar a preferência do usuário e aplicar o modo escuro
if (isDarkMode) {
  enableDarkMode();
}

// Alternar entre os modos ao clicar no botão
darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
