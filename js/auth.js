function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", username);
  window.location.href = "apolitical.html";
}

function protectPage() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
