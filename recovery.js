function recovery(event) {
    event.preventDefault(); // Останавливаем перезагрузку

    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg');

    if (!email) {
        msg.style.color = '#dc2626';
        msg.textContent = '⚠️ Введите адрес электронной почты!';
        return;
    }

    msg.style.color = '#00ff2a';
    msg.textContent = '✅ Ссылка отправлена на ' + email;

    setTimeout(() => {
        window.location.href = 'recov.html'; // Или куда вы хотите отправить пользователя
    }, 2000);
}

// Привязываем функцию к форме
document.getElementById('recoveryForm').addEventListener('submit', recovery);
