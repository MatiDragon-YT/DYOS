# Historial de Versiones

## **2.0.2** 08/01/2024
### **Cambios;**
  * En Android, el proyecto se actualizo a CLEO4.
    - Por ahora solo se ven los nombres de las animaciones DYOM y DYOS. Util solo para moders.

### **Agregados;**
  * Guion bajo al teclado virtual.

### **Reparaciones;**
  * El teclado virtual, buguea el menu principal del mod.

## **2.0.1** 05/01/2024
### **Reparaciones;**
  * Skins Especiales de PC en Android.

## **2.0.0** 25/12/2023
### **Cambios;**
  * Activacion del mod.
    - Android:
      - Se cambio la extencion `.csi` a `.csa`.
      - Ahora usable fuera de una mision, desde un boton debajo del icono del arma actual.
    - PC:
      - Precionando la tecla `P`.
  * Numero de Elementos posibles de crear, guardar y cargar.
    - Antes en 254.
    - Ahora en 50, para que los dispocitivos con pocos recursos puedan correr el mod.
  * Optimizaciones al cargador de skins especiales y sin reemplazar.
    - Ahora se pueden crear desde el menu para crear Actores, sin tener que ser redirigidos al menu del Jugador.
  * Los Elementos dentro de su modo de edicion, ya no seran resaltados con un marcador si la opacidad del HUD fue editada.
  * Nuevo previsualizador para crear un Actor.
    - Ahora se le cambia la skin al player y si acepta, se crea un Actor con esa skin y se le regresa la skin que usaba el player.
  * Muchos textos en Español pasaron a escribirse en Ingles.
  * Velocidad para crear Elementos aumentada.
    - Ahora podes mantener pulsadas las teclas y el mod abra una pausa constante de 86ms entre cada modelo.
  * Precision aumentada para seleccionar al elemento mas cercano.

### **Agregados;**
  * Poder desactivar el Panel Debug.
    - En PC, precionando la tecla `O`.
    - En Android, pulsando el boton `POWER`.
  * Soporte para usar el menu con el raton.
    - Solo si el panel debug esta activado.
  * Soporte para ingresar un ID de Clima, hasta el numero 2000 o hasta el 999999 escribiendolo.
  * 27 Skins Especiales del juego.
  * Soporte para re-ciclar Slots de Elementos destruidos.
    - Antes usar X Slots y destruir los primeros Slots, el proximo en crear iba a usar el siguiente Slot del numero de ya usados.
    - Ahora se busca un Slot donde un Elemento aya sido destruido, para ocuparlo.
  * Informacion extra al panel de debug.
    - Se ve donde estas pulsando o donde tenes el raton y que tanto lo desplazas hacia los lados.
  * Nueva Tareas para los Actores.
    - Patrullar, hace que el mismo valla de un punto A al punto B.
      - Modo Rapido, no hace nada especial.
        - Soporta varias configuraciones de vehiculos.
      - Modo Pausado, hace una pausa con una animacion al llegar a cada punto.
  * Propio MPACK para usar DYOS con menos problemas.
    - Incluye soporte para Android.
    - Reemplazando directamente la carpeta `<gta sa>/files/data/script/` del juego.
  * Menu completo para crear vehiculos.
    - La lista pasa a verse ordenada del A-Z, con las clases separadas (bicis, aviones, helis, botes, trailers y rc).
    - Este cierra el menu DYOS al crear uno.
  * 341 Animaciones DYOS.
    - Una lista similar a DYOM, con la particular idea de meter todas las animaciones del juego.
  * 5to pack de animaciones (`!5.ifp`)
    - Incluye 12 random.
  * Cuarto tipo de animacion.
    - **Muerte** reproduce una animacion y congela al Actor en el ultimo frame, matandolo a la vez.
    - NOTA: los Actores con la skin 0(cj actual) no se frenan.
  * Actores airdrops.
    - Una nueva propiedad que define el tipo de carga que debe tener un Actor.
    - Hace que el Actor caiga desde una cuerda, de forma similar a la fuerza SWAT del juego.
  * Actores clonados.
    - Crea un Actor copiando de otro Actor: la Skin, Animacion DYOM/DYOS, Arma, propiedad de colicion y airdrop.
    - NOTA: Se toman las coords. del player para aparecer el Actor.
  * Soporte extra para la vida de los Actores.
    - Decapitar y revivir, como si se recreara el Actor.
    - Si son renacibles con los paramedicos, defecto DYOS tendra esto desactivado para que los paramedicos no arruinen las escenas creadas.
  * Reinicio de Escena.
    - Permite que las animaciones se sincronicen y que los Actores que tienen airdrop hagan su animacion sin importar si ya la hicieron antes.
  * Soporte para recuperar la animacion y la arma de los Actores recreados.
  * Soporte para recuperar Elementos anclados.
    - Objetos sobre Actores y vehiculos
    - Actores sobre objetos y vehiculos, incluido si estan sentados dentro de ellos.
  * Soporte para cambiar la velocidad de las rotaciones de los Elementos.
  * Congelar vehiculos, de a 1 o a todos.
    - Bloquea las coordenadas y lo hace solido.
  * Sistema de entrada textual en Android y PC.
    - Nos permite escribir textos cortos.
  * Sistema de entrada numerica.
    - Nos permite escribir numeros en Android.
    - Es accesible desde un boton magico en pantalla con 2 botones extras, uno de `+` para escribir y uno de `-` para borrar.
    - Los numeros se pueden seleccionar, pulsandolos encima o tambien con las flechas de navegacion.
  * Nuevos teclas de acceso rapido.
    - TAB/HOLD: Para movimiento libre.
    - SPACE/QUIT: Para cerrar el menu dyos.
  * Visualizador de propiedades en el menu.
    - Los valores booleanos (encendido/apagado) apareceran con un 0 **Rojo**, o un 1 **Verde**.
    - Los valores de un submenu, de **Azul**.
    - Los valores de duracion de algo, de **Amarillo**.
    - Los valores controlables, de **Violeta**.
  * Sistema de Foco para la Camara.
    - Al tratar de seleccionar un objeto o de moverlo por el mapa, vamos a poder elegir si la camara debe rotar sobre el Elemento o el player.
    - En PC, podesmos usar el Mouse(raton) y tambien los controles de Mando para moverla y acercarla.
    - En Android, simplemente hay que desplazar un dedo sobre la pantalla y listo.
  * Iluminacion de resaltado.
    - Ahora los Elementos que desemos seleccionar, tambien seran resaltados con una luz roja y azul, o con una blanca.
  * Mejoras de optimizacion interna.
  * Botones para reiniciar coords.
    - Al mover un Elemento, ahora con las teclas de funciones especiales(1-5) vamos a poder dirijir los Elementos a las coords 0.0 o a las de player.
  * Nuevo actores "Named".
    - Con estos vamos a crear actores con solo escribir el nombre de cualquier skin agregada.
    - NOTA: Estos aun no se guardan en los archivos .INI.

