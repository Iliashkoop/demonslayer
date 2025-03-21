function register() {
    let username = document.getElementById("login-name").value;
    let password = document.getElementById("login-pass").value;
    
    if (!username || !password) {
        alert("Введите логин и пароль!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.find(user => user.username === username)) {
        alert("Такой пользователь уже существует!");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация успешна!");
}