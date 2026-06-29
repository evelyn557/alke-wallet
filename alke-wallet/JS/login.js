$(document).ready(function() {
    // Inicialización del balance
    localStorage.setItem("balance", 0);

    $('#loginForm').submit(function(e) {
        e.preventDefault();

        let email = $('#email').val();
        let password = $('#password').val();

        // Simulación de autenticación 
        if (email === "admin@admin.cl" && password === "123") {
            $('#alert-container').html(`
                <div class="alert alert-success">¡Bienvenido! Redirigiendo...</div>
            `);
            
            setTimeout(() => {
                window.location.href = "./menu.html";
            }, 1000);
        } else {
            $('#alert-container').html(`
                <div class="alert alert-danger">Datos incorrectos, intenta nuevamente.</div>
            `);
        }
    });
});