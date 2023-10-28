```
->
00 00 00 00 00 00 00 00 00 00 00 00 00
```
- todos los bites se ordenan en grupos de 1 o de a 4 bites.
```
-->
[00], [00 00 00 00]...
```
- el primer bite indica, la primer accion.
  [00] terminar script
  [01] crear un actor
  	<tipo>,<modelo>,<x>,<y>,<z>,<a>
  [02] crear un vehiculo
  	<modelo>,<x>,<y>,<z>
  [03] crear un objeto
  	<modelo>,<x>,<y>,<z>
- los siguientes bites incluyen los datos de los parametros requeridos por cada uno.