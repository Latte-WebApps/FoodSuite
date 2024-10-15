document.addEventListener('DOMContentLoaded', function() {
    i18next.use(i18nextHttpBackend).init({
        lng: 'en', // Idioma predeterminado
        fallbackLng: 'en', 
        debug: true,
        backend: {
            loadPath: '/assets/i18next/{{lng}}.json'
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
        if (i18next.language !== 'en') {
            i18next.changeLanguage('en', updateContent);
        }
    });
    
    document.getElementById('btn-es').addEventListener('click', function() {
        if (i18next.language !== 'es') {
            i18next.changeLanguage('es', updateContent);
        }
    });
    

    const buttons = document.querySelectorAll('.language-switcher button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
        });
    });
});
