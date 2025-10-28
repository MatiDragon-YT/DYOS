# IMPORTANTE

Aqui encontraras la documentacion del este proyecto, las reglas que debes seguir y cualquier dato que debes tener en cuenta si planeas contribuir con el codigo del proyecto.

[Comandos](#Comandos)
[Variables](#Variables)


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

**`call @WaitPlis 2 <time> <showPages>`**
Este comando nos permite hacer `wait <time>` con la opcion de que comando de los anterior mostrado queremos ejecutar.
```
call @WaitPlis 2 <time> <showPages>
```
**Parametros**
* INT  time - Tiempo de espera en milisegundos.
* BOOL showPages - Indica si se debe imprimir el paginado.

## Variables

No uses variables globales a menos que se las requieran si o si.
Hay constantes en el codigo del proyecto que podes usar para interactuar con cosas, como en scripts comunes:
```
hChar = &28(30@,1i) = 0
hPlayer = &20(30@,1i) = Player.GetActor(hChar)
hGroup = &32(30@,1i) = Player.GetGroup(hChar)
```

En Android y PC hay cosas que cambian, como el TIMERA o ONMISSION, asi que para tener esos valores, podes hacer esto:
```
call @GET_TIMER 0 <any variable>

if ON_MISSION()
then <body of condition>
end
```

Hay varibles locales (n@) que no debes usar bajo ninguna sircunstancia.
`30@`