### **Reparaciones;**
  * El ultimo actor en ser editado, no era recordado. haciendo que siempre editemos al ultimo actor si cometiamos un error.
  * Los Elementos tardan mas de lo normal en salir de la memoria RAM al ser eliminados.
  * Usar la opcion de editar todos los vehiculos y destruirlos, te lleva al menu de los Actores.
  * Los Elementos creados luego de elimar uno, conservan algunos atributos de los eliminados.
  * El player no puede teletransportarse a los Actores.
  * Los Actores especiales y sin reemplazar no se guardan.
  * Al desbloquear las ciudades, los obstaculos de los puentes no desaparecen.
  * Los Elementos que son movidos de forma libre, copian estas coords globales a las locales (las que son para anclar).
  * Los Actores cargados, no recuperan de forma exacta la informacion del chaleco.
  * El visualizador de armadura de los Actores creados se mostraba mal.
  * Cada que se crea una particula, se destruye la ultima.
  * La camara no se restablece al limpiar/eliminar un escenario.
  * El paginador del menu DYOS se bugea si la pagina actual es mayor al numero de paginas disponibles.
  
**Agradecimiento especial a General Abigail, Franelo_BD, Costa, Black Fire 2604 y a Panaplay567 👏**

## **1.5.1** 07/07/2023
### **Agregados;**
  * Limitador de nivel de busqueda.
    - Ajusta el minimo y el maximo permitido.
  * Menu para recrear Actores.
    - Por el momento solo se pueden escoger Skins de Actores pedestres, proximamente estaran las skins especiales y sin reemplazar.

### **Reparaciones;**
  * En Android: encender las luces primarias de los vehiculos, hacia creashear el juego.

**Agradecimiento especial a General Abigail 👏**

## **1.5.0** 28/05/2023
### **Cambios;**
  * Los Actores anclados nuevamente tienen la caracteristica de almacenar las coords. para ajustarlas mejor por si se sale por error.
    - Antes se quito esta opcion, por limitaciones de recursos pero se reagrego denuevo gracias a un nuevo gestor de datos.
  * Nuevo formato en los archivos de guardado.
    - Este ya no es compatible con el antiguo formato, asi que al cargar un escenario viejo, no se recuperara toda la informacion.
  * Controles en PC:
    - Para girar la camara con el menu abierto;
      + Ahora se puede hacer con Ctrl Izquierdo y con Click Derecho.
  * Se renombraron las 2 skins "Desuso 1/2" a "Novia 5 con/sin...".

### **Agregados;**
  * Al sistema de guardado;
    - Los Actores y objetos anclados ya regresan a donde fueron anclados.
    - Los Actores con armas ahora las recuperan.
  * Todas las cinematicas del juego.
    - Se hizo porteando el codigo fuente, del menu de debug incluido en GTA:Definitive Edition.
    - Puede contener algunas que literal no hacen nada.
    - NOTA: Hay cinematicas sin sentido, que fueron echas de prueba por lo que su acceso dependera de la plataforma.
  * Poder guardar y cargador las animaciones DYOM puestas en los Actores.
    - Proximamente se estara añadiendo soporte para las anims. de todas las demas secciones.
  * Visualizador de nivel de estrellas en Android.
  * 4 Interiores nuevos.
    - 3 Estacionamientos de Comisarias
    - 1 Casa de Ballas
  * 14 Skins de Actores especiales.
  * Actor/Armas/Precision;
    - Combate: << 50 >>
    - Punteria: << 50 >>
    - Rango: << 50 >>
  * 45 Animaciones sin remplazar:
    - Del pack #1 de Mjscosta
    - https://youtu.be/P_eSVMyQFb4
    - NOTA: En el futuro se agregaran mas packs adaptados de este video.
  * Opcion para limpiar el escenario.
    - Si ya terminaste de hacer un escenario y queres quitar todo, esta opcion viene a eso.
  * 80 Efectos de particulas.
    - Estan ubicadas en el creador de objetos, con IDs negativos que van desde el -80 hasta el -1.
  * Nueva sistema para crear Elementos:
    - Este te permite ingresar un ID cualquiera, simplemente escribiendolo en el teclado.
    - En PC se usan las teclas numericas del margen superior.
    - IMPORTANTE: Este sistema no detecta el tipo de Elemento al que pertenece cada ID, asi que usala con cuidado.
  * Nuevo sistema para selecionar Elementos, indicando con un numero cual escoger:
    - En PC, con teclas numericas del 1 al 9.
    - En Android, con botones holds del 1 al 5.

