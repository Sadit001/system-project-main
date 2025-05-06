function deleteRow(button) {
    const row = button.closest("tr");
    const name = row.cells[0].textContent; // Get recipient name for confirmation
  
    const confirmed = confirm(`Are you sure you want to delete recipient "${name}"?`);
    if (confirmed) {
      row.remove();
    }
  }
  
  function toggleStatus(button) {
    const statusCell = button.closest("tr").querySelector(".status");
    if (statusCell.textContent === "Active") {
      statusCell.textContent = "Blocked";
      statusCell.classList.remove("active");
      statusCell.classList.add("blocked");
    } else {
      statusCell.textContent = "Active";
      statusCell.classList.remove("blocked");
      statusCell.classList.add("active");
    }
  }
  
