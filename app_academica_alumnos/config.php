@@ -2,6 +2,6 @@
/**
 * Importamos la clase principal de conexion
 */
include('../Conexion/DB.php');
$conexion = DB('localhost','root','','db_app_academica');
include('../../Conexion/DB.php');
$conexion = new DB('localhost','root','','db_app_academica');
?> 