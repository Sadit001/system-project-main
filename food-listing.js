const donorFoodData = {
  0: [
    { name: "Chicken Biryani", quantity: "10 plates", date: "2025-05-01" },
    { name: "Bread Packets", quantity: "20 pcs", date: "2025-05-03" }
  ],
  1: [
    { name: "Vegetable Curry", quantity: "8 bowls", date: "2025-04-28" }
  ],
  2: [
    { name: "Rice & Lentil", quantity: "15 servings", date: "2025-05-02" }
  ],
  3: []
};

function goBack() {
  window.location.href = "admin(donor).html";
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const donorIndex = getQueryParam("donor");
  const foodList = donorFoodData[donorIndex] || [];

  const container = document.getElementById("foodContainer");

  if (foodList.length === 0) {
    container.innerHTML = "<p>No food items listed by this donor.</p>";
    return;
  }

  foodList.forEach(food => {
    const div = document.createElement("div");
    div.className = "food-item";
    div.innerHTML = `
      <h3>${food.name}</h3>
      <p><strong>Quantity:</strong> ${food.quantity}</p>
      <p><strong>Date Listed:</strong> ${food.date}</p>
    `;
    container.appendChild(div);
  });
});
