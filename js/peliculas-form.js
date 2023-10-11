
var tablaPelicula = localStorage.getItem('tablaPeliculaStorage');
tablaPelicula = JSON.parse(tablaPelicula);
if (tablaPelicula == null){
    var tablaPelicula = [];
}



var idForm = localStorage.getItem('idForm');
idForm = JSON.parse(idForm);
if (idForm == null){
    var idForm = 0;
}


cargarPagina();

function guardar(){

     swal.fire({
            title: 'GUARDAR',
            html:'DESEA GUARDAR LOS CAMBIOS?',
            showDenyButton: true,
            confirmButtonText:'SI',
            denyButtonText: 'NO'
          } ).then(
            (result) => {
                if (result.isConfirmed){

                    console.log ('PRESIONO GUARDAR...');
                    var objPelicula = JSON.stringify({
                        idPelicula: (idForm>0)? idForm: (tablaPelicula.length + 1),
                        nombre: document.getElementById('txtIdNombre').value,
                        categoria: document.getElementById('txtIdCategoria').value,
                        descripcion: document.getElementById('txtIdDescripcion').value,
                        publicado: document.getElementById('txtIdPublicado').value,
                        opciones: document.getElementById('cboOpciones').value
                    });
                    console.log(objPelicula);
                    if(idForm > 0){
                        for(const i in tablaPelicula){
                            var varPelicula = JSON.parse(tablaPelicula[i]);
                            if(varPelicula.idPelicula == idForm){
                                tablaPelicula[i] = objPelicula;
                                break;
                            }
                        }
                    }else{
                        //peliculas nuevas
                        tablaPelicula.push(objPelicula);
                    }

                    localStorage.setItem('tablaPeliculaStorage', JSON.stringify(tablaPelicula));

                    swal.fire('CAMBIOS  GUARDADOS','','success').then(
                        (result) =>{
                            window.location.replace('admin.html');

                        }
                    );
                    
                }else if (result.isDenied){
                    swal.fire('CAMBIOS NO GUARDADOS','','info')
                }
            }
          );
}

function cargarPagina(){
    if (idForm > 0){


        for(const i in tablaPelicula){
            var varPelicula = JSON.parse(tablaPelicula[i]);
            if(varPelicula.idPelicula == idForm){
                document.getElementById('txtIdPelicula').value = varPelicula.idPelicula;
                document.getElementById('txtIdNombre').value = varPelicula.nombre;
                document.getElementById('txtIdCategoria').value = varPelicula.categoria;
                document.getElementById('txtIdDescripcion').value = varPelicula.descripcion;
                document.getElementById('txtIdPublicado').value = varPelicula.publicado;
                document.getElementById('cboOpciones').value = varPelicula. opciones;
                break;
            }
        }

    }
}