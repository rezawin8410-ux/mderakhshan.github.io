document.addEventListener('DOMContentLoaded', () => {
  const drawerToggle = document.getElementById('drawer-toggle');
  const drawer = document.getElementById('drawer');
  const themeToggle = document.getElementById('theme-toggle');
  const bottomNavLinks = document.querySelectorAll('.bottom-nav a');

  // Toggle drawer
  drawerToggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  document.body.classList.add(savedTheme);

  // Smooth scroll to sections
  bottomNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56,
          behavior: 'smooth'
        });
      }
      bottomNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Haptic feedback on click
  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('click', () => {
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    });
  });
});
