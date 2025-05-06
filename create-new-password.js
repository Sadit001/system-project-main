// create-new-password.js

// Wait until the page loads
document.addEventListener('DOMContentLoaded', function() {
  const newPasswordForm = document.getElementById('newPasswordForm');

  newPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Basic validation
    if (newPassword === '' || confirmPassword === '') {
      alert('Please fill in both fields.');
      return;
    }

    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Password successfully changed.');

    alert('Password changed successfully! You can now login.');
    window.location.href = 'login.html'; // Redirect back to login
  });
});
