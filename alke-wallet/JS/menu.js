$(document).ready(function() {
    // 1. Animación de entrada al cargar la página
    $('.card').hide().fadeIn(800);

    // 2. Cargar saldo
    $('#balance').text(localStorage.getItem("balance") || 0);

    // 3. Efecto visual al hacer clic en los botones
    $('.btn').click(function(e) {
        e.preventDefault(); // Evita el salto brusco antes de redirigir
        let url = $(this).attr('id') === 'btn-depositar' ? 'deposit.html' : 
                  $(this).attr('id') === 'btn-enviar' ? 'sendmoney.html' : 'transactions.html';
        
        // Animación de salida antes de ir a la siguiente pantalla
        $('.card').fadeOut(500, function() {
            window.location.href = url;
        });
    });
});