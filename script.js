// 100% CSS. No artificial colours or ingredients.

// First person to screenshot a lighthouse wins!

// Your time starts now...

// Toggle futuristic mode
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('futuristic-toggle');
  if (toggle) {
    toggle.addEventListener('change', (e) => {
      document.body.classList.toggle('futuristic', e.target.checked);
    });
  }
});