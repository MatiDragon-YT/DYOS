# RFC-0002 – Binary Format

## Status
**Stable**

## RFC ID
RFC-0002

## Title
Mini-SCM Binary Format Specification

## Author
MatiDragon

## Last Update
2026-01-01

---

## 1. Abstract

This RFC defines the **binary format** used by the Mini-SCM Engine to store and execute custom missions.

It specifies:
- binary layout
- command encoding
- parameter encoding
- opcode interpretation rules

This document does **not** define execution semantics (see RFC-0001).

---

## 2. Scope

This RFC covers:
- mission binary structure
- opcode layout
- parameter encoding rules
- command boundaries
- versioning mechanism

Out of scope:
- execution logic
- condition evaluation
- offset editing rules
- jump correction algorithms

---

## 3. Endianness

- All multi-byte values are encoded in **little-endian** format.
- This applies to:
  - integers
  - floats
  - offsets
  - identifiers

---

## 4. Mission Binary Overview

A mission binary is a **linear byte stream** composed of commands.

There is:
- no global header
- no fixed command table
- no padding between commands

Commands are read sequentially using offsets.

---

## 5. Command Layout

Each command in the binary follows this general layout:

```
[VERSION: u16]
[OPCODE:  u16]
[PARAMS:  variable]
```

---

## 6. Version Field

### 6.1 Description

- The first 2 bytes of every command define the **version identifier**.
- This allows:
  - legacy behavior
  - backward compatibility
  - alternative decoding rules

### 6.2 Type

```
VERSION: uint16
```

### 6.3 Rules

- The engine MUST read the VERSION field before decoding the command.
- The VERSION field does not affect execution flow directly.
- Unsupported versions MAY trigger legacy or fallback behavior.

---

## 7. Opcode Field

### 7.1 Description

- The opcode defines the command type.
- Opcodes are interpreted **relative to the VERSION** field.

### 7.2 Type

```
OPCODE: uint16
```

### 7.3 Rules

- Opcode values are not globally fixed across versions.
- The engine MUST resolve the opcode using the active VERSION context.
- Unknown opcodes result in undefined behavior.

---

## 8. Parameters Section

### 8.1 General Rules

- Parameters immediately follow the opcode.
- Parameter count and size depend on the opcode.
- There is no explicit parameter count stored in the binary.

---

### 8.2 Parameter Types

Common parameter types include:

```
int8,  uint8
int16, uint16
int32, uint32
float32
offset (uint32)
```

---

### 8.3 Variable-Length Commands

- Commands may have different byte lengths.
- Command boundaries are determined by:
  - opcode definition
  - parameter layout

There is no delimiter between commands.

---

## 9. Command Boundary Determination

The engine determines the end of a command by:

1. Reading VERSION
2. Reading OPCODE
3. Consulting the opcode definition
4. Reading the expected number of parameter bytes

The next command begins immediately after the last parameter byte.

---

## 10. Sequential Reading Model

The default reading model is:

```
offset = mission_start

while offset < mission_end:
    read VERSION
    read OPCODE
    read PARAMS
    execute command
    offset += command_size
```

---

## 11. End of Mission

The mission is considered finished when:
- the read offset reaches or exceeds the binary size
- or execution jumps outside the binary bounds

No explicit END opcode is required.

---

## 12. Alignment and Padding

- Commands are **not aligned** to fixed boundaries.
- No padding bytes are allowed.
- All bytes are considered meaningful.

---

## 13. Error Handling

The following cases result in undefined behavior:
- truncated commands
- invalid parameter sizes
- unknown opcode-version combinations
- malformed binaries

The engine MAY abort execution silently.

---

## 14. Design Constraints

The binary format is designed to be:
- compact
- sequential
- easy to edit by offset shifting
- friendly to binary patching

---

## 15. Compatibility and Extensions

- New versions MAY introduce new opcodes or parameter layouts.
- Existing binaries MUST remain valid under their declared VERSION.
- Any breaking change MUST increment VERSION.

---

## 16. Security Considerations

- The engine assumes trusted binaries.
- No bounds checking beyond binary size is guaranteed.
- Malformed binaries may crash execution.

---

## 17. Conclusion

This RFC defines a minimalistic, versioned binary format for Mini-SCM missions.

Execution behavior is defined separately in RFC-0001.

Any behavior not explicitly defined here is considered **undefined behavior**.

---
