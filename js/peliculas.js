var peli_list= [];

function peliculas(array)// funcion con parametro array ya que leera una cadena de caracteres
{
   let contenido = "<br> <br>" ; //creo una variable local en forma de bloque que contendra la informacion de mi listado

   for (let i = 0; i < array.length; i++) { //el for recorre mi lista de array y cada vez que el for recorre la longitud de array con el indice ,le suma 1,
       let peli= array[i];
     
      {            contenido += 
       ` 
       <div class"row">
       <div class= col-md-5 >
    <h2>` + peli.name  + `</h2>  
     <p>` + "Director:" + peli.director + `</p> 
      <p>`+ peli.genero +`</p>
       <p>` +"Año de Lanzamiento"+ peli.anio +  `</p>
       <p>` + "Duración:"+ peli.duracion + `</p>
       '<hr>'
       <img src="`+ peli.imgSrc + `" alt="`+  `" class="img-thumbnail">
     </div>
     </div>
     `
       //le di estilo al salto de lina y encabezados a mi listado para que se vea de buen tamaño y contraste con el fondo 
   }
   document.getElementById("peli").innerHTML = contenido; 
   // con getElementById llamo al id que coloque dentro de un div en mi pagina html y le digo que su valor , es igual a la lista de contenido 
   //para que se visualice en ella
}
}
document.addEventListener("DOMContentLoaded", function (e) {
   getJSONData(peliculas_url).then(function (list) {
       if (list.status === "ok") {
           peli_list= list.data;
       peliculas(peli_list);
       } 
   });
       
}); 

