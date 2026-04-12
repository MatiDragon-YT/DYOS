# DYOS — Design Your Own Script

DYOS es una herramienta avanzada para crear **escenas, misiones y cinemáticas programables** en Grand Theft Auto: San Andreas.

El proyecto está orientado a facilitar la creación de contenido interactivo mediante un sistema de scripting y herramientas internas diseñadas para modders.

[![YouTube](https://img.shields.io/youtube/channel/subscribers/UCIqJ7P_fLvULqvmsDagJBjA?style=for-the-badge)](https://youtube.com/c/MatiDragon)
[![Discord](https://img.shields.io/discord/911487285990674473?style=for-the-badge)](https://discord.gg/wjZGrmAXNu)

---

# Características

DYOS permite crear y controlar múltiples elementos del juego desde una interfaz integrada.

### Gestión de entidades

* Crear y editar **actores**
* Crear y editar **vehículos**
* Crear y editar **objetos**
* Generar **partículas y efectos**

### Control del jugador

* estadísticas
* equipamiento
* habilidades
* estados especiales

### Control del mundo del juego

* clima y tiempo
* físicas del juego
* generación de entidades

### Sistema de cámara

* animaciones
* seguimiento
* efectos visuales
* control de foco

### Creación de contenido

* escenas
* misiones
* cinemáticas
* secuencias animadas

---

# Arquitectura interna (DYOS 3)

A partir de la versión **3.0**, DYOS introduce una arquitectura más modular basada en dos sistemas principales.

## VMS — Variable Memory System

VMS es el sistema interno de gestión de variables del mod.

Utiliza buffers de memoria dinámica para reemplazar el modelo tradicional de variables globales y locales.

Beneficios:

* gestión centralizada de memoria
* mayor estabilidad
* acceso estructurado a datos
* base para futuras optimizaciones del runtime

---

## SMX — Script Mission Executor

SMX es el motor interno responsable de ejecutar scripts dinámicos dentro de DYOS.

Funciones principales:

* carga y ejecución de misiones
* control de flujo de eventos
* ejecución modular de scripts
* aislamiento entre runtime y núcleo del mod

Las misiones se almacenan como archivos `.smx` numerados:

```
0.smx
1.smx
2.smx
9999.smx
```

Todos los datos se guardan en formato binario para mejorar la velocidad de carga.

---

## SPS — Scenario Persistence System

El sistema SPS se mantiene por compatibilidad con versiones anteriores.

Se basa en archivos `.ini` para guardar escenarios, pero su desarrollo ha sido reemplazado progresivamente por el sistema SMX.

---

# Compatibilidad

DYOS funciona en:

* PC
* Android

Requisitos:

* CLEO 5 para PC
* CLEO 4 para Android

---

# Compilación del proyecto

## DYOS 3

El código utiliza herramientas de generación para manejar grandes volúmenes de datos desde el runtime de CLEO.

Se utilizan scripts generados desde **EnchantiIDE**.

Ejemplo:

`const.txt` es generado mediante:

```
enchanti_to_sanny.js
```

---

## Versiones anteriores

DYOS 2 fue desarrollado utilizando:

* Sanny Builder
* archivos de configuración personalizados

Estos permiten trabajar en un entorno de desarrollo adaptado para modding multi-plataforma.

---

# Historial de cambios

Consulta el archivo:

```
HISTORIAL.md
```

para ver todos los cambios del proyecto.

---

# Agradecimientos

Gracias a todos los colaboradores y miembros de la comunidad que han apoyado el desarrollo del proyecto.

Especialmente a:

| Charly248 | El Torius | BROKEN CITY |
| :---: | :---: | :---: |
| [⭐](# 'recomendar canal') [⚙](# 'reportar errores') | [⭐](# 'recomendar canal') [🎁](# 'apoyo economico') [⚙](# 'reportar errores') | [⭐](# 'recomendar canal') [🎁](# 'apoyo economico') |
| **General Abigail** | **Franelo_BD** | **Black Fire 2604** |
| [⭐](# 'recomendar canal') [🎁](# 'apoyo economico') [⚙](# 'reportar errores') | [🎁](# 'apoyo economico') [⚙](# 'reportar errores') | [🎁](# 'apoyo economico') [⚙](# 'reportar errores') |
| **mjsosta** | **Panaplay567** | [**DIEGODEVPY**](https://github.com/DIEGODEVPY) |
| [🎁](# 'apoyo economico') | [🎁](# 'apoyo economico') | [🔨](# 'agregar codigo') |

Y tambien a estos CRACKS:\
```
KJ360            Jose Dz          Dante3401
Ghost2025        PinkiePlay92YT   El Luizito
ErickLoquendo7   JokerLoquendo    B-Dope
VKS              Elurielxdd       Victor_yonshon_dic
```

Y a muchos otros miembros de la comunidad que han contribuido con pruebas, ideas o soporte.