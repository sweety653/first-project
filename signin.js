function signin(event) {
    event.preventDefault();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const msg      = document.getElementById('msg');

    if (!email || !password) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Заполни все поля!';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user  = users.find(u => u.email === email && u.password === password);

    if (!user) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Неверный email или пароль!';
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));

    msg.style.color = '#16a34a';
    msg.textContent = '✅ Добро пожаловать, ' + user.name + '!';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

document.querySelector('.form-In').addEventListener('submit', signin);

document.querySelector('.btn1').addEventListener('click', () => {
    window.location.href = 'recovery.html';
});
