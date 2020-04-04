var appMateria = new Vue({
    el:'#frm-materias',
    data:{
        materia :{
            idMateria   : 0,
            accion      : 'nuevo',
            codigo      : '',
            nombre      : '',
            descripcion : '',
            msg         : ''
        }
    },
    methods:{
        guardarMateria :function(){
            fetch(`private/modulos/materias/procesos.php?proceso=recibirDatos&materia=${JSON.stringify(this.materia)}`).then( resp=>resp.json() ).then(resp=>{
                //console.log(resp);
                this.materia.msg = resp.msg;
                this.materia .idMateria = 0;
                this.materia.codigo = '';
                this.materia.nombre = '';
                this.materia.descripcion = '';
                this.materia.accion = 'nuevo';
                appBuscarMaterias.buscarMateria();
            });
        }
    }
});