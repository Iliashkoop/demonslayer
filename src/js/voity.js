function login() {
    let username = document.getElementById("login-name").value;
    let password = document.getElementById("login-pass").value;

    if (!username || !password) {
        alert("Введите логин и пароль!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Вход выполнен успешно!");
        localStorage.setItem("loggedInUser", username);
        window.location.href = "menu.html"; // Перенаправление на защищённую страницу
    } else {
        alert("Неверный логин или пароль!");
    }
}