let registros = [];

function validar_captcha(rcaptcha) 
{
    if ( rcaptcha=="5") {
        return true;

                }else {
            return false;
        }
  
  
}

function iniciar_session(usuario,contrasena,rchaptcha) {

    var usuario=document.getElementById('login_username').value;
  
    var contrasena=document.getElementById('login_password').value;

    var rchaptcha=document.getElementById('login_captcha').value;

    registros.push({"usuario":usuario, "contrasena":contrasena, "rchaptcha":rchaptcha});

}

module.exports.registros = registros;
module.exports.validar_captcha=validar_captcha;
module.exports.iniciar_session=iniciar_session;