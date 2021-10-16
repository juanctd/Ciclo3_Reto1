let registros = [];

function validar_captcha(rcaptcha) {
  var captcha = Number(rcaptcha);
  if(captcha==="") {
      return false;
  } 
  else if(captcha===5){
      return true;
  }
  else
      return false;
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
  if(validar_captcha(rcaptcha)){
      for (const validar in registros) { 
        if(registros[validar].usuario===usuario && registros[validar].contrasena===contrasena){
              return true;
        } 
        else {
           continue;
          }
      }
      return false;
  } 
  else {
      return false;
  }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;