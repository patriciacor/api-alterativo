const peliculas_url= "https://patriciacor.github.io/api-alterativo/json/peliculas.json";
const series_url="https://patriciacor.github.io/api-alterativo/json/series.json";



var getJSONData = function(url){
    var result = {};
   
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        
        return result;
    });
  }