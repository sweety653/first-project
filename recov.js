function recovery(event) {
    event.preventDefault();

    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const msg = document.getElementById('msg');

    if (!password || !password2) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Введите новый пароль!';
        return;
    }

    if (password.length < 6) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Пароль слишком короткий!';
        return;
    }

    if (password !== password2) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Пароли не совпадают!';
        return;
    }

    msg.style.color = '#00ff2a';
    msg.textContent = '✅ Пароль успешно изменён!';

    setTimeout(() => {
        window.location.href = 'signIn.html';
    }, 2000);
}

document.getElementById('recovForm').addEventListener('submit', recovery);
