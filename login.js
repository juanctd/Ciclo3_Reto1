let registros = [];

function validar_captcha(rcaptcha) 
{
 var ca=rcaptcha;
 
    if (ca == 5) {
        return true;
                }else {
            return false;
        }
  }

function iniciar_sesion(usuario,contrasena,rcaptcha) {
    
    registros.push({"usuario":usuario, "contrasena":contrasena, "rcaptcha":rcaptcha});
    const r=validar_captcha(registros[0].rcaptcha); 
    const u=registros[0].usuario;
    const c=registros[0].contrasena;

    if (r == false) {
        return false;
     } else { 
        return true; }
           
    if(u.length == 0 ){
        return false;
      } else {  if (r == true) {
        return true; }    

    if(c.length == 0 ){
          return false;
        }
    
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;