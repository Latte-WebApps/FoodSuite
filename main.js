document.addEventListener('DOMContentLoaded', function() {
    // Alterna el menú cuando se hace clic en el icono del menú hamburguesa
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        document.getElementById('navbar-menu').classList.toggle('active');
    });

    // Cierra el menú cuando se selecciona una opción
    var menuItems = document.querySelectorAll('#navbar-menu a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.getElementById('navbar-menu').classList.remove('active');
        });
    });
});
