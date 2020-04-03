var appdocente = new Vue({
    el:'#frm-docentes',
    data:{
        docente:{
            idDocente  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            direccion : '',
            telefono  : '',
            DUI       : '',
            msg       : ''
        }
    },
    methods:{
        guardarDocente:function(){
            fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(this.docente)}`).then( resp=>resp.json() ).then(resp=>{
                //console.log(resp);
                this.docente.msg = resp.msg;
                this.docente.idDocente= 0;
                this.docente.codigo = '';
                this.docente.nombre = '';
                this.docente.direccion = '';
                this.docente.telefono = '';
                this.docente.DUI = '';
                this.docente.accion = 'nuevo';
                appBuscarDocentes.buscarDocente();
            });
        }
    }
});