// sign-up.js

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const tradeLicense = document.getElementById('trade_license').value.trim();
      const role = document.getElementById('role').value;
  
      // Basic validation
      if (name === '' || phone === '' || role === '') {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Validate phone number format
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (10-15 digits).');
        return;
      }
  
      console.log('Sign Up Details:');
      console.log('Full Name:', name);
      console.log('Phone Number:', phone);
      console.log('Trade License Number:', tradeLicense);
      console.log('Role:', role);
  
      alert('Sign Up successful! You can now log in.');
  
      // Redirect to login page after successful signup
      window.location.href = 'login.html';
    });
  });
  