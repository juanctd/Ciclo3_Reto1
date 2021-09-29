
 function validar_nombre_usuario(string) {
    // El input que queremos validar
    var input = document.getElementById('in_nombre_usuario');

    // El pattern que vamos a comprobar ^[a-zA-Z0-9]*$
    var pattern = new RegExp('^[a-zA-Z]*$', 'i');

    // Primera validacion, si input esta vacio entonces no es valido

        
   if(input.value.length <=5 ){
        return false;
      } 

      if(input.value.length >= 6 ){
        return true;
      } 
      
      if(input.value.length >=31 ){
        return false;
      } 

        if(!pattern.test(input.value)){ 
       
          return false;
        } 
  }       
      

  function validar_contrasena(string) {
   

    // El input que queremos validar
    var input = document.getElementById('in_contrasena');

    // El pattern que vamos a comprobar
    var pattern = new RegExp('^[a-zA-Z0-9]+$', 'i');


    if(input.value.length > 5 ){
        return true;
      }
      
      if(!pattern.test(input.value)){ 
      
          return false;
        } 
      
     
  }

  function confirmar_contrasena(stringA, stringB) {
   
    // El input que queremos validar
    var stringA = document.getElementById('in_contrasena').value;
    var stringB = document.getElementById('in_confirmar_contrasena').value;
    validar_contrasena(stringA);
    validar_contrasena(stringB);

        if (document.getElementById('in_contrasena').value != document.getElementById('in_confirmar_contrasena').value) {
         return false;
        }else {
          return true;  }

       
  }

  module.exports.validar_nombre_usuario = validar_nombre_usuario;
  module.exports.validar_contrasena = validar_contrasena;
  module.exports.confirmar_contrasena = confirmar_contrasena;