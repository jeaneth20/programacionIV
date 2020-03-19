var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded", event => {
   
    let Alumnos = document.getElementById("alumnos"); // Instanciamos los elementos
    let Docentes = document.getElementById("docentes"); //

    //SE AGREGAN LOS EVENTOS LISTENER PARA CADA VISTA
    Alumnos.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "alumnos";
        colocarVista(modulo);

    });

    Docentes.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "docentes";
        colocarVista(modulo);
    
    });
}); 

// ESTA FUNCION HACE LA PETICION Y COLOCA LA VISTA SEGUN EL MODULO QUE SE LE HA SIFO ENVIADO
 function colocarVista(modulo){

    fetch(`public/vistas/${modulo}/${modulo}.html`).then( resp => resp.text()).then( resp => {

        document.getElementById(`vistas-${modulo}`).innerHTML = resp;
        let btnCerrar = $(".close");

        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });

        let cuerpo = $("body"), script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
            
    });

 }