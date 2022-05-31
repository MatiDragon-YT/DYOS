## Historial de Versiones

### **0.3-beta.4** --/05/2022
 * Cambios;
   * El boton de seleccion cercana aumento su rango de 5 a 25 metros y ahora tambien activara el menu de edicion al usarla.
     * Esta funcion aumenta el tiempo de busqueda a medida que el jugador esta mas lejos del elemento objetivo y mientras mas ayan de estos.
     * Se escondio el boton que permitia congelar el juego.
   * Poder darle la vuelta completa a la lista de IDs.
   * En Android ahora los botones de cambio de pagina seran visibles unicamente cuando se pueda ir hacia otras.
     * Es decir, que si no puedes ir mas lejos, ese boton no aparecera y quedara solo visible el de regreso.
 * Agregados;
   * Opcion para anclar al jugador a la posicion de un vehiculo.
     * En mi opinion no sirve de mucho, y deja algo bugeado los controles, pero se solucionan al entrar al Movimiento Libre.
   * Al crear un elemento, ahora en Android se visualizara un boton para ejecutar el antiguo metodo de creacion de los mismos.
   * En `Actor/Tarea/Seguir ruta/` se agrego **Conduciendo** que es para que el actor entre a un vehiculo y valla por una ruta.
   * Submenu selectivo para crear vehiculos mediante la busqueda por tipo.
   * Poder poner la vida del jugador en **1** y **Infinita**.
     * En Android es del todo inmune a las caidas.
   * Poder detener la hora del juego.
   * Aumento en el rango de IDs de objetos a alrededor de 1.000 para crear.
     * Ahora la lista va desde el 321 hasta el 1327
 * Reparaciones;
   * La intencidad de la agitacion de la camara no pasaba del 1.
   * Los tambaleos pemanecian desactivados al entrar al Movimiento Libre de cualquier elemento.
   * El juego se congelaba al navegar entre la lista de IDs de los Objetos.
   * En Android, los actores no atacaban al jugador desde las tareas.
   * El Jugador no podia entrar a vehiculos para dejar puntos de ruta.
     * En PC si estas conducciendo, debes precionar el boton de **Disparo Secundario**.

### **0.3-beta.3** 21/05/2022
 * Agregados;
   * Control de velocidad para los desplazamientos que hacen desde las opciones de locacion.
     * PC: Con los botones de cambio de armas.
     * Android: Con botones puestos a un borde de la pantalla.
   * Cargador de actores sin registro, desde **Jugador/Modelo/Personal**.
     * Renombrando los modelos asi: `a_dyos<un  numero del 1 al 12>` como `a_dyos1.dff`, `a_dyos2.dff`, etc...
 * Reparaciones;
   * El jugador parpadeaba en algunas secciones del menu.

### **0.3-beta.2** 19/05/2022
 * Cambios;
   * Los elementos que crees ahora abriran de forma predeterminada su menu de edicion.
   * Sí retrocedes cuando estas creando un elemento, este se destruira a menos que preciones lo contrario.. para acceder.
 * Reparaciones;
   * El jugador quedaba congelado al entrar y salir del modo de Movimiento libre.
   * Los vehiculos salian volando tras acceder al modo de Movimiento libre de un actor o el jugador.
   * Los elementos se desplazaban mas rapido o mas lento dependiendo de los FPS.
     * El movimiento libre y la rotacion de las puertas de los vehiculos.
   * Las tareas contra el jugador no podian asignarse.
     * Solucionado solo para PC. En Android esto hace que los botones sean dificiles de precionar.

### **0.3-beta.1** 17/05/2022
 * Cambios;
   * La solidificacion de actores, ahora puede ajustar los colores al cambiar el clima y la hora.
   * El numero de municiones de un actor aumenta al infinito.
   * Se ensancho el menu del mod junto con los carteles de informacion.
     * SOLO EN PC: para que textos mas largos pudieran entrar sin problemas en ellos.
 * Agregados;
   * Nuevo orden para los botones de navegacion en Android.
     * Con esto todas las personas podran tener los mismos controles sin importar de si tienen o no el `control.csi`.
     * Estos controles estan un poquito mas adaptados para pantallas grandes como de 6.8" hasta 1080 x 2400 px .
   * Tarea para que el actor pueda seguir una ruta.
   * Un boton gris en los modos de seleccion, para fijarse al elemento mas cercano al jugador.
     * Esto esta limitado a un rango de 5 metros.
   * Poder des/activar la visualizacion de los elementos de la interfaz del juego.
   * Poder detener todo el juego, para sincronizar animaciones que las requieran.
   * Poder anclar actores a vehiculos.
     * La iluminacion de los actores no puede ser arregla despues de usar esta funcion, a menos que pases a la posicion libre.
   * Poder aplicar efectos visuales a la camara del juego.
     * Vision nocturna y termica.
     * Tambaleo y agitacion, con control personalizable
       * Con los botones grises Izquierda a Derecha para controlar la magnitud de los efectos y Abajo para restablecer.
   * 120 Animcaciones para el jugador y los actores:
     * 26 de Mecanica.
     * 22 de Charly248 (instalando `dyos.ifp` en `gta3.img`).
     * 17 de Crack.
     * 14 de Camara.
     * 12 de Bar.
     * 11 de Bat.
     * 11 de Motocierra.
     *  3 de Chat de pie.
     *  3 de Sentado.
     *  1 de Fumado.
 * Reparaciones;
   * El boton gris que aparecia para crear actores, no cumplia su funcion de crear el actor con la skin del jugador.
   * Al abrir y cerrar el menu sobre un vehiculo, este quedaba inaccesible y sacaba al jugador del mismo.
   * Las paginas indicaban un numero incorrecto de animaciones.
   * Los botones para pasar de un modelo de 10 en 10 no funcionaba en el Jugador y mostraban paginacion erroneamente.
   * El mod no dejaba usar los controles si lo abrías y cerravas dentro de un vehículo.

