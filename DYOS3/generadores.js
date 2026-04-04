/* ===========================
   EJEMPLO DE USO
=========================== */

const input = `
    enum Menu
        PLAYER
        ACTOR
        VEHICLE
        OBJECT
        CAMERA
        GAME
        SCENE
        MISSION
        DUMMYA
        DUMMYB
        HOTKEY
        SETTING
    end

    int CURRENT_PLATFORM
    int CURRENT_PAGE
    int NUMBER_PAGE
    int CURRENT_TIME_IN_MS
    int DYOS_VERSION

    int hEntityHighlighter
    int hPlayer
    int _SELECTED
    int hChar
    int hGroup
    int hPanel // hay que adaptar todo el codigo, sino da error si usamos esta variable
    int CURRENT_ANIM_ID
    int LAST_ID

        DIR_DYOS = v$DIR_DYOS
        IFP_FILE = v$IFP_FILE
        IFP_ANIM = v$IFP_ANIM

    int LOOP_ANIM
    int ANIM_NOT_IS_OF_PED

    object tempvar
        float X_coord
        float Y_coord
        float Z_coord
        float Angle
    end

    struct Vec3
        float x
        float y
        float z
    end
    
    object Player_Memoize
        Vec3 pos
        float angle
        int interior
        int flags
    end

    int Active_Interior
    
    int LAST_THROTTLE_TIME
    int THROTTLE_INTERVAL

    enum PLAYER_PROP 
        COLISION
        IMMUNITION_BULLETS
        IMMUNITION_FIRE
        IMMUNITION_EXPLOSION
        IMMUNITION_COLLISION
        IMMUNITION_MELEE
        BLEEDING
        DROWN_AT_WATER
        ATTACHED
        FREEZE_POSITION
        CROUCH
        MAINTAIN_POSITION
    end

    int DYOS_FLAGS
        CAMARA_CINEMATICA = 0
        DEBUG_MODE = 1
    int __A
    int __B
    int __C
    int __D
    int __E
    float __Af
    float __Bf
    float __Cf
    float __Df
    float __Ef

    object FILE
        int HANDLE
        int SIZE
        int OFFSET
        int COMMAND
        int VERSION
        int EXIST
    end

    object WAIT
        int INFO
        int ERROR
        int DEFAULT
        int DEBUG // util
    end

    int GAME_MODE
    float DEBUG_CURSOR_X
    float DEBUG_CURSOR_Y
    int PLAYER_ANIM_LIB
            PLAYER_ANIM_LIB_NONE = 0
            PLAYER_ANIM_LIB_DYOS = 1
            PLAYER_ANIM_LIB_DYOM = 2
    int PLAYER_ANIM_ID

    int DYOS_HELP_ID
        HELP_SCM = v$HELP_SCM
    int PLAYER_FIGHT

    // # SMX
    object SMX
        int BUFFER_MAIN     // start of buffer SMX
        int BUFFER_OFFSETS  // table offsets (for GOTO/GOSUB)
        int CURRENT_OFFSET  // current offset in reading
        int IF_ACTIVE       // TRUE or FALSE
        int IF_TYPE         // 0 = AND, 1 = OR
        int ENTER_CONDITION // total of conditions
        int IF_TRUE         // truthy conditions
        int IF_FALSE_JUMP   // offset's jump
        int CONT_CONDITION
        int START_CONDITION
        int TEMP_OFFSET

        int IN_CONDITION_BLOCK // bool → estoy escribiendo condiciones
        int COND_START_OFFSET // int  → offset de la 1ra condición
        int IF_EMITTED // bool → ya inserté el IF
        int COMMAND_IS_CONDITIONAL
        int ACTOR_TO_KILL
    end
    // #

    enum BUFFER
        MARKERS
        SPHERES
        BLIPS
        VEHICLES
        OBJECTS
        PARTICLES
        PICKUPS
        ACTORS
        SEARCHLIGHT
        ACTORS_DEADS
        TARGET_SPHERES
        TARGET_BLIPS
    end
    CURRENT_NUMBER_OF_BUFFERS = sizeof(BUFFER)

    MAX_CONDITIONS = 32
    MAX_ITEMS_BY_TYPE = 50

    //int SMX_BUFFER_MARKERS

    object SMX_BUFFER
        int VEHICLES
        int OBJECTS
        int PARTICLES
        int PICKUPS
        int ACTORS
        int SPHERES
        int BLIPS
        int TARGET_SPHERES
        int TARGET_BLIPS
    end

    object SMX_INDEX : SMX_BUFFER
    end

    object SMX_NUM : SMX_BUFFER
    end

    object SMX
        int VEHICLE
        int OBJECT
        int PARTICLE
        int PICKUP
        int ACTOR
        int BLIP
        int SPHERE
        int TARGET_SPHERE
        int TARGET_BLIP
    end
    

    //int SPS_BUFFER_SPHERES
    //int SPS_BUFFER_BLIPS

    object SPS_BUFFER
        int VEHICLES
        int OBJECTS
        int PARTICLES
        int PICKUPS
        int ACTORS
    end

    object SPS_INDEX : SPS_BUFFER
    end

    object SPS_NUM : SPS_BUFFER
    end

    object SPS
        int VEHICLE
        int OBJECT
        int PARTICLE
        int PICKUP
        int ACTOR
    end

    int SMX_A
    int SMX_B
    int SMX_C
    int SMX_D
    int SMX_E
    int SMX_F
    int SMX_G
    int SMX_H
    int SMX_I
    int SMX_J
    int SMX_K
    int SMX_L
    int SMX_M
    int SMX_N
    int SMX_O
    int SMX_P
    int SMX_Q
    int SMX_R
    int SMX_S
    int SMX_T
    int SMX_U
    int SMX_V
    int SMX_W
    int SMX_X
    int SMX_Y
    int SMX_Z

    float SMX_Af > SMX_A
    float SMX_Bf > SMX_B
    float SMX_Cf > SMX_C
    float SMX_Df > SMX_D
    float SMX_Ef > SMX_E
    float SMX_Ff > SMX_F
    float SMX_Gf > SMX_G
    float SMX_Hf > SMX_H
    float SMX_If > SMX_I
    float SMX_Jf > SMX_J
    float SMX_Kf > SMX_K
    float SMX_Lf > SMX_L
    float SMX_Mf > SMX_M
    float SMX_Nf > SMX_N
    float SMX_Of > SMX_O
    float SMX_Pf > SMX_P
    float SMX_Qf > SMX_Q
    float SMX_Rf > SMX_R
    float SMX_Sf > SMX_S
    float SMX_Tf > SMX_T
    float SMX_Uf > SMX_U
    float SMX_Vf > SMX_V
    float SMX_Wf > SMX_W
    float SMX_Xf > SMX_X
    float SMX_Yf > SMX_Y
    float SMX_Zf > SMX_Z

    int DYOS_ACTOR_STATS

    enum B_ACTOR
        HANDLE
        ACU_WPON
        ACU_MLLE
        ACU_DIST
        REP_ANIM
        IFP_FILE
        IFP_ANIM
        STY_FGHT
        STY_WALK
        LCOORD_X
        LCOORD_Y
        LCOORD_Z
        LCOORD_A
        ATTACHED_TO
        TYPE
        GENERATION
        MODEL_SPECIAL
        FLAGS  // byte of 0 to 32
        MODEL
        TASK_ID 
        TARGET_HANDLE
        ID
    end
    ACTOR_NUM_PROPERTIES = sizeof(B_ACTOR)

    enum GENERATION
        NORMAL
        SPECIAL
        CUSTOM
        RANDOM
        ROPE_NORMAL
        ROPE_SPECIAL
        ROPE_CUSTOM
        ROPE_RANDOM
    end
    enum ACTOR_PROP
        SURECTION
        COLISION
        VISION
        IMMUNITION_BULLETS
        IMMUNITION_FIRE
        IMMUNITION_EXPLOSION
        IMMUNITION_COLLISION
        IMMUNITION_MELEE
        BLEEDING
        DROWN_AT_WATER
        ATTACHED
        FREEZE_POSITION
        CROUCH
        MAINTAIN_POSITION
        PLAY_ANIM_DYOM
        IS_IN_SMX
    end

    int VK_BUFFER // experimental

    int CURRENT_MODE // 0 = SCENE, 1 = MISSION
    int VK_CTRL_LOCK
    int VK_BUFFER_CURRENT_STATE // experimental

    int LATEST_ACTOR_MODEL
    int LATEST_CAR_MODEL
    int LATEST_OBJECT_MODEL

    int ACTOR_LAST_SELECTED
    int CAR_LAST_SELECTED
    int OBJECT_LAST_SELECTED

    int EXIST_ELEMENT_ILUMINATED
    enum ELEMENT_ILUMINATED 
        NONE
        ACTOR
        VEHICLE
        OBJECT
        PLAYER
    end

    int FOCUS_LIGHT_MODE
    enum FOCUS_LIGHT
        NONE
        DAY
        NIGHT
    end

    int MODEL_PLAYER
    int INPUT_MODE // 0 = selección, 1 = input numérico
    int ACTOR_MODEL_REQ
    int ACTOR_MODEL_BEFORE

    int NUM_PRESSED_AT_ANDROID

    object PRESSE_DONCE
        int WINDOWS
        int ANDROID
        int OFFSET
    end

    int TEMP_FLAGS
`;

