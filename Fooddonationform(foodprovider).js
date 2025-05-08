document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('donationForm');
  const tableBody = document.getElementById('donationList');
  const notification = document.getElementById('notification');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const foodName = document.getElementById('foodName').value;
    const quantity = document.getElementById('quantity').value;
    const pickupAddress = document.getElementById('pickupAddress').value;
    const availableUntil = document.getElementById('availableUntil').value;
    const expiryTime = document.getElementById('expiryTime').value;

    addDonation(foodName, quantity, pickupAddress, availableUntil, expiryTime);

    form.reset();
    showNotification('✅ Donation added successfully!', 'success');
  });

  tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const row = e.target.closest('tr');
      row.remove();
      updateIDs();
      showNotification('🗑️ Donation deleted successfully!', 'danger');
    }

    if (e.target.classList.contains('edit-btn')) {
      const row = e.target.closest('tr');
      const cells = row.querySelectorAll('td');

      localStorage.setItem('editDonation', JSON.stringify({
        id: cells[0].textContent,
        foodName: cells[1].textContent,
        quantity: cells[2].textContent,
        pickupAddress: cells[3].textContent,
        availableUntil: cells[4].textContent,
        expiryTime: cells[5].textContent
      }));

      window.location.href = 'Fooddonationedit.html';
    }
  });

  function addDonation(foodName, quantity, pickupAddress, availableUntil, expiryTime) {
    const newRow = document.createElement('tr');
    const rowCount = tableBody.rows.length + 1;

    newRow.innerHTML = `
      <td>${rowCount}</td>
      <td>${foodName}</td>
      <td>${quantity}</td>
      <td>${pickupAddress}</td>
      <td>${availableUntil.replace('T', ' ')}</td>
      <td>${expiryTime.replace('T', ' ')}</td>
      <td>
        <button class="edit-btn">Edit</button> | 
        <button class="delete-btn">Delete</button>
      </td>
    `;

    tableBody.appendChild(newRow);
  }

  function updateIDs() {
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      row.querySelector('td').textContent = index + 1;
    });
  }

  function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`;

    setTimeout(() => {
      notification.textContent = '';
      notification.className = 'notification';
    }, 3000);
  }
});
