
  const simulatedItems = [
    { name: "Paneer Biryani", category: "Cooked Meal", minutesLeft: 260, expires: "2025-05-06 16:00", collected: false },
    { name: "Wheat Flour (5 kg)", category: "Dry Goods", minutesLeft: 150, expires: "2025-05-06 14:00", collected: false },
    { name: "Samosa Pack", category: "Cooked Meal", minutesLeft: 40, expires: "2025-05-06 13:00", collected: true }
  ];

  function getStatusClassAndLabel(item) {
    if (item.collected) return { class: "status remove", label: "Collected" };
    if (item.minutesLeft <= 0) return null;
    if (item.minutesLeft <= 60) return { class: "status remove", label: "Remove Immediately" };
    if (item.minutesLeft <= 240) return { class: "status warning", label: "Expiring Soon" };
    return { class: "status available", label: "Available" };
  }

  function renderFoodList() {
    const tbody = document.getElementById('foodList');
    tbody.innerHTML = '';

    simulatedItems.forEach((item) => {
      if (!item.collected && item.minutesLeft > 0) item.minutesLeft--;

      const statusInfo = getStatusClassAndLabel(item);
      if (!statusInfo) return;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td><span class="${statusInfo.class}">${statusInfo.label}</span></td>
        <td>${item.expires}</td>
      `;
      tbody.appendChild(row);
    });
  }

  renderFoodList();
  setInterval(renderFoodList, 1000); 

  