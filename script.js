const stars = document.getElementsByName('rating');
const ratingValue = document.getElementById('ratingValue');

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('change', function() {
        ratingValue.textContent = this.value;
    });
}
