// login.js

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('user_type').value;

    // Basic validation
    if (username === '' || password === '' || userType === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Dummy authentication simulation
    console.log('Login Details:');
    console.log('Username/Email:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);

    // Show popup
    alert(`Login successful as ${userType}`);

    // Redirect to dashboard if user is Admin
    if (userType === 'admin') {
      window.location.href = 'admin.html';
    } else if (userType === 'donor') {
      window.location.href = 'fooddonordash.html';
    } else if (userType === 'recipient') {
      window.location.href = 'foodrecep.html';
    } else {
      alert(' Access to Dashboard is restricted.');
    }
  });
});
