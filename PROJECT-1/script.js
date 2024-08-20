const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const container = document.querySelector('.container');

switchToRegister.addEventListener('click', () => {
    container.classList.add('switch');
});

switchToLogin.addEventListener('click', () => {
    container.classList.remove('switch');
});