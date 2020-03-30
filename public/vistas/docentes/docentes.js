var $ = el => document.querySelector(el),
    frmDocentes = $("#frmDocentes");
frmDocentes.addEventListener("submit",e=>{
    e.preventDefault();
    e.stopPropagation();
    
    let docentes = {
        accion : frmAlumnos.dataset.accion,
        idAlumno : frmAlumnos.dataset.idAlumno,
        accion    : 'nuevo',
        codigo    : $("#txtCodigoDocente").value,
        nombre    : $("#txtNombreDocente").value,
        direccion : $("#txtDireccionDocente").value,
        telefono  : $("#txtTelefonoDocente").value,
        Dui      : $("#txtDUIDocente").value
    };
    
    fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
        $("#respuestaDocente").innerHTML = `
            <div class="alert alert-success" role="alert">
                ${resp.msg}
            </div>
        `;
    });
});
frmAlumnos.addEventListener("reser",e=>{
    $("#frm-docentes").dataset.accion='nuevo';
    $("#frm-docentes").dataset.idAlumno='';
});