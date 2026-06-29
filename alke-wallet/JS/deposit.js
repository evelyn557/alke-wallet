$(document).ready(function() {
    // 1. Mostrar saldo actual al cargar
    let saldo = localStorage.getItem("balance") || 0;
    $('#currentBalance').text(saldo);

    // 2. Manejar el evento de clic con jQuery
    $('#btn-depositar').click(function() {
        let monto = Number($('#depositAmount').val());
        
        if (monto > 0) {
            // Actualizar lógica
            let nuevoSaldo = Number(localStorage.getItem("balance")) + monto;
            localStorage.setItem("balance", nuevoSaldo);
            
            // 3. Mostrar mensaje de éxito con alerta de Bootstrap
            $('#alert-container').html(`
                <div class="alert alert-success">Depósito de $${monto} realizado con éxito.</div>
            `);

            // 4. Redirigir tras 2 segundos
            setTimeout(function() {
                window.location.href = "./menu.html";
            }, 2000);
        } else {
            $('#alert-container').html(`<div class="alert alert-danger">Ingrese un monto válido.</div>`);
        }
    });
});