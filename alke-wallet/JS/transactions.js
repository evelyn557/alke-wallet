$(document).ready(function() {
    // 1. Lista ficticia de transacciones
    const listaTransacciones = [
        { tipo: 'compra', descripcion: 'Compra en línea', monto: 50.00 },
        { tipo: 'deposito', descripcion: 'Depósito inicial', monto: Number(localStorage.getItem("balance")) || 0 },
        { tipo: 'transferencia', descripcion: 'Transferencia recibida', monto: 75.00 },
        { tipo: 'compra', descripcion: 'Compra en línea', monto: 5550.00 },
        { tipo: 'deposito', descripcion: 'Depósito misma cuenta', monto: 10500.00 },
        { tipo: 'transferencia', descripcion: 'Transferencia recibida', monto: 7575.00 }
    ];

    // --- AQUÍ VA LA FUNCIÓN MODIFICADA ---
    function mostrarUltimosMovimientos(filtro) {
        // Ocultamos la lista antes de limpiarla para el efecto de transición
        $('#listaMovimientos').hide().empty(); 
        
        listaTransacciones.forEach(item => {
            if (filtro === 'todos' || item.tipo === filtro) {
                $('#listaMovimientos').append(`
                    <li class="list-group-item">
                        ${item.descripcion} - $${item.monto.toLocaleString()}
                    </li>
                `);
            }
        });
        
        // Hacemos que la lista aparezca suavemente
        $('#listaMovimientos').fadeIn(300); 
    }
    // -------------------------------------

    // Carga inicial
    mostrarUltimosMovimientos('todos');

    // 3. Evento del filtro
    $('#filtroTipo').change(function() {
        mostrarUltimosMovimientos($(this).val());
    });
});