CREATE TABLE `mintic`.`usuarios` ( `id` INT NOT NULL AUTO_INCREMENT , `usuario` VARCHAR(256) NOT NULL , 
`contrasena` VARCHAR(256) NOT NULL , `fecha_registro` INT NOT NULL DEFAULT '2021' , PRIMARY KEY (`id`)) 
ENGINE = InnoDB;