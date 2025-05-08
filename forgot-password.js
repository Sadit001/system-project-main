
document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('resetForm');
  
    resetForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const email = document.getElementById('email').value.trim();
      const otp = document.getElementById('otp').value.trim();
  
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
  
      alert('OTP verified successfully!');
      window.location.href = 'create-new-password.html';
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  