# Mini-SCM Engine – Reglas y Modelo de Ejecución

Este documento define **las reglas formales** del mini motor SCM implementado en CLEO para la ejecución de misiones personalizadas en formato binario.

El objetivo del motor es **simplicidad, determinismo y edición segura de comandos**, no compatibilidad total con el SCM original de GTA.

---

## 1. Modelo General del Motor

- El motor ejecuta misiones leyendo un archivo binario.
- Los comandos se ejecutan **en orden secuencial**, según offsets.
- El motor **no avanza automáticamente**: solo avanza cuando las condiciones lo permiten.
- La ejecución se realiza en un **bucle por frame** (un solo `wait 0`).

---

## 2. Formato de Lectura del Binario

Cada comando en el binario se interpreta de la siguiente forma:

1. Se leen **2 bytes iniciales** para identificar:
   - versión del formato
   - modo legacy o compatibilidad
2. Se leen **2 bytes de opcode**
3. Según el opcode:
   - se leen los parámetros necesarios
   - se ejecuta el comando
4. El motor repite el proceso hasta:
   - fin del binario
   - o salto explícito de offset

---

## 3. Tabla de Offsets (Edición del Script)

- Al cargar la misión, el motor puede generar una **tabla de offsets**:
  - cada entrada apunta al inicio de un comando
- Esto permite:
  - insertar comandos
  - eliminar comandos
  - mover comandos
  - reordenar secuencias

### Regla clave
> El binario **se desplaza físicamente** cuando se insertan o eliminan comandos.  
> No existen IDs lógicos de comandos, solo offsets reales.

---

## 4. Saltos y Seguridad

- Los saltos se basan en offsets absolutos o relativos.
- Al insertar o eliminar comandos:
  - los saltos posteriores deben ajustarse según el desplazamiento de bytes
- Si un salto apunta fuera del binario:
  - la misión se da por finalizada
  - no se considera un error crítico

---

## 5. Modelo de Condiciones

### 5.1 Principio Fundamental

> Todas las condiciones de un bloque **deben poder evaluarse completamente dentro de un mismo frame**.

No existen:
- condiciones persistentes
- condiciones con memoria
- condiciones acumulativas entre frames

---

## 5.2 Estructura Lógica

Ejemplo de script lógico:

```js
COND_A
COND_B
COND_C
IF AND 3
```

- Las condiciones no avanzan el flujo
- El IF decide si se avanza o no

---

## 6. Algoritmo de Evaluación de Condiciones

### Variables internas

```js
total_conditions   // número de condiciones a evaluar
true_count         // cuántas devolvieron TRUE en este frame
```

### Algoritmo

```js
while true:

    true_count = 0

    for i in 0..total_conditions-1:
        if condition_i == TRUE:
            true_count++

    if true_count == total_conditions:
        avanzar_offset()
        break

    wait 0
```

## 7. Semántica de IF

### IF AND

- El flujo avanza solo si todas las condiciones son TRUE en el mismo frame

```js
true_count == total_conditions
```

### IF OR

- El flujo avanza si al menos una condición es TRUE en el frame

```js
true_count >= 1
```

## 8. Reglas Estrictas del Sistema de Condiciones

✔ Todas las condiciones se evalúan una sola vez por frame
✔ El contador de TRUEs se reinicia en cada frame
✔ No se permite acumulación entre frames
✔ No se guarda identidad de condiciones
✔ El usuario no puede saber qué condición falló

## 9. Condiciones Permitidas

Las condiciones deben ser atómicas y deterministas.

Ejemplos válidos:

- `actor.health > X`
- `variable == value`
- `flag == 1`
- `position == XYZ` (evaluación instantánea)

## 10. Condiciones No Soportadas (por diseño)

No se garantiza funcionamiento correcto con:

- inputs de un solo frame (teclas)
- random por frame
- timers acumulativos
- animaciones
- eventos con estado
- lógica “A y luego B”

Estas restricciones son intencionales.

## 11. Filosofía del Motor

Simplicidad antes que universalidad

- Determinismo antes que flexibilidad
- Edición binaria segura
- Ejecución predecible
- Modelo claro para el usuario

> Este mini-SCM no intenta replicar el SCM original de GTA,
sino ofrecer un lenguaje de misiones simple, editable y estable.

## 12. Límites

- Máximo recomendado de condiciones por IF: 32
- Ejecución por frame: 1 evaluación completa
- Sin paralelismo lógico

## 13. Conclusión

Este diseño prioriza:

- claridad
- control
- ausencia de estados ocultos

Cualquier extensión futura (condiciones persistentes, eventos, ventanas temporales)
requiere un modelo distinto, no una modificación menor.