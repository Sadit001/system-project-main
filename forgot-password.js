// forgot-password.js

// Wait until the page fully loads
document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('resetForm');
  
    resetForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const email = document.getElementById('email').value.trim();
      const otp = document.getElementById('otp').value.trim();
  
      // Basic validation
      if (email === '' || otp === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (!/^\d{6}$/.test(otp)) {
        alert('OTP must be a 6-digit number.');
        return;
      }
  
      console.log('Email:', email);
      console.log('OTP:', otp);
  
      // Redirect to create new password page
      alert('OTP verified successfully!');
      window.location.href = 'create-new-password.html';
    });
  
    function validateEmail(email) {
      // Basic email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  