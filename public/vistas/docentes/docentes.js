var $ = el => document.querySelector(el),
    frmDocentes = $("#frmDocentes");
frmDocentes.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    
    let docentes = {
        accion    : 'nuevo',
        codigo    : $("#txtCodigoDocente").value,
        nombre_d    : $("#txtNombreDocente").value,
        direccion_d : $("#txtDireccionDocente").value,
        telefono_d  : $("#txtTelefonoDocente").value
    };
    fetch(`private/Modulos/docentes/procesos.php?procesoD=recibirDatos&docente=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaDocente").innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resp.msg}
            </div>
        `;
    });
});