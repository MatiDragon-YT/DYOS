# RFC-0001 – Mini-SCM Execution Model

## Status
**Stable**

## RFC ID
RFC-0001

## Title
Mini-SCM Execution Model

## Author
MatiDragon

## Last Update
2026-01-01

---

## 1. Abstract

This RFC defines the **execution model** of the Mini-SCM Engine implemented in CLEO.  
It specifies how commands are executed, how conditions are evaluated, and under which rules the execution flow advances.

The model prioritizes:
- determinism
- simplicity
- frame-based evaluation
- safe binary editing

This document does **not** define the binary format itself (see RFC-0002).

---

## 2. Scope

This RFC covers:
- execution loop semantics
- frame-based evaluation
- condition blocks
- IF / AND / OR behavior
- execution flow advancement rules

Out of scope:
- binary layout
- opcode encoding
- offset recalculation rules
- memory allocation strategies

---

## 3. Terminology

- **Command**: An executable instruction read from the mission binary.
- **Condition**: A command that evaluates to TRUE or FALSE.
- **Frame**: A single execution cycle delimited by a `wait 0`.
- **Offset**: Byte position within the mission binary.
- **Advance**: Moving the execution pointer to the next command offset.
- **Condition Block**: A group of condition commands followed by an IF command.

---

## 4. General Execution Model

- The engine executes inside an infinite loop.
- One execution pass corresponds to **one frame**.
- The engine does **not automatically advance**.
- Advancing the execution pointer requires explicit authorization by control logic (e.g. IF).

---

## 5. Frame-Based Loop

The engine execution loop is defined as:

```
while true:
    execute current command(s)
    wait 0
```

All logic evaluated before `wait 0` belongs to the **same frame**.

---

## 6. Conditions Model

### 6.1 Fundamental Rule

> All conditions in a condition block **must be evaluated completely within the same frame**.

The engine does **not** support:
- condition persistence across frames
- accumulation of condition results
- partial condition evaluation

---

### 6.2 Condition Block Structure

Logical script representation:

```
COND_A
COND_B
COND_C
IF AND 3
```

- Condition commands do not advance execution.
- The IF command determines whether execution advances.

---

## 7. Internal Condition Evaluation State

The engine maintains the following internal variables per frame:

```
total_conditions   // number of conditions expected
true_count         // number of conditions returning TRUE in this frame
```

These variables are reset **every frame**.

---

## 8. Condition Evaluation Algorithm

The reference algorithm is defined as:

```
while true:

    true_count = 0

    for i in 0 .. total_conditions - 1:
        if condition_i == TRUE:
            true_count++

    if true_count == total_conditions:
        advance_execution_offset()
        break

    wait 0
```

---

## 9. IF Semantics

### 9.1 IF AND

Execution advances **only if all conditions return TRUE in the same frame**.

```
true_count == total_conditions
```

---

### 9.2 IF OR

Execution advances if **at least one condition returns TRUE in the frame**.

```
true_count >= 1
```

---

## 10. Reset Rules

- `true_count` MUST be reset at the start of every frame.
- No condition state is preserved between frames.
- Each frame is evaluated independently.

---

## 11. Supported Condition Characteristics

Conditions MUST be:
- deterministic
- stateless
- frame-atomic

Examples of valid conditions:
- variable comparisons
- health or value thresholds
- direct position checks
- flag equality

---

## 12. Unsupported Condition Characteristics

The following are explicitly unsupported by this execution model:
- input events lasting one frame
- random chance conditions
- timers or accumulated time checks
- animation states
- event-driven logic
- sequential logic (A then B)

Such behavior is considered **undefined** under this RFC.

---

## 13. Limits

- Maximum recommended conditions per IF block: **32**
- One full condition evaluation per frame
- No parallel condition groups

---

## 14. Design Philosophy

The Mini-SCM Execution Model favors:
- clarity over flexibility
- determinism over expressiveness
- explicit rules over implicit behavior

This engine is **not intended** to replicate the original GTA SCM execution model.

---

## 15. Compatibility and Future Extensions

Any future extension introducing:
- persistent conditions
- event-driven logic
- temporal windows

MUST be defined in a **new RFC** and MUST NOT alter the rules defined in this document.

---

## 16. Conclusion

This RFC establishes a strict, frame-based execution model designed for simplicity, safety and predictability.

Any behavior not explicitly defined here is considered **undefined behavior**.

---
