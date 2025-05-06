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
      window.location.href = 'dashboard.html';
    } else {
      // If not admin, you can redirect to a different page if you want
      // Example: window.location.href = 'home.html';
      alert('You are not Admin. Access to Dashboard is restricted.');
    }
  });
});