### **0.2-beta.2** 11/05/2022 [video](https://youtu.be/2cxGoBfw7Vs)
 * Cambios;
   * La rotacion de los actores y del jugador ahora seran un 50% mas rapidas.
   * El radar (minimapa) se mostrara siempre que entres a alguna opcion que desactive el menu.
   * Aumento en el limite de ID de los modelos de objetos.
 * Agregados;
   * Poder usar los actores especiales del juego desde las config. del jugador.
   * 39 animaciones nuevas para el jugador y los actores.
     - 21 de playa.
     - 18 de "cafe suave".
 * Reparaciones;
   * Las paginas de animaciones se abrian solas.
   * Palabras mal escritas, como `Objeto` que era `Obiecto` y otras.
   * Las tareas de los actores generaban una copia del menu inutilizable.
   * La camara no se podia repocisionar desde el menu.
     * En PC manteniendo presionado el click izquierdo.
     * En Android dando doble tap al 7 y manteniendolo presionado.

### **0.2-beta.1** 06/05/2022 [video](https://youtu.be/yq_b7MpV5eQ)
 * Traduccion al español del mod.
 * Poder avanzar y retroceder de a 10 en los ID, desde Android.
 * Poder teletransportar al jugador a la posicion algun elemento creado.
    * Si solo hay uno del tipo elejido, la trasladacion se hace directa, si son más podras elejir a cual.
 * Poder meter a los actores y al jugador a un vehiculo.
 * 69 animaciones nuevas para el jugador y los actores.
   - 19 de sentado.
   - 21 de chat en vehiculos.
   - 29 de chat a larga distancia.
 * Nuevos botones de navegacion para android.
 * Nuevos mensajes de cargando.
 * Poder elegir el modelo del actor al momento de crearlo, de Izquierda a Derecha.
   * En Android podras usar el viejo mecanismo, presionando un boton gris en la pantalla, en PC con el boton de Accion.
 * Poder cambiarle el tipo de actor a los creados.
   * Entre pedestre(el predeterminado), gangter, criminal, prostituta, mafioso, policia, etc.
   * Pero borrano toda la informacion establecida, a exepcion de la posicion, vida y chaleco.
 * Poder vajar la vida de los actores a 0 y ponerlas en infinito.
 * Poder elejir entre 10 estilos de caminata nuevas para los actores.
 * Poder selecionar actores objetivos en las tareas de entre ellos.
 * Reparaciones;
   * La navegacion por las secciones de armas comenzaba siempre desde la posicion 0 al retornar un apartado.
   * Los objetos no podian accederse rapido desde el selector, precionando para acceder.
   * Los elementos creados al editar su rotacion, mostraba la Coord.X en lugar del angulo Z.

### **0.1-beta.9** 1/05/2022 [video](https://youtu.be/kXanJRiou80)
 * Poder mover la camara del juego, estando en el menu.
   - En PC solo si estas de pie, por que se generan conflictos en los controles.
 * Poder elegir el modelo del vehiculo y objeto que queremos crear.
   * De momento de forma basica:
     - Izquierda y Derecha para pasar de 1 en 1. 
     - Arriba y Abajo o manteniendo pulsadas las mismas por 300ms para pasar de 10 en 10.
       - En Android solo con la segunda opcion, para no choca con el control de la camara.
   * Permite crear el mismo modelo, sin tener que buscarlo de nuevo.
   * La opcion de objetos, no tiene ID bloqueados por lo que alguno puede congelar el juego.
 * Poder cambiar los estados de las puertas de los vehiculos.
   * Bloqueo, apertura, daño y visibilidad.
 * Poder cambiar la vida de los vehiculos.
 * Poder darle y quitarle dinero al jugador.
   * Ubicada en la opcion de Clothe, por que nunca le di funcion.
 * Algunos cuadros de mensajes extras y nueva longitud en el cuadro de info. de coords y angulo.
 * Reparaciones;
   1. Desplasamiento de una seccion de animaciones del jugador.
     - Impedia el acceso al ultimo grupo y hacia que el sececcionado, sea el grupo anterior
   2. La tarea de matar en el primer actor.
     - Impedia y enloquecia al mismo con un fantasma, que lo hacia golpear al aire.
   3. Super movimientos 3D en Android.
     - Impedia tener una posicion precisa a la de PC, con desplazamientos brutos.
     - Ahora se debe mantener precionado el 1 para tener ese efecto al tocar las otras areas.
   4. Desplazamiento no accionado en vehiculos.
     - Se movia siempre hacia el sur, de forma in voluntaria.

