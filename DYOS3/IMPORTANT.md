# IMPORTANTE

Aqui encontraras la documentacion del este proyecto, las reglas que debes seguir y cualquier dato que debes tener en cuenta si planeas contribuir con el codigo del proyecto.

## Comandos

### Wait
Lo primero que debes saber, es que esta estrictamente prohibido el uso del comando `WAIT <time>`.
En su lugar usa `Wait0()` o `WaitMenu()` o `call @WaitPlis 2 <time> <prints>`, esto con el fin de evitar que los subprocesos se desactiven en lo que termina el WAIT tradicional.

**`Wait0()`**
Ejecuta `wait 0` sin detener los subprocesos. 
```
:Wait0
    FixUpdate()
    wait 0
return
```

**`WaitMenu()`**
Hace lo mismo que el anterior, pero si estas con el menu de DYOS abierto, este evita que el sistema de Paginacion parpadee.
```
:WaitMenu
	FixUpdate()
	Menu_Print_Pagination()
	wait 0
return
```

**`call @WaitPlis 2 <time> <prints>`**
Este comando nos permite hacer `wait <time>` con la opcion de que comando de los anterior mostrado queremos ejecutar.
```
call @WaitPlis 2 <time> <prints>
```
* INT  time - Tiempo de espera en milisegundos.
* BOOL prints - Indica si se debe imprimir el paginado.