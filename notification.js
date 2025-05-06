document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('notificationTable');
  
    table.addEventListener('click', (e) => {
      if (e.target.classList.contains('approve')) {
        alert('Request Approved!');
      } else if (e.target.classList.contains('reject')) {
        alert('Request Rejected!');
      }
    });
  });
  