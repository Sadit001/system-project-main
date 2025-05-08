const stars = document.querySelectorAll('#rating span');
const selectedRatingInput = document.getElementById('selectedRating');
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    selectedRatingInput.value = selectedRating;

    stars.forEach((s, i) => {
      s.classList.toggle('selected', i < selectedRating);
    });
  });
});

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }

  const username = document.getElementById('username').value;
  const usertype = document.getElementById('usertype').value;

  alert(`Thank you, ${username} (${usertype})! Your feedback has been submitted.`);

  this.reset();
  stars.forEach(star => star.classList.remove('selected'));
  selectedRating = 0;
});
