let donors = [
    {
      name: "Ali Hossain",
      nid: "1998765432",
      contact: "01712345678",
      tradeLicense: "TL-98765",
      status: "Active"
    },
    {
      name: "Fatema Akter",
      nid: "1887654321",
      contact: "01823456789",
      tradeLicense: "TL-12345",
      status: "Blocked"
    },
    {
      name: "Karim Uddin",
      nid: "1765432198",
      contact: "01987654321",
      tradeLicense: "TL-67890",
      status: "Active"
    },
    {
      name: "Rokeya Sultana",
      nid: "1654321987",
      contact: "01612349876",
      tradeLicense: "TL-33333",
      status: "Blocked"
    }
  ];
  
  function renderTable() {
    const tbody = document.getElementById("donorTableBody");
    tbody.innerHTML = ""; 
  
    donors.forEach((donor, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${donor.name}</td>
        <td>${donor.nid}</td>
        <td>${donor.contact}</td>
        <td>${donor.tradeLicense}</td>
        <td>
          <button class="toggle-btn ${donor.status === "Active" ? 'active' : 'blocked'}"
                  onclick="toggleStatus(${index})">${donor.status}</button>
        </td>
        <td>
          <button class="action-btn" onclick="viewFood(${index})">View Food</button>
          <button class="action-btn delete-btn" onclick="deleteDonor(${index})">Delete</button>
        </td>
      `;
  
      tbody.appendChild(row);
    });
  }
  
  function toggleStatus(index) {
    const donor = donors[index];
    donor.status = donor.status === "Active" ? "Blocked" : "Active";
    renderTable();
  }
  
  function deleteDonor(index) {
    if (confirm("Are you sure you want to delete this donor?")) {
      donors.splice(index, 1);
      renderTable();
    }
  }
  
  function viewFood(index) {
    window.location.href = `food-listing.html?donor=${index}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderTable();
  
    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        window.location.href = "admin.html";
      });
    }
  });
  