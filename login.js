let registros = [];

function validar_captcha(rcaptcha) 
{
  
  
  
}

function iniciar_session(usuario,contrasena,rchaptcha) {

    var usuario=document.getElementById('login_username').value;
  
    var contrasena=document.getElementById('login_password').value;
    registros.push({"usuario":usuario, "contrasena":contrasena, "rchaptcha":rchaptcha});

}

module.exports.registros = registros;
module.exports.validar_captcha=validar_captcha;
module.exports.iniciar_session=iniciar_session;