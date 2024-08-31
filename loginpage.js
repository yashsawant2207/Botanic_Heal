// Show Login Form
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('visible');
    document.getElementById('signup-form').classList.remove('visible');
    document.getElementById('signup-form').classList.add('hidden');
}

// Show Signup Form
function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('visible');
    document.getElementById('login-form').classList.remove('visible');
    document.getElementById('login-form').classList.add('hidden');
}

// Dummy Login Function
function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Logged in with \nEmail: ${email} \nPassword: ${password}`);
    return false;
}

// Dummy Signup Function
function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    alert(`Signed up with \nUsername: ${username} \nEmail: ${email} \nPassword: ${password}`);
    return false;
}
