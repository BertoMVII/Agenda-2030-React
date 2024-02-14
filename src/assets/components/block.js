const checkbox = document.getElementById('menuBtn');
checkbox.addEventListener('change', () => {
  document.body.style.overflow = checkbox.checked ? 'hidden' : 'auto';
});