function register(event) {
    event.preventDefault();
    const name     = document.getElementById('name').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg      = document.getElementById('msg');

    if (!name || !email || !password) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Заполни все поля!';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(u => u.email === email)) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Этот email уже зарегистрирован!';
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify({ name, email }));

    msg.style.color = '#16a34a';
    msg.textContent = '✅ Добро пожаловать, ' + name + '!';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}
