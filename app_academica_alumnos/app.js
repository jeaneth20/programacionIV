document.addEventListener("DOMContentLoaded",event=>{
    mostrarVista.addEventListener('click',e=>{
        e.stopPropagation();

        let modulo = e.toElement.dataset.modulo;
        let modulo = e.srcElement.dataset.modulo;

        fetch('public/vistas/alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vistas-${modulo}`).innerHTML = resp;
        });
    });
});
