
var tablaPelicula = localStorage.getItem('tablaPeliculaStorage');
tablaPelicula = JSON.parse(tablaPelicula);
if (tablaPelicula == null){
    var tablaPelicula = [];
}

listar();

function listar(){
    console.log('INGRESANDO A LISTAR...');


    var dataFila = '';

    if(tablaPelicula.length > 0){
        for( const i in tablaPelicula){
            var varPelicula = JSON.parse(tablaPelicula[i]);
            dataFila += '<tr>';
            dataFila += '<td>' + varPelicula.idPelicula+'</td>';
            dataFila += '<td>' + varPelicula.nombre+'</td>';
            dataFila += '<td>' + varPelicula.categoria+'</td>';
            dataFila += '<td>' + varPelicula.descripcion+'</td>';
            dataFila += '<td>' + varPelicula.publicado+'</td>';
            dataFila += '<td>' + varPelicula.opciones+'</td>';
            dataFila += '<td>' +
                     "<button type='button' class='btn btn-warning' onclick ='abrirForm("+varPelicula.idPelicula+")'>EDITAR</button>"+
                     "</td>";




            dataFila +='</tr>';
        }
        document.getElementById('datapelicula').innerHTML = dataFila;
    }
}




function abrirForm(idForm){
    localStorage.setItem('idForm', JSON.stringify(idForm));
    window.location.replace('pelicula-form.html')
}