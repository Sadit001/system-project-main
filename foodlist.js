document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.request-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Food request submitted!');
        
        button.disabled = true;
        button.textContent = 'Requested';
        button.style.backgroundColor = '#aaa';
  
        const statusCell = button.closest('tr').querySelector('.status');
        statusCell.textContent = 'Pending';
        statusCell.style.backgroundColor = '#f1c40f'; 
       
      });
    });
  });
  