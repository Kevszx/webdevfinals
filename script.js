document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting

        
        usernameError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        } else if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters long.';
            isValid = false;
        }

        
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        
        if (isValid) {
            alert('Login successful!');
            loginForm.reset(); // Clear form inputs
        }
    });
});
