
    var $ = el => document.querySelector(el),
        frmAlumnos = $("#frmAlumnos");
    frmAlumnos.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopPropagation();
        
        let alumnos = {
            accion    : frmAlumnos.dataset.accion,
            idAlumno : frmAlumnos.dataset.idAlumno,
            accion : 'nuevo',
            codigo    : $("#txtCodigoAlumno").value,
            nombre    : $("#txtNombreAlumno").value,
            direccion : $("#txtDireccionAlumno").value,
            telefono  : $("#txtTelefonoAlumno").value
        };
        console.log(alumnos);
        fetch(`private/modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(alumnos)}`).then( resp=>resp.json()).then(resp=>{
            
            console.log(resp);
            $("#respuestaAlumno").innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${resp.msg}
                </div>
            `;
        });
    });
    frmAlumnos.addEventListener("reset",e=>{
        $("#frm-alumnos").dataset.accion = 'nuevo';
        $("#frm-alumnos").dataset.idAlumno = '';
    
        });
    
    
  
