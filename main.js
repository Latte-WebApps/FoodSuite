document.addEventListener('DOMContentLoaded', function() {
    i18next.use(i18nextHttpBackend).init({
        lng: 'en', // Idioma predeterminado
        debug: true,
        backend: {
            loadPath: '/i18next/{{lng}}.json'
        }
    }, function(err, t) {
        updateContent();
    });

    document.getElementById('hamburger-menu').addEventListener('click', function() {
        document.getElementById('navbar-menu').classList.toggle('active');
    });

    var menuItems = document.querySelectorAll('#navbar-menu a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.getElementById('navbar-menu').classList.remove('active');
        });
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            element.innerText = i18next.t(element.getAttribute('data-i18n'));
        });
    }

    document.getElementById('btn-en').addEventListener('click', function() {
        i18next.changeLanguage('en', updateContent);
    });

    document.getElementById('btn-es').addEventListener('click', function() {
        i18next.changeLanguage('es', updateContent);
    });

    const buttons = document.querySelectorAll('.language-switcher button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remueve la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Agrega la clase 'active' solo al botón presionado
            button.classList.add('active');
        });
    });
});
