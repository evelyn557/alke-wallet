$(document).ready(function() {
    // Esto carga el archivo login.html dentro del div id="app"
    $("#app").load("login.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("Error al cargar: " + xhr.status + " " + xhr.statusText);
            $("#app").html("<h3>Error: No se pudo cargar login.html</h3>");
        }
    });
});