### **0.1-beta.8** 27/04/2022 [video](https://youtu.be/jDzB5fiYIVY)
 * Poder selecionar la edicion de un elemento creado anteriormente.
   * Puede precionar el boton de retroceso o de acceder para entrar al modo de edicion.
   * Esto tiene un detalle.. que para eliminar, debes empezar desde el ultimo.
   * La seleccion queda guarda al cerrar el menu, por si se desea editar ese actor rapido.
 * Poder teletrasportar al jugador a un interior.
 * Poder cambiar los tatuajes del jugador.
 * Poder cambiar la visibilidad de los elementos.
 * Poder cambiar el estilo de caminata y corrida de los actores.
 * Poder cambiar el tiempo del juego.
 * Poder guardar la partida del juego.
 * Poder animar correctamente al jugador si se encuentra inamovible.
 * Poder reiniciar la skin del jugador al estado por defecto de CJ.
 * Quitar la animacion colocada a un actor.
 * Poder hacer que un actor mire, siga, apunte o mate a alguien.

### **0.1-beta.7** 23/04/2022 [video](https://youtu.be/oJeuRUthiVs)
 * Más optimizacion en el flujo de trabajo.
 * Unas cuantas mejoras para los actores.
   * Repare las animaciones de los actores.
     * Para que no desplacen los pies sobre el suelo.
   * Poder darle armas a los actores.
   * Poder cambiar el nivel de vida
   * Poder cambiar el nivel del chaleco.
   * Poder cambiar el estilo de pelea.
 * Agregue 9 animaciones más para los actores y el jugador. 

### **0.1-beta.6** 22/04/2022 [video](https://youtu.be/irtWzKorSX0)
 * Agregue la posibilidad de poder animar a los actores que creemos.
 * Agregue 42 animaciones nuevas, disponible para el jugador y los actores.
 * Mejore el flujo de trabajo, tras pasar las 3.000 líneas de codigo, con subdivisiones por archivos.

### **0.1-beta.5** 21/04/2022 [video](https://youtu.be/HnY7z4DcloE)
 * El jugador, y los elementos creados ahora pueden ser re-posicionados.
   * En Android, para moverlos de Norte a Sur con 4 y 6, de Este a Oeste con 2 y 8, y de Arriba a Abajo con 7 y 9. Luego si precionas 5, podras rotarlo de Izquierda a derecha con 2 y 8.
   * En PC, con los controles que tengan asignados para moverse por el mapa, de Norte a Sur, de Este a Oeste y con el boton de Agacharse para Abajo, y el de Accion para Arriba.
 * Se agregaron 11 animaciones extras para el jugador.
 * Se soluciono el crasheo al tratar de modificar algo a una distancia super lejana.

### **0.1-beta.4** 20/04/2022 [video](https://youtu.be/DTP5YYTuZfI)
 * Ya podes solidificar los objetos creados.
 * El objeto que vayas a modificar, ahora se resalta con un marcador.
 * Se soluciono el crasheo al ejecutar el mod en algunas versiones de Android.
 * Se corrigio la ubicacion del indicador de paginas de Android.

### **0.1-beta.3** 19/04/2022 \[no hay video.. fallecio mi gatito\]
 * Nuevo sistema de paginación.
   * Ahora puedes ver secciones con más de 10 elementos, distribuida por partes como 1/1, 1/2 y más.
   * Con la navegacion equivalente a la que se usa para cambiar el modelo del jugador.
   * Puede entrar a ver animaciones de Chat & Coffe, donde se usan.
 * Nuevos mensaje de ayuda, para las cosas que podrian, cuando ó no funcionar.
 * Los actores que crees, ahora tomaran el modelo del jugador de forma predeterminada.
 * Nueva opción para crear objetos, pero nada en especial.

### **0.1-beta.2** 18/04/2022 [video](https://youtu.be/uHTmJWqXUZY)

Para el jugador:
 * Poner cambiar la animacion entre 52 opciones
 * Teletransportarse al marcador puesto en el mapa
 * Ponerse innamovible
 * Ponerse traspasable

### **0.1-beta.1** 17/04/2022 [video](https://youtu.be/VItwJUozhVc)

Para el jugador:
 * Poder cambiar la vida entre 4 opciones
   (25, 50, 75 y 100 %)
 * Poder cambiar el chaleco entre 4 opciones
   (25, 50, 75 y 100 %)
 * Poder cambiar entre todas las armas
 * Cambiar el estilo de pelea
 * Cambiar el nivel de busqueda
 * Cambiar el modelo del skin
 * Poner cambiar la animacion entre 10 opciones

Para lo demas, nada.
