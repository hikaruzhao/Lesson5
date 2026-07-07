const root = document.documentElement;
const toggleButton = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const toggleLabel = document.querySelector('.toggle-label');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const isDark = theme === 'dark';
  toggleButton.setAttribute('aria-pressed', String(!isDark));
  toggleIcon.textContent = isDark ? '☀️' : '🌙';
  toggleLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
}

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'dark';
applyTheme(initialTheme);

toggleButton.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});
