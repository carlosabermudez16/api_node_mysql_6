En mi caso tuve un problema al ejecutarse el servidor, lo 
solucioné abriendo mysql workbench y realizando los comandos
siguientes:

1. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    yo estoy usando un usuario con nombre admin y una contraseña, por tanto donde
    dice root se cambia por admin y donde dice password por su contraseña.

2. flush privileges;

Ahora vuelva a ejecutar el servidor de su proyecto.
