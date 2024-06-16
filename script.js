function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const feedback = document.getElementById('passwordFeedback');
    
    let strength = 'Weak';
    let feedbackText = 'Your password is too weak. Consider the following:';
    const tips = [
        'Use at least 8 characters.',
        'Include both upper and lower case letters.',
        'Include at least one number.',
        'Include at least one special character (e.g., !, @, #, $).'
    ];

    if (passwordInput.length >= 8) {
        strength = 'Medium';
        feedbackText = 'Your password is decent but can be improved:';
    }

    if (/[A-Z]/.test(passwordInput) && /[a-z]/.test(passwordInput) && /\d/.test(passwordInput) && /[\W_]/.test(passwordInput)) {
        strength = 'Strong';
        feedbackText = 'Your password is strong.';
        tips.length = 0; g
    }

    feedback.innerHTML = `<p>Strength: ${strength}</p><p>${feedbackText}</p>`;
    if (tips.length > 0) {
        feedback.innerHTML += `<ul>${tips.map(tip => `<li>${tip}</li>`).join('')}</ul>`;
    }
}

function generatePassword() {
    const generatedPassword = document.getElementById('generatedPassword');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    generatedPassword.textContent = `Generated Password: ${password}`;
}