### **Reparaciones;**
  * Usar los atajos para crear Actores con skins especiales, crea siempre a CJ.
  * Los objetos se cargan en unas coords mas altas que en las que se guardaron.
  * El tipado de los Actores son incorrectos en la segunda pagina.
  * Los Elementos igual que el jugador se guardan y cargan mal en las escenas.
  * El ajuste de la vida maxima del jugador, reiniciaba la vida actual y hacia posible la muerte del mismo.
    - Ahora ya no se reinicia el numero, aunque muestra un bug con el numero maximo de vida(255) que se visualiza como 254.
    - Fuera del bug, el control funciona bien.
  * En la nueva interfaz de Android, el marcador de vida y armadura se superponen una adelante de la otra.
  * El visualizador de coords.Z del menu, mostraba un punto extra de error estando de pie.
  * Anclar un objeto a coords locales de un Actor, te redirigia al manu para hacerlo con el jugador.

## **1.4.0** 18/04/2023
### **Cambios;**
  * Se revirtieron todos los cambios echo en la version anterior.
    - Esto debido a que el mod quedaba obsoleto en Android.
  * Se elimino la comfiguracion LITE del mod y todos los idiomas.
    - Con la falta de tiempo, ya no puedo dar soporte para estos apartados.
  * Limite de skins sin reemplazar, aumentado hasta los 1200.
  * Limite de elemetos creados, aumentado hasta los 254 por cada tipo.
  * Los controles de PC ya no son adaptativos, por lo que pasas a controlar todo con estas;
    - W/A;
      + Menu: Arriba/Abajo
      + Locacion: Adelante/Atras
      + Camara: Adelante/Atras
    - S,D;
      + Menu: Izquierda/Derecha
      + Locacion: Izquierda/Derecha
      + Camara: Izquierda/Derecha
    - R,F;
      + Menu: Acceder/Retroceder
    - Q,E;
      + Menu: Anterior/Siguiente
      + Locacion: Girar a la Izquierda/Derecha
    - G,H;
    - Y,N;
      + Locacion: Aumentar/Reducir Velocidad
    - Z,X;
      + Camara: Aumentar/Reducir FOV
    - C,Shift;
      + Locacion: Arriba/Abajo
    - Punto,Coma;
    - Space,Tab;
    - 1,2,3,4,5;
      + General: funciones especiales
  * La camara anclada, pasa de trabajar con orbitas 2D(XY) a 3D(XY y XZ).
  * Tiempo para crear Actores reducidos a la mitad.
  * Eliminacion de memoria temporal para guardar coordenadas ancladas a Elementos.
    - Para aumentar la estabilidad del mod y reducir las proabilidades de interferir con datos del juego.
  * La armadura de los personajes ahora se ubica en el apartado de vida, renombrada a `Extra: << 0 >>`.
  * Todos los vehiculos que no cuenten con luz secundaria, activaran la alarma del vehiculo.
    - Solo si estas en PC y con CLEO+ instalado.
    - Si no cuenta con esto, el mod va a funcionar igual que en Android.

### **Agregados;**
  * Visualizador de coords.XYZ, angulo e ID de Interior del jugador en el menu del mod.
  * Sliders(desplazables) para cambiar el nivel de vida de los Actores y el jugador.
  * Ajustador de vida maxima del jugador.
  * Opcion para editar todos los vehiculos.
  * Nuevo sistema interno para almacenar multiples valores BOOLEANS en una variable INT.
    - Esto extiende los limites de las variables INTs como tambien los ARRAY del tipo INT.
    - Esto tambien optimiza mas al mod, haciendo que el numero de variables requeridas se reduzcan.
  * Opcion de poder quitar tatuajes y la ropa del jugador.
  * Nuevas opciones en los apartados de `Vida` del jugador y los Actores;
    - Configurar las inmunindades;
      + contra agua (impide que se ahogue).
      + contra fuego.
      + contra golpes.
      + contra colisiones.
      + contra explociones.
      + contra proyectiles.
    - Sangrado.
    - Configurar la complexion;
      + Gordura.
      + Musculatura.
      + Resistencia.
  * Nuevas opciones al apartado de `Locacion` de los Actores;
    - Congelar.
    - Agachar.
  * Atajos para crear un Actores desde el menu de `Modelo` del jugador.
    - Esto funciona equipandose la skin y luego precionando un boton especial, en windows seria con TAB.
    - Tambien en el menu para crear Actores, tendremos 2 opciones que ir rapido hasta el menu que necesitemos.
    - IMPORTANTE: Estos atajos no recuerdan el punto de origen activado, asi que cancelarlos no los retornaran al mismo punto.

### **Reparaciones;**
  * Algunos tatuajes se repetian.
  * Los nombres de los neumaticos se mostraban incorrectamente.
  * Al darle vida infinita a los Actores, en ocaciones los mataba.
  * El FOV hacia un mini reinicio al anclar la camara a un Elemento.

## **1.3.0** 19/01/2023
### **Cambios;**
  * Skins personales (custom || sin reemplazar).
    - Trae las paginas divididas de a por 10 Slots en vez de 12.
    - La version FULL aumenta el maximo hasta los 1.200.
    - La version LITE reduce el maximo hasta los 100.
  * Desplazamiento por las paginas de los menus.
    - Mantener presionadas por 250ms generara saltos de a 5 paginas.

