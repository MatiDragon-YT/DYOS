# RFC-0003 – Offset Editing & Jumps

## Status
**Stable**

## RFC ID
RFC-0003

## Title
Mini-SCM Offset Editing and Jump Handling

## Author
MatiDragon

## Last Update
2026-01-01

---

## 1. Abstract

This RFC defines how the Mini-SCM Engine handles **offset-based editing and jump instructions** within mission binaries.

It specifies:
- offset tables
- command insertion and deletion
- binary shifting rules
- jump adjustment behavior
- out-of-bounds handling

This document does **not** define execution semantics (see RFC-0001)  
nor binary encoding details (see RFC-0002).

---

## 2. Scope

This RFC covers:
- offset indexing
- binary mutation rules
- jump correction strategies
- execution redirection

Out of scope:
- opcode definitions
- condition logic
- memory allocation internals

---

## 3. Terminology

- **Offset**: Absolute byte position within the mission binary.
- **Offset Table**: Ordered list of command start offsets.
- **Jump**: A command that redirects execution to a target offset.
- **Binary Shift**: Byte displacement caused by insertion or deletion.
- **Affected Region**: Binary range impacted by an edit operation.

---

## 4. Offset Table

### 4.1 Description

- The engine MAY generate an offset table at load time.
- Each entry points to the **start of a command**.
- The table is strictly ordered and monotonic.

Logical representation:

```
offset_table = [offset_0, offset_1, offset_2, ...]
```

---

### 4.2 Purpose

The offset table enables:
- command insertion
- command deletion
- command reordering
- direct execution jumps

No command IDs exist beyond offsets.

---

## 5. Editing Operations

### 5.1 Command Insertion

When inserting a command:

1. The binary is expanded at the insertion offset.
2. All bytes after the insertion point are shifted right.
3. New offsets are recalculated accordingly.

---

### 5.2 Command Deletion

When deleting a command:

1. The command byte range is removed.
2. All subsequent bytes are shifted left.
3. Offsets after the deleted command are updated.

---

### 5.3 Command Movement

Command movement is defined as:
- deletion at source offset
- insertion at target offset

---

## 6. Binary Shift Rules

Let:

```
delta = inserted_bytes - removed_bytes
```

Then:
- offsets **after** the edit position MUST be adjusted by `delta`
- offsets **before** the edit position MUST remain unchanged

---

## 7. Jump Instructions

### 7.1 Definition

A jump instruction redirects execution to a target offset.

```
JUMP target_offset
```

The target offset is an absolute byte position.

---

### 7.2 Jump Resolution

- Jump targets are resolved at runtime.
- The engine sets the execution offset to `target_offset`.

---

## 8. Jump Adjustment on Edit

When a binary edit occurs, all jump targets MUST be examined.

### 8.1 Forward Jumps

If:
- jump_offset < edit_offset
- target_offset > edit_offset

Then:
- target_offset MUST be adjusted by `delta`

---

### 8.2 Backward Jumps

If:
- jump_offset > edit_offset
- target_offset < edit_offset

Then:
- target_offset MUST remain unchanged

---

### 8.3 Jumps Crossing Edited Region

If a jump target crosses the affected region:

- the target offset MUST be adjusted to preserve logical destination
- adjustment MAY be positive or negative depending on `delta`

---

## 9. Jumps Targeting Deleted Commands

If a jump targets the start of a deleted command:

- the target offset implicitly resolves to the next valid command
- execution continues normally

If no valid command exists:
- the mission terminates

---

## 10. Out-of-Bounds Jumps

If a jump target:
- is less than zero
- or exceeds the binary size

Then:
- execution is immediately terminated
- the mission is considered finished
- no error is raised

---

## 11. Execution Redirection via Offset Table

The engine MAY redirect execution by:
- resolving an offset from the offset table
- setting the execution pointer explicitly

This allows:
- conditional redirection
- loop constructs
- manual flow control

---

## 12. Loops

Loops are implemented via jumps:

```
JUMP offset_X
```

There is:
- no loop counter opcode
- no implicit loop construct

All loops are explicit and offset-based.

---

## 13. Safety Guarantees

The following guarantees are provided:
- offset table remains ordered
- binary integrity is preserved
- no partial commands exist after edits

The engine does **not** guarantee:
- infinite loop detection
- jump sanity validation
- logical correctness of scripts

---

## 14. Design Philosophy

The offset and jump model favors:
- raw control
- binary-level transparency
- minimal abstraction
- predictable mutation behavior

There are no symbolic labels or IDs.

---

## 15. Compatibility and Extensions

Any future extension introducing:
- symbolic jump labels
- relative jumps
- structured loops

MUST be defined in a new RFC and MUST NOT alter the rules defined here.

---

## 16. Conclusion

This RFC defines a strict, offset-based model for binary editing and jump handling.

All control flow is explicit, absolute and mutable via binary shifts.

Any behavior not explicitly defined here is considered **undefined behavior**.

---
