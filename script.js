// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('show');
});

// Submenu accessibility
const submenuButton = document.querySelector('button[aria-haspopup="true"]');
const submenu = document.getElementById('submenu');

if(submenuButton) {
  submenuButton.addEventListener('click', () => {
    const expanded = submenuButton.getAttribute('aria-expanded') === 'true' || false;
    submenuButton.setAttribute('aria-expanded', !expanded);
    submenu.style.display = !expanded ? 'block' : 'none';
  });
}