## **1.2.1** 23/11/2022
### **Cambios;**
  * Ya no se mostraran los datos de locacion al tener el hud invisible.
  * La camara se auto pondra estatica al querer que esta vea siempre un punto.
  * La camara dejara de ser estatica si se ancla a un Elemento.
  * Reajustes en la prevista de Android, sobre las estadisticas del juego.
  * Estar en un vehiculo aero al tele. al marcador, te ara aparecer en el aire.

## **1.2.0** 08/11/2022
### **Cambios;**
  * Widgets reposicionados.
  * Mejoras de anti-crash.

### **Agregados;**
  * `Camara/Locacion/`
    - Ancla. al Actor
    - Ancla. al Jugador
    - Ancla. al Vehiculo

## **1.1.0** 06/11/2022
### **Cambios;**
  * El cargardor de escenario ya recuerda si se lo dejo mirando un Elemento.
  * Claves y valores de textos GXT (archivos .fxt).
  * Las traducciones y doblajes a otros idiomas ya no se llevaran a cabo por mi parte, a excepción del Ingles.
    - Los textos nuevos seran heredados del Ingles.
  * Ubicaciones de los botones.

### **Agregados;**
  * Nuevos metodos de para relocalizar vehiculos.
  * Opcion para editar todo un tipo de Elementos a la vez.
    - Para destruirlos y para invertir el estado solido y visible.
  * Visulizador de datos basicos (vida,chaleco,dinero,tiempo) dentro del menu para Android. 
  * Soporte de numeros decimales al `Visualizador de Coord. XYZ`.
  * Soporte para Android el `Telep. al Marcador`, tambien para usarse desde un interior.
  * Cargador de cinematicas del juego.
  * El sistema de guardado ya recupera el objetivo al que esta mirando.
  * Mas vehiculos al creador de busqueda por seccion.

### **Reparaciones;**
  * El jugador es eliminado si es encontrado dentro de un vehiculo que pasa a ser destruido.
  * No se detecta el vehiculo destruido, al ingresa un Actor, sacarlo y mueverlo por encima del mismo.
  * La vida infinita al jugador se activa cuando la opcion es usada 2 veces.
  * En ocaciones al salir de editar un Elemento, en el menu no aparecia la opcion `Crear` seccionado.
  * El creador de vehiculos por seccion, no deja seleccionada la primera opcion.

## **1.0.0** 01/10/2022
 * Cambios;
  * Activar y desactivar una bandera, recargaran los interiores, para ver los cambios rapido.
  * Se re organizaron algunas claves de textos en los FXT.
  * Optimizacion y organizacion de variables globales.
  * Rango de intensidad del FOV (`Campo de Vision`) aumentado del 100 hasta el 130.
  * Rango de metros de los `Selectores Rapidos` aumentado de los 25 hasta los 75.
  * Rango de modelos de Actores sin reemplazar aumentado de los 48 hasta los 120.
  * Poder activar y desactivar los efectos de camara, pulsando la misma opcion repetidamente.
  * Todas las animaciones que trae el mod ahora estaran en los `!x.IFP`.
 * Agregados;
  * Crear Actores agachados si el jugador lo esta.
  * Sistema anti cierres para los selectores de Elementos.
    * Ahora cuando uno de estos sea borrados accidentalmente, seran salteados.
    * Si el que se elimino, fue el ultimo del tipo elejido, se limpiaran los registros de este.
    * Gracias a esto, se elimino el requisito para borrar los Elementos, que debian ser siempre los ultimos de las listas.
  * Sistema para ajustar el modo de reproduccion de las animaciones.
    * SOLO para animaciones sin reemplazar.
    * Este agrega 3 botones para esto:
    * En PC con las teclas `1`, `2` y `3` del margen superior.
    * En Android, con los botones grises.
    * El #1, para ponerla como primaria, que bloquea los controles y la posicion del Actor.
    * El #2, para ponerla como secundaria, que no bloqua nada y permite combinarlas con los movimientos basicos del Actor.
    * El #3, para ponerla como ininterrumpidas, que solo bloquea los controles.
    * **Importante**: Estos reproductores y no pueden activarse todos a la vez.
    * **Nota**: Para ver mejor los resultados, cambie de animacion y re aplique la misma de antes.
  * Sistema para guardar y cargar escenarios creados con el mod.
    * Juego: velocidad, interior activo.
    * Tiempo: clima, hora, hora estatica.
    * Jugador: coordenadas y angulo.
    * Actores: modelo, tipo, coordenadas, angulo, solidad, vida, armadura, inmunidad y visibilidad.
    * Vehiculos: modelo, coordenadas, rotacion, solidad, vida, colores y pintura.
    * Objetos: modelo, coordenadas, rotacion, solidad y vista.
    * Camara: tambaleo, mareo, agitacion, fov, estatica, seguimiento y filtros.
  * Se agrego un cargador de animaciones sin reemplazar.
    * Para usarla, es necesario que el archivo `IFP` que se usara, use el prefijo `!` con un numero del 4 al 11.
    * Las animaciones que esten dentro del archivo solo deben llamarse `anim`, con un num. del 1 al 12.
  * Poder reiniciar las animaciones precionandolas de nuevo.
  * Poder darle Jetpack al jugador, desde el menu de `Jugador/Armas`.
  * Poder recrear los vehiculos con otra configuracion.
    * Cambio de modelo.
    * Cambio de piezas extras.
    * Cambio de matricula.
  * Nuevas animaciones para los Actores y el jugador.
    * 82 de Parkour (intalando el `!2.ifp`).
    * 12 de RedFish (intalando el `!3.ifp`).
  * Lista de expresiones faciales separadas en la lista de animaciones.
  * Nuevos ajustes en `Camara/Locacion`
    * Poder congelar la posicion, con la direccion hacia donde se ve.
    * Poder fijar un objetivo al que deba mirar siempre la camara.
      * Al jugador, a un Actor, a un vehiculo o a un objeto.
  * Nueva tarea para que los Actores ataquen vehiculos.
  * Traduccion de idioma al Indonecio.
 * Reparaciones;
  * Los vehiculos dan saltos al ir a la opcion de `Neomaticos`.
  * El jugador recibe el chaleco antibalas que eran para los Actores.
  * El resaltador de Elementos no se actualizaba de inmediato al entrar a la opcion para seleccionar un objetivo.
  * Los vehiculos se iban volando infinitamente cuando se los alejaba un poco del jugador con la opion de locacion.
  * La camara no hace zoom al apuntar con las ARs (AK47 y M4).
  * Parpadeo ocacional en la vision de los efectos de la camara.
  * Los numeros de capas de pintura no se visualizaban en Android.
  * El modo caos no se aplicaba correctamente en el juego.
  * Al salir de `Actor/Vida` se seccionaba erroneamente `Chaleco`.
  * El ID de las lista de animaciones dyom empezaban siempre desde el 0.
  * Las animaciones de Chat de pie, se reproduce mal por las de Ryder y Swat.
  * El mensaje de `No se encontro algun objeto` dice `objecto`.
  * La opcion para quitar tareas no funcionaba si el Actor estaba en modo agresivo.

