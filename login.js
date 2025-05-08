
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const userType = document.getElementById('user_type').value;

    if (username === '' || password === '' || userType === '') {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Login Details:');
    console.log('Username/Email:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);

    alert(`Login successful as ${userType}`);

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
