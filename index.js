document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');

    // Theme toggle functionality
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            menuToggle.classList.toggle('open');
            const expanded = mainNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', expanded.toString());
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    menuToggle.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stoppar sidan från att laddas om

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  document.getElementById("result").innerText =
    "Tack " + name + "! Vi har fått ditt meddelande.";
});