## **0.4-beta.1** 02/08/2022
 * Agregados;
   * Nuevo sistema de variables para la optimizacion y la estabilidad del mod.
     * Ayudar a corregir desenas de bugs en el desarrollo del mismo.
     * Permite que otros scripts se comuniquen con este, permitiendo extraer y editar informacion sin problema.
       * Solo deve usar las variables CLEO y ver la lista de direcciones en el archivo `src/consts.txt`.
       * Es IMPORTANTE saber que esto es una caracteristica que esta en desarrollo aun, asi que no todas las direcciones funcionan.
   * Ajustes de la poblacion del juego.
     * Desactivar el trafico de aves.
     * Desactivar el trafico de aviones.
     * Desactivar el trafico de trenes.
     * Desactivar el trafico de emergencias.
     * Desactivar el trafico de polis en motos.
     * Desactivar el trafico de polis en autos.
     * Desactivar el trafico de pandillas.
     * Desactivar la generacion de Actores.
     * Desactivar la generacion de vehiculos.
   * Controles de banderas del juego.
     * Entrar libre a las casas.
     * Entrar libre a las ciudades.
     * Taxis con nitros.
     * Guerras de pandillas.
     * Ambiente caotico.
   * La lista completa de animaciones DYOM para el jugador y los Actores.
     * Use la edicion IX en lugar de la 8.1 original para que tengan un total de 423.
     * En PC mejore el visualizador de ID, para mostrar el archivo IFP y el nombre de la animacion que se esta usa.
     * Podes navegar entre toda la biblioteca de 1 en 1 o de 10 en 10 con los controles de movimiento.
 * Reparaciones;
   * Los vehiculos no podian encender sus luces desde el menu del mod.
   * Los objetos no podian habilitar la propiedad de destruible.
   * Los objetos no podian anclarse y moverse a sectores especificos de los Actores.
   * Los objetos al anclarse a vehiculos y pasar a rotarlo en 3D se iban a coords. super lejanas.
   * Los Actores al anclarse a vehiculos se movian a las coords. globales 0.0 0.0 0.0.
   * Los Actores en ocasiones cerraban el juego al usar las tareas de rutas.
   * Los climas eran siempre cambiados al congelar el tiempo.
   * La pantalla hacia zooms en algunas ocaciones que molestaban la vista al usuario.
 * Agradecimiento especial a [El Mago Loquendo](https://www.youtube.com/channel/UCF3BpeueGc4YogbmO7BcS-g)

## **0.3-beta.7** 29/06/2022
 * Cambios;
   * Prefijo de las skin sin remplazar `a_dyos` a `@`.
     * Esto por que estas no pueden tener nombres con mas de 7 caracteres y ocasionaba problemas.
   * La opcion de normalizar la vista de la camara, ahora tambien restablece los efectos de movimientos.
 * Agregados;
   * Traduccion completa al Ingles y una parcial al Portugues.
   * Control de velocidad del juego.
   * Control de la opcidad del hud.
     * Solo en Android reemplazando la funcion de Vision limpia por esta misma.
   * 12 Animcaciones para el jugador y los Actores de Pool.
 * Reparaciones;
   * Las skins personalizadas cerraban el juego tras pasar el slot #9.
   * Los Elementos en ocasiones se creaban con una de las coords. en 0.0, dificultando el ID que usabamos.
 * Agradecimiento especial a [El Mago Loquendo](https://www.youtube.com/channel/UCF3BpeueGc4YogbmO7BcS-g)

## **0.3-beta.6** 24/06/2022
 * Agregados;
   * Auto entrar y solidificar vehiculos al crearlos.
   * Configurador de campo de vision para la camara.
   * Seccion de tuning en la edicion de vehiculos, incluyen los siguientes:
     * Cambio de capa de pinturas, con soporta para hasta 4 capas.
     * Cambio de colores, con soporte de 1 hasta 4.
       * Dentro del juego solo hay 3 vehiculos con esta caracteristica; camper, cement, squalo.
       * Los hacen mods de vehiculos, podria echarle un ojo a esta funcionalidad. 
     * Cambio de nitro x2, x5, x10 y sin ninguno.
     * Cambio de tubo de escapes, entre 29 variables.
     * Cambio de parachoque frontal y trasero, entre 22 variantes.
     * Cambio de tamaño de las ruedas y la forma, entre 18 variables.
   * Opcion para centrar la camara a los Elementos creados en el modo de movimiento libre.
     * En PC con el boton de salto.
     * En Android con un boton alojado en la esquina superior derecha.
   * Lista de aviones y helicopteros para crear.
   * Sonidos de navegacion para la interaccion con el menu en Android.
   * Nuevos niveles de vida para los Actores, que van del 200 hasta el 5000.
   * Cambiar la presicion de los Actores al atacar (en Actor/Editar/Armas/Presicion).
     * El rango va de porcentaje, en la proabilidad de que atine un disparo.
 * Reparaciones;
   * El jugador quedaba bloquado en una pos. luego de usar las opciones de ruta.
 * Agradecimiento especial a [BROKEN CITY](https://www.youtube.com/channel/UCvA_rTdzV9lsOt91uu8WfEA)

## **0.3-beta.5** 12/06/2022
 * Cambios;
   * Los controles de desplazamiento en Android fueron adaptados al esquema estandar de los mods de control de camara.
 * Agregados;
   * Nuevo efecto de mareo para la camara.
   * Segundo slot para anclar objetos a una posicion local de un Actor/jugador.
 * Reparaciones;
   * Los Elementos no podian ser re-localizados en otro sitios.

## **0.3-beta.4** 07/06/2022
 * Cambios;
   * El boton de seleccion cercana aumento su rango de 5 a 25 metros y ahora tambien activara el menu de edicion al usarla.
     * Esta funcion aumenta el tiempo de busqueda a medida que el jugador esta mas lejos del Elemento objetivo y mientras mas ayan de estos.
     * Se elimino el boton que permitia congelar el juego.
   * En Android ahora los botones de cambio de pagina seran visibles unicamente cuando se pueda ir hacia otras.
     * Es decir, que si no puedes ir mas lejos, ese boton no aparecera y quedara solo visible el de regreso.
   * Algunos botones visuales de Android fueron re ubicados para simplificar algunas tareas y para mejorar la interpretacion de cada uno.
 * Agregados;
   * Controles adaptativos para los desplazamientos que se hacen con las opciones de Movimiento Libre.
     * Quiere decir que estos ya no estaran en relacion al Norte del juego, sino a la de los modelos.x
   * Al crear un Elemento, ahora en Android se visualizara un boton para ejecutar el antiguo metodo de creacion de los mismos.
   * Detener la hora del juego.
   * Rango aumentado de los modelos de objetos a alrededor de 3.500, desde el 321 hasta el 4000 para crear.
     * Incluye 2 botones para cambiar entre IDs de 100 en 100, en PC con los cambios de armas y en Android con unas flechas blancas.
   * Poder rotar los objetos en los ejes XYZ.
     * El eje X aveces suele hacer parpadear al modelo, al llegar a un grado de rotacion de 90° y -90°.
     * Tambien desde este apartado es posible cambiar la escala de estos.
   * Hacer rompibles a los objetos.
     * De la forma en la que chocamos algo de madera o un poste de luz.
     * Esto no funciona en todos los IDs de los modelos, solo en algunos...
       (mira esta lista https://dev.prineside.com/en/gtasa_samp_model_id/customsearch/?c%5B%5D=1&s=id-asc&tg=1&bc=-1&bb=1&bt=-1&ba=-1)
   * Hacer recogibles a los objetos.
     * De la forma en la entramos a la sub-mision de robar casas.
   * Poder anclar al jugador a la posicion de un vehiculo y tambien los Actores a objetos.
   * Poder reparar los vehiculos desde el apartado de vida.
     * Util para cuando entrarmos a ellos estando explotados, para agregarla la rueda faltante.
   * Cambiar la visibilidad de las ruedas de los vehiculos.
   * Enceder luces primarias y secundarias de los vehiculos.
   * Dar y quitar suspencion hidraulica a los vehiculos.
   * Submenu selectivo para crear vehiculos mediante la busqueda por tipo.
     * Aun no estan todos los vehiculos, estaran de rojo las secciones inaccesibles por esto.
   * Lista de slots de skins personales, extendida a los 48.
   * Poner la vida del jugador en 1 y Infinita.
   * Poner los chalecos en 0.
     * Por el momento solo para PC.
   * En Actor/Tarea/Seguir ruta/ se agrego Conduciendo que es para que el Actor entre a un vehiculo y valla por una ruta.
   * Teletransportar Actores y objetos a la posicion de un Elemento.
   * Poder anclar al jugador a la posicion de un vehiculo y tambien los Actores a objetos.
 * Reparaciones;
   * La intencidad de la agitacion de la camara no pasaba del 1.
   * Los tambaleos pemanecian desactivados al entrar al Movimiento Libre de cualquier Elemento.
   * El juego se congelaba al navegar entre la lista de IDs de los Objetos.
   * En Android, los Actores no atacaban al jugador desde las tareas.
   * El Jugador no podia entrar a vehiculos para dejar puntos de ruta.
     * En PC si estas conducciendo, debes precionar el boton de **Disparo Secundario**.
   * El menu de creacion de veh. por ID, hacia un salto de mas al cancelar la seleccion.

## **0.3-beta.3** 21/05/2022 [video](https://youtu.be/oP32CneiY0o)
 * Agregados;
   * Control de velocidad para los desplazamientos que hacen desde las opciones de locacion.
     * PC: Con los botones de cambio de armas.
     * Android: Con botones puestos a un borde de la pantalla.
   * Cargador de Actores sin registro, desde **Jugador/Modelo/Personal**.
     * Renombrando los modelos asi: `a_dyos<un  numero del 1 al 12>` como `a_dyos1.dff`, `a_dyos2.dff`, etc...
 * Reparaciones;
   * El jugador parpadeaba en algunas secciones del menu.

## **0.3-beta.2** 19/05/2022
 * Cambios;
   * Los Elementos que crees ahora abriran de forma predeterminada su menu de edicion.
   * Sí retrocedes cuando estas creando un Elemento, este se destruira a menos que preciones lo contrario.. para acceder.
 * Reparaciones;
   * El jugador quedaba congelado al entrar y salir del modo de Movimiento libre.
   * Los vehiculos salian volando tras acceder al modo de Movimiento libre de un Actor o el jugador.
   * Los Elementos se desplazaban mas rapido o mas lento dependiendo de los FPS.
     * El movimiento libre y la rotacion de las puertas de los vehiculos.
   * Las tareas contra el jugador no podian asignarse.
     * Solucionado solo para PC. En Android esto hace que los botones sean dificiles de precionar.

## **0.3-beta.1** 17/05/2022
 * Cambios;
   * La solidificacion de Actores, ahora puede ajustar los colores al cambiar el clima y la hora.
   * El numero de municiones de un Actor aumenta al infinito.
   * Se ensancho el menu del mod junto con los carteles de informacion.
     * SOLO EN PC: para que textos mas largos pudieran entrar sin problemas en ellos.
 * Agregados;
   * Nuevo orden para los botones de navegacion en Android.
     * Con esto todas las personas podran tener los mismos controles sin importar de si tienen o no el `control.csi`.
     * Estos controles estan un poquito mas adaptados para pantallas grandes como de 6.8" hasta 1080 x 2400 px .
   * Tarea para que el Actor pueda seguir una ruta.
   * Un boton gris en los modos de seleccion, para fijarse al Elemento mas cercano al jugador.
     * Esto esta limitado a un rango de 5 metros.
   * Poder des/activar la visualizacion de los Elementos de la interfaz del juego.
   * Poder detener todo el juego, para sincronizar animaciones que las requieran.
   * Poder anclar Actores a vehiculos.
     * La iluminacion de los Actores no puede ser arregla despues de usar esta funcion, a menos que pases a la posicion libre.
   * Poder aplicar efectos visuales a la camara del juego.
     * Vision nocturna y termica.
     * Tambaleo y agitacion, con control personalizable
       * Con los botones grises Izquierda a Derecha para controlar la magnitud de los efectos y Abajo para restablecer.
   * 120 Animcaciones para el jugador y los Actores:
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
   * El boton gris que aparecia para crear Actores, no cumplia su funcion de crear el Actor con la skin del jugador.
   * Al abrir y cerrar el menu sobre un vehiculo, este quedaba inaccesible y sacaba al jugador del mismo.
   * Las paginas indicaban un numero incorrecto de animaciones.
   * Los botones para pasar de un modelo de 10 en 10 no funcionaba en el Jugador y mostraban paginacion erroneamente.
   * El mod no dejaba usar los controles si lo abrías y cerravas dentro de un vehículo.
 * Agradecimiento especial a [Charly248](https://www.youtube.com/channel/UC9II0cboupHb57eaQei2xcg)

## **0.2-beta.2** 11/05/2022 [video](https://youtu.be/2cxGoBfw7Vs)
 * Cambios;
   * La rotacion de los Actores y del jugador ahora seran un 50% mas rapidas.
   * El radar (minimapa) se mostrara siempre que entres a alguna opcion que desactive el menu.
   * Aumento en el limite de ID de los modelos de objetos.
 * Agregados;
   * Poder usar los Actores especiales del juego desde las config. del jugador.
   * 39 animaciones nuevas para el jugador y los Actores.
     - 21 de playa.
     - 18 de "cafe suave".
 * Reparaciones;
   * Las paginas de animaciones se abrian solas.
   * Palabras mal escritas, como `Objeto` que era `Obiecto` y otras.
   * Las tareas de los Actores generaban una copia del menu inutilizable.
   * La camara no se podia repocisionar desde el menu.
     * En PC manteniendo presionado el click izquierdo.
     * En Android dando doble tap al 7 y manteniendolo presionado.

## **0.2-beta.1** 06/05/2022 [video](https://youtu.be/yq_b7MpV5eQ)
 * Traduccion al español del mod.
 * Poder avanzar y retroceder de a 10 en los ID, desde Android.
 * Poder teletransportar al jugador a la posicion algun Elemento creado.
    * Si solo hay uno del tipo elejido, la trasladacion se hace directa, si son más podras elejir a cual.
 * Poder meter a los Actores y al jugador a un vehiculo.
 * 69 animaciones nuevas para el jugador y los Actores.
   - 19 de sentado.
   - 21 de chat en vehiculos.
   - 29 de chat a larga distancia.
 * Nuevos botones de navegacion para android.
 * Nuevos mensajes de cargando.
 * Poder elegir el modelo del Actor al momento de crearlo, de Izquierda a Derecha.
   * En Android podras usar el viejo mecanismo, presionando un boton gris en la pantalla, en PC con el boton de Accion.
 * Poder cambiarle el tipo de Actor a los creados.
   * Entre pedestre(el predeterminado), gangter, criminal, prostituta, mafioso, policia, etc.
   * Pero borrano toda la informacion establecida, a exepcion de la posicion, vida y chaleco.
 * Poder vajar la vida de los Actores a 0 y ponerlas en infinito.
 * Poder elejir entre 10 estilos de caminata nuevas para los Actores.
 * Poder selecionar Actores objetivos en las tareas de entre ellos.
 * Reparaciones;
   * La navegacion por las secciones de armas comenzaba siempre desde la posicion 0 al retornar un apartado.
   * Los objetos no podian accederse rapido desde el selector, precionando para acceder.
   * Los Elementos creados al editar su rotacion, mostraba la Coord.X en lugar del angulo Z.

## **0.1-beta.9** 1/05/2022 [video](https://youtu.be/kXanJRiou80)
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
   2. La tarea de matar en el primer Actor.
     - Impedia y enloquecia al mismo con un fantasma, que lo hacia golpear al aire.
   3. Super movimientos 3D en Android.
     - Impedia tener una posicion precisa a la de PC, con desplazamientos brutos.
     - Ahora se debe mantener precionado el 1 para tener ese efecto al tocar las otras areas.
   4. Desplazamiento no accionado en vehiculos.
     - Se movia siempre hacia el sur, de forma in voluntaria.

## **0.1-beta.8** 27/04/2022 [video](https://youtu.be/jDzB5fiYIVY)
 * Poder selecionar la edicion de un Elemento creado anteriormente.
   * Puede precionar el boton de retroceso o de acceder para entrar al modo de edicion.
   * Esto tiene un detalle.. que para eliminar, debes empezar desde el ultimo.
   * La seleccion queda guarda al cerrar el menu, por si se desea editar ese Actor rapido.
 * Poder teletrasportar al jugador a un interior.
 * Poder cambiar los tatuajes del jugador.
 * Poder cambiar la visibilidad de los Elementos.
 * Poder cambiar el estilo de caminata y corrida de los Actores.
 * Poder cambiar el tiempo del juego.
 * Poder guardar la partida del juego.
 * Poder animar correctamente al jugador si se encuentra inamovible.
 * Poder reiniciar la skin del jugador al estado por defecto de CJ.
 * Quitar la animacion colocada a un Actor.
 * Poder hacer que un Actor mire, siga, apunte o mate a alguien.

## **0.1-beta.7** 23/04/2022 [video](https://youtu.be/oJeuRUthiVs)
 * Más optimizacion en el flujo de trabajo.
 * Unas cuantas mejoras para los Actores.
   * Repare las animaciones de los Actores.
     * Para que no desplacen los pies sobre el suelo.
   * Poder darle armas a los Actores.
   * Poder cambiar el nivel de vida
   * Poder cambiar el nivel del chaleco.
   * Poder cambiar el estilo de pelea.
 * Agregue 9 animaciones más para los Actores y el jugador. 

## **0.1-beta.6** 22/04/2022 [video](https://youtu.be/irtWzKorSX0)
 * Agregue la posibilidad de poder animar a los Actores que creemos.
 * Agregue 42 animaciones nuevas, disponible para el jugador y los Actores.
 * Mejore el flujo de trabajo, tras pasar las 3.000 líneas de codigo, con subdivisiones por archivos.

## **0.1-beta.5** 21/04/2022 [video](https://youtu.be/HnY7z4DcloE)
 * El jugador, y los Elementos creados ahora pueden ser re-posicionados.
   * En Android, para moverlos de Norte a Sur con 4 y 6, de Este a Oeste con 2 y 8, y de Arriba a Abajo con 7 y 9. Luego si precionas 5, podras rotarlo de Izquierda a derecha con 2 y 8.
   * En PC, con los controles que tengan asignados para moverse por el mapa, de Norte a Sur, de Este a Oeste y con el boton de Agacharse para Abajo, y el de Accion para Arriba.
 * Se agregaron 11 animaciones extras para el jugador.
 * Se soluciono el crasheo al tratar de modificar algo a una distancia super lejana.

## **0.1-beta.4** 20/04/2022 [video](https://youtu.be/DTP5YYTuZfI)
 * Ya podes solidificar los objetos creados.
 * El objeto que vayas a modificar, ahora se resalta con un marcador.
 * Se soluciono el crasheo al ejecutar el mod en algunas versiones de Android.
 * Se corrigio la ubicacion del indicador de paginas de Android.

## **0.1-beta.3** 19/04/2022 \[no hay video.. fallecio mi gatito\]

### **Agregados;**
  * Nuevo sistema de paginación.
    * Ahora puedes ver secciones con más de 10 Elementos, distribuida por partes como 1/1, 1/2 y más.
    * Con la navegacion equivalente a la que se usa para cambiar el modelo del jugador.
    * Puede entrar a ver animaciones de Chat & Coffe, donde se usan.
  * Nuevos mensaje de ayuda, para las cosas que podrian, cuando ó no funcionar.
  * Los Actores que crees, ahora tomaran el modelo del jugador de forma predeterminada.
  * Nueva opción para crear objetos, pero nada en especial.

## **0.1-beta.2** 18/04/2022 [video](https://youtu.be/uHTmJWqXUZY)

### Opciones para el jugador:
  * Poner cambiar la animacion entre 52 opciones
  * Teletransportarse al marcador puesto en el mapa
  * Ponerse innamovible
  * Ponerse traspasable

======================================================================

**### DYOS v0.1.0** 17/04/2022 [video](https://youtu.be/VItwJUozhVc)

### Opciones para el jugador:
  * Cambiar nivel de vida entre 25, 50, 75 y 100%.
  * Cambiar nivel de armadura entre 25, 50, 75 y 100%.
  * Cambiar el estilo de pelea.
  * Cambiar el nivel de busqueda.
  * Cambiar la skin.
  * Ponerse con una de 10 animacion.
  * Ponerse con armas.

Para lo demas, nada.