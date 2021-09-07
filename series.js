 var serie_list= [];

 function serie(array)// funcion con parametro array ya que leera una cadena de caracteres
{
    let content = "<br> <br>" ; //creo una variable local en forma de bloque que contendra la informacion de mi listado

    for (let i = 0; i < array.length; i++) { //el for recorre mi lista de array y cada vez que el for recorre la longitud de array con el indice ,le suma 1,
        let series = array[i];
      
       {            content += 
        `<img src="`+ series.img + `" alt="`+ series.description + `" class="img-thumbnail">
     <h3>` + series.name  + `</h3>   
        <h4>` + series.anio +  `</h4>
        <h5>` + series.temporada + " " + series.genero +  `</h5> 
            
               '<hr color = white>'    
      
        `
        //le di estilo al salto de lina y encabezados a mi listado para que se vea de buen tamaño y contraste con el fondo 
    }
    document.getElementById("serie").innerHTML = content; 
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
