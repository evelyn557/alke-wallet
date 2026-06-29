$(document).ready(function() {
    // 1. Filtrado de contactos
    $('#searchContact').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('.contact-item').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // 2. Mostrar botón al seleccionar
    $(document).on('change', 'input[name="contacto"]', function() {
        $('#btn-enviar-dinero').slideDown();
    });

    // 3. Agregar contacto con validación
    $('#btn-guardar').click(function() {
        if($('#nombre').val() === "" || $('#cbu').val() === "") {
            alert("Por favor completa los campos obligatorios");
            return;
        }
        $('#contactList').append(`
            <li class="list-group-item d-flex align-items-center contact-item">
              <input type="radio" name="contacto" class="mr-3 select-contact">
              <div>
                  <span class="contact-name font-weight-bold">${$('#nombre').val()}</span>
                  <small class="d-block text-muted">Alias: ${$('#alias').val()}</small>
              </div>
            </li>`);
        $('#modalContacto').modal('hide');
    });

    // 4. Enviar dinero
    $('#btn-enviar-dinero').click(function() {
        let monto = Number(prompt("Ingrese el monto a transferir"));
        let balance = Number(localStorage.getItem("balance"));
        
        if (isNaN(monto) || monto <= 0) {
            $('#alert-container').html('<div class="alert alert-warning">Ingrese un monto válido.</div>');
        } else if (monto > balance) {
            $('#alert-container').html('<div class="alert alert-danger">Saldo insuficiente.</div>');
        } else {
            localStorage.setItem("balance", balance - monto);
            $('#alert-container').html('<div class="alert alert-success">Transferencia realizada con éxito.</div>');
        }
    });
});