const pipeline = [
    expandObjects,
    compileEnums,
    generatePointers
];

const output = runPipeline(input, pipeline);

console.log(output.text);



function createState(inputText) {
    return {
        lines: inputText.split(/\r?\n/).map((text, index) => ({
            text,
            originLine: index + 1,
            sourceLine: index + 1
        })),
        text: inputText
    };
}

function stateFromLines(lines) {
    return {
        lines,
        text: lines.map(line => line.text).join("\n")
    };
}

function normalizeState(input) {
    if (typeof input === "string") return createState(input);

    if (input && Array.isArray(input.lines)) {
        if (typeof input.text !== "string") {
            return stateFromLines(input.lines);
        }
        return input;
    }

    throw new Error("Estado inválido del pipeline");
}

function runPipeline(input, transforms) {
    let state = normalizeState(input);

    for (const fn of transforms) {
        state = normalizeState(fn(state));
    }

    return state;
}

function createSizeofResolver(...resolvers) {
    return (name) => {
        const key = name.toLowerCase();

        for (const resolver of resolvers) {
            const result = resolver(key);
            if (result !== null && result !== undefined) return result;
        }

        return null;
    };
}

function getCodeOnly(text) {
    return (text || "").split("//")[0];
}

function findUnresolvedSizeofs(input) {
    const state = normalizeState(input);
    const hits = [];

    state.lines.forEach((line) => {
        const codeOnly = getCodeOnly(line.text);
        const re = /sizeof\s*\(([^)]+)\)/gi;
        let match;

        while ((match = re.exec(codeOnly)) !== null) {
            hits.push({
                line: line.originLine,
                col: match.index + 1,
                expr: match[1].trim(),
                text: line.text.trim()
            });
        }
    });

    return hits;
}

function assertNoUnresolvedSizeof(input, stage = "final") {
    const hits = findUnresolvedSizeofs(input);

    if (!hits.length) return;

    const details = hits
        .map(h => `L${h.line}, C${h.col}: sizeof(${h.expr}) -> ${h.text}`)
        .join("\n");

    throw new Error(
        `[${stage}] Quedaron sizeof sin resolver:\n${details}`
    );
}

function contextError(stage, line, message) {
    const where = line?.originLine != null
        ? `L${line.originLine}${line.sourceLine != null && line.sourceLine !== line.originLine ? ` (from L${line.sourceLine})` : ""}`
        : "L?";

    const preview = line?.text ? `\n${where}: ${line.text}` : "";

    throw new Error(`[${stage}] ${message}${preview}`);
}

function splitCodeAndComment(text) {
    const index = text.indexOf("//");

    if (index === -1) {
        return {
            code: text.trim(),
            comment: ""
        };
    }

    return {
        code: text.slice(0, index).trim(),
        comment: text.slice(index + 2).trim()
    };
}

function expandObjects(input) {
    const state = normalizeState(input);
    const lines = state.lines;
    const output = [];

    const stack = [];
    const objectDefs = new Map();

    for (const line of lines) {

        const indent = (line.text.match(/^\s*/) || [""])[0];
        const trimmed = line.text.trim();

        // =========================
        // OBJECT START (con herencia)
        // =========================
        const start = trimmed.match(/^object\s+(\w+)(?:\s*:\s*(\w+))?/i);
        if (start) {
            stack.push({
                name: start[1],
                parent: start[2] ? start[2].toLowerCase() : null,
                fields: [],
                indent,
                originLine: line.originLine,
                sourceLine: line.sourceLine
            });
            continue;
        }

        // =========================
        // OBJECT END
        // =========================
        if (trimmed.toLowerCase() === "end" && stack.length) {

            const obj = stack.pop();

            // =========================
            // HERENCIA
            // =========================
            let inheritedFields = [];

            if (obj.parent) {
                if (!objectDefs.has(obj.parent)) {
                    contextError(
                        "expandObjects",
                        {
                            text: line.text,
                            originLine: line.originLine,
                            sourceLine: line.sourceLine
                        },
                        `Objeto padre no definido: ${obj.parent}`
                    );
                }

                inheritedFields = objectDefs.get(obj.parent).map(f => ({ ...f }));
            }

            const allFields = [...inheritedFields, ...obj.fields];

            // =========================
            // EXPANSIÓN
            // =========================
            const expanded = allFields.map(f => ({
                type: f.type,
                name: `${obj.name}_${f.name}`,
                comment: f.comment || "",
                originLine: f.originLine,
                sourceLine: f.sourceLine
            }));

            // guardar definición base
            objectDefs.set(
                obj.name.toLowerCase(),
                allFields.map(f => ({ ...f }))
            );

            // =========================
            // SI ES OBJETO ANIDADO
            // =========================
            if (stack.length) {
                const parent = stack[stack.length - 1];

                expanded.forEach(f => {
                    parent.fields.push({
                        type: f.type,
                        name: f.name,
                        comment: f.comment,
                        originLine: f.originLine,
                        sourceLine: f.sourceLine
                    });
                });

            } else {
                // =========================
                // OUTPUT FINAL
                // =========================
                expanded.forEach(f => {
                    let text = `${obj.indent}${f.type} ${f.name}`;
                    if (f.comment) {
                        text += `   // ${f.comment}`;
                    }

                    output.push({
                        text,
                        originLine: f.originLine,
                        sourceLine: f.sourceLine
                    });
                });
            }

            continue;
        }

        // =========================
        // INSIDE OBJECT
        // =========================
        if (stack.length) {

            if (!trimmed) continue;

            // comentario puro
            if (trimmed.startsWith("//")) continue;

            const { code, comment } = splitCodeAndComment(trimmed);
            if (!code) continue;

            const match = code.match(/^(\w+)\s+(\w+)/i);
            if (!match) continue;

            const type = match[1];
            const name = match[2];

            const current = stack[stack.length - 1];

            // =========================
            // SI ES OTRO OBJECT YA DEFINIDO → ANIDACIÓN POR TIPO
            // =========================
            if (objectDefs.has(type.toLowerCase())) {
                const childFields = objectDefs.get(type.toLowerCase());

                childFields.forEach(f => {
                    current.fields.push({
                        type: f.type,
                        name: `${name}_${f.name}`,
                        comment: f.comment,
                        originLine: line.originLine,
                        sourceLine: f.originLine
                    });
                });

            } else {
                current.fields.push({
                    type,
                    name,
                    comment,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                });
            }

            continue;
        }

        output.push({
            text: line.text,
            originLine: line.originLine,
            sourceLine: line.sourceLine
        });
    }

    return stateFromLines(output);
}

function compileEnums(input) {

    const state = normalizeState(input);
    const lines = state.lines;

    const enumDefs = new Map();
    const processed = [];

    let insideEnum = false;
    let currentEnum = null;

    // =========================
    // PASS 1 — parse enums
    // =========================
    for (const line of lines) {

        const trimmed = line.text.trim();

        const start = trimmed.match(/^enum\s+(\w+)/i);
        if (start) {
            insideEnum = true;
            currentEnum = {
                name: start[1],
                values: [],
                mode: null
            };
            continue;
        }

        if (insideEnum && trimmed.toLowerCase() === "end") {
            enumDefs.set(currentEnum.name.toLowerCase(), currentEnum);
            insideEnum = false;
            currentEnum = null;
            continue;
        }

        if (insideEnum) {

            if (!trimmed) {
                currentEnum.values.push({
                    blank: true,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                });
                continue;
            }

            let isCommented = false;
            let content = trimmed;

            if (content.startsWith("//")) {
                isCommented = true;
                content = content.slice(2).trim();
            }

            let trailingComment = "";
            const commentIndex = content.indexOf("//");
            if (commentIndex !== -1) {
                trailingComment = content.slice(commentIndex + 2).trim();
                content = content.slice(0, commentIndex).trim();
            }

            if (!content) {
                currentEnum.values.push({
                    blank: true,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                });
                continue;
            }

            const match = content.match(/^(\w+)(?:\s*=\s*(.+))?/);

            if (!match) continue;

            const key = match[1];
            let value = match[2];

            if (value !== undefined) {
                value = value.trim();

                if (/^["'`].*["'`]$/.test(value)) {
                    currentEnum.mode = currentEnum.mode || "string";
                } else {
                    currentEnum.mode = currentEnum.mode || "number";
                }
            }

            currentEnum.values.push({
                key,
                value,
                isCommented,
                trailingComment,
                originLine: line.originLine,
                sourceLine: line.sourceLine
            });
        }
    }

    // =========================
    // PASS 2 — generar output
    // =========================
    insideEnum = false;
    currentEnum = null;

    for (const line of lines) {

        const indent = (line.text.match(/^\s*/) || [""])[0];
        const trimmed = line.text.trim();

        const start = trimmed.match(/^enum\s+(\w+)/i);
        if (start) {
            insideEnum = true;
            currentEnum = enumDefs.get(start[1].toLowerCase());
            continue;
        }

        if (insideEnum && trimmed.toLowerCase() === "end") {

            const prefix = currentEnum.name.toUpperCase();

            let counter = 0;

            const names = currentEnum.values
                .filter(v => v.key)
                .map(v => `${prefix}_${v.key}`);

            const maxLen = names.length
                ? Math.max(...names.map(n => n.length))
                : 0;

            currentEnum.values.forEach(entry => {

                if (entry.blank) {
                    processed.push({
                        text: "",
                        originLine: entry.originLine,
                        sourceLine: entry.sourceLine
                    });
                    return;
                }

                let val = entry.value;

                if (val !== undefined) {

                    if (/^["'`]/.test(val)) {
                        currentEnum.mode = "string";
                    } else {
                        counter = Number(val);
                    }

                } else {

                    if (currentEnum.mode === "string") {
                        val = `"${entry.key}"`;
                    } else {
                        val = counter;
                    }
                }

                if (currentEnum.mode !== "string") {
                    counter++;
                }

                const name = `${prefix}_${entry.key}`;
                const padding = " ".repeat(maxLen - name.length + 4);

                let lineOut = `${name}${padding}= ${val}`;

                if (entry.trailingComment) {
                    lineOut += `   // ${entry.trailingComment}`;
                }

                if (entry.isCommented) {
                    lineOut = `${indent}// ${lineOut}`;
                } else {
                    lineOut = indent + lineOut;
                }

                processed.push({
                    text: lineOut,
                    originLine: entry.originLine,
                    sourceLine: entry.sourceLine
                });
            });

            insideEnum = false;
            continue;
        }

        if (insideEnum) continue;

        const sizeofMatch = trimmed.match(/^(\w+)\s*=\s*sizeof\((\w+)\)/i);

        if (sizeofMatch) {
            const varName = sizeofMatch[1];
            const enumName = sizeofMatch[2].toLowerCase();

            if (enumDefs.has(enumName)) {
                const size = enumDefs.get(enumName).values.filter(v => v.key).length;
                processed.push({
                    text: `${indent}${varName} = ${size}`,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                });
                continue;
            }
        }

        processed.push({
            text: line.text,
            originLine: line.originLine,
            sourceLine: line.sourceLine
        });
    }

    return stateFromLines(processed);
}

function generatePointers(input, extraSizeofResolvers = []) {

    const state = normalizeState(input);
    const lines = state.lines;
    const OUTPUT_REGISTER = "30@";

    let offset = 0;
    const processed = [];

    const offsetMap = new Map();
    const structDefs = new Map();

    const TYPES = {
        int:    { size: 4,  suffix: "i" },
        float:  { size: 4,  suffix: "f" },
        bool:   { size: 1,  suffix: "i" },
        short:  { size: 8,  suffix: "s" },
        long:   { size: 16, suffix: "v" },
        string: { size: 16, suffix: "v" }
    };

    let insideStruct = false;
    let currentStruct = null;

    for (const line of lines) {

        const indent = (line.text.match(/^\s*/) || [""])[0];
        const trimmed = line.text.trim();

        if (!trimmed) {
            processed.push({
                kind: "raw",
                line: {
                    text: "",
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                }
            });
            continue;
        }

        const structStart = trimmed.match(/^struct\s+(\w+)/i);
        if (structStart) {
            insideStruct = true;
            currentStruct = {
                name: structStart[1],
                fields: [],
                size: 0,
                originLine: line.originLine,
                sourceLine: line.sourceLine
            };
            continue;
        }

        if (insideStruct && trimmed.toLowerCase() === "end") {
            structDefs.set(currentStruct.name.toLowerCase(), currentStruct);
            insideStruct = false;
            currentStruct = null;
            continue;
        }

        if (insideStruct) {
            const match = trimmed.match(/^(\w+)\s+(\w+)/i);
            if (!match) {
                contextError(
                    "generatePointers",
                    line,
                    `Línea inválida dentro de struct`
                );
            }

            const type = match[1].toLowerCase();
            const name = match[2];

            if (!TYPES[type]) {
                contextError(
                    "generatePointers",
                    line,
                    `Tipo desconocido en struct: ${type}`
                );
            }

            currentStruct.fields.push({
                name,
                type,
                offset: currentStruct.size,
                originLine: line.originLine,
                sourceLine: line.sourceLine
            });

            currentStruct.size += TYPES[type].size;
            continue;
        }

        if (trimmed.startsWith("//")) {
            processed.push({
                kind: "raw",
                line: {
                    text: line.text,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                }
            });
            continue;
        }

        const { code: codePart, comment } = splitCodeAndComment(trimmed);

        const sizeofMatch = codePart.match(/^(\w+)\s+(\w+)\s*=\s*sizeof\(([^)]+)\)/i);

        if (sizeofMatch) {
            const typeName = sizeofMatch[1].toLowerCase();
            const varName = sizeofMatch[2];
            const targetName = sizeofMatch[3].trim();

            if (!TYPES[typeName]) {
                contextError(
                    "generatePointers",
                    line,
                    `Tipo inválido para sizeof: ${typeName}`
                );
            }

            const resolveSizeof = createSizeofResolver(
                (name) => structDefs.get(name)?.size ?? null,
                ...extraSizeofResolvers
            );

            const resolvedSize = resolveSizeof(targetName);

            if (resolvedSize === null) {
                processed.push({
                    kind: "raw",
                    line: {
                        text: line.text,
                        originLine: line.originLine,
                        sourceLine: line.sourceLine
                    }
                });
                continue;
            }

            const typeInfo = TYPES[typeName];

            const finalOffset = offset;
            offset += typeInfo.size;

            offsetMap.set(varName.toLowerCase(), finalOffset);

            const code =
                `${indent}${varName} = &${finalOffset}(${OUTPUT_REGISTER},1${typeInfo.suffix})`;

            processed.push({
                kind: "code",
                code,
                comment: comment ? `${comment} | sizeof=${resolvedSize}` : `sizeof=${resolvedSize}`,
                originLine: line.originLine,
                sourceLine: line.sourceLine
            });

            continue;
        }

        const match = codePart.match(/^(\w+)\s+(.+)/i);

        if (!match) {
            processed.push({
                kind: "raw",
                line: {
                    text: line.text,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                }
            });
            continue;
        }

        const typeName = match[1].toLowerCase();
        const vars = match[2]
            .split(",")
            .map(v => v.trim())
            .filter(Boolean);

        let emittedAny = false;

        vars.forEach((rawVar, index) => {

            let varName = rawVar;
            let ref = null;

            if (rawVar.includes(">")) {
                const parts = rawVar.split(">");
                varName = parts[0].trim();
                ref = parts[1].trim();
            }

            if (structDefs.has(typeName)) {

                const struct = structDefs.get(typeName);

                let baseOffset;

                if (ref) {
                    if (!offsetMap.has(ref.toLowerCase())) {
                        contextError(
                            "generatePointers",
                            line,
                            `Referencia no encontrada: ${ref}`
                        );
                    }
                    baseOffset = offsetMap.get(ref.toLowerCase());
                } else {
                    baseOffset = offset;
                    offset += struct.size;
                }

                offsetMap.set(varName.toLowerCase(), baseOffset);

                struct.fields.forEach(field => {

                    const fieldOffset = baseOffset + field.offset;
                    const typeInfo = TYPES[field.type];

                    const code =
                        `${indent}${varName}_${field.name} = &${fieldOffset}(${OUTPUT_REGISTER},1${typeInfo.suffix})`;

                    processed.push({
                        kind: "code",
                        code,
                        comment: "",
                        originLine: line.originLine,
                        sourceLine: line.sourceLine
                    });
                });

                emittedAny = true;
                return;
            }

            if (!TYPES[typeName]) {
                processed.push({
                    kind: "raw",
                    line: {
                        text: line.text,
                        originLine: line.originLine,
                        sourceLine: line.sourceLine
                    }
                });
                emittedAny = true;
                return;
            }

            const typeInfo = TYPES[typeName];

            let finalOffset;

            if (ref) {
                if (!offsetMap.has(ref.toLowerCase())) {
                    contextError(
                        "generatePointers",
                        line,
                        `Referencia no encontrada: ${ref}`
                    );
                }
                finalOffset = offsetMap.get(ref.toLowerCase());
            } else {
                finalOffset = offset;
                offset += typeInfo.size;
            }

            offsetMap.set(varName.toLowerCase(), finalOffset);

            const code =
                `${indent}${varName} = &${finalOffset}(${OUTPUT_REGISTER},1${typeInfo.suffix})`;

            processed.push({
                kind: "code",
                code,
                comment: (index === vars.length - 1) ? comment : "",
                originLine: line.originLine,
                sourceLine: line.sourceLine
            });

            emittedAny = true;
        });

        if (!emittedAny) {
            processed.push({
                kind: "raw",
                line: {
                    text: line.text,
                    originLine: line.originLine,
                    sourceLine: line.sourceLine
                }
            });
        }
    }

    let maxCodeLength = 0;

    for (const entry of processed) {
        if (entry.kind === "code") {
            maxCodeLength = Math.max(maxCodeLength, entry.code.length);
        }
    }

    const COMMENT_SPACING = 2;

    const finalLines = processed.map(entry => {

        if (entry.kind === "raw") return entry.line;
        if (!entry.comment) {
            return {
                text: entry.code,
                originLine: entry.originLine,
                sourceLine: entry.sourceLine
            };
        }

        const padding =
            " ".repeat(maxCodeLength - entry.code.length + COMMENT_SPACING);

        return {
            text: `${entry.code}${padding}// ${entry.comment}`,
            originLine: entry.originLine,
            sourceLine: entry.sourceLine
        };
    });

    const output = stateFromLines(finalLines);

    assertNoUnresolvedSizeof(output, "generatePointers");

    return output;
}