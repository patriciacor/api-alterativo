 var serie_list= [];

 function serie(array)// funcion con parametro array ya que leera una cadena de caracteres
{
    let content = "<br> <br>" ; //creo una variable local en forma de bloque que contendra la informacion de mi listado

    for (let i = 0; i < array.length; i++) { //el for recorre mi lista de array y cada vez que el for recorre la longitud de array con el indice ,le suma 1,
        let series = array[i];
      
       {           
            content += ` 
<div class="card" style="width: 18rem;">
  <img src="`+ series.imgSrc + `" alt="`+  `" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">`+series.name+`</h5>
    <p class="card-text muted">`+series.anio+`</p>
    <a href="#" class="btn btn-primary">`+series.temporadas+`</a>
  </div>
</div>
            `
        
        //le di estilo al salto de lina y encabezados a mi listado para que se vea de buen tamaño y contraste con el fondo 
    }
    document.getElementById("serie").innerHTML = content ; 
    // con getElementById llamo al id que coloque dentro de un div en mi pagina html y le digo que su valor , es igual a la lista de contenido 
    //para que se visualice en ella 
}

}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(series_url).then(function (list) {
        if (list.status === "ok") {
            serie_list= list.data;
        serie(serie_list);
        } 
    });
        
}); 
