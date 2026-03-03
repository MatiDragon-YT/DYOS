/* ===========================
   EJEMPLO DE USO
=========================== */

const input = `
    MENU_PLAYER     = 0
    MENU_ACTOR      = 1
    MENU_VEHICLE    = 2
    MENU_OBJECT     = 3
    MENU_CAMERA     = 4
    MENU_GAME       = 5
    MENU_SCENE      = 6
    MENU_MISSION    = 7
    MENU_DUMMYA     = 8
    MENU_DUMMYB     = 9
    MENU_HOTKEY     = 10
    MENU_SETTING    = 11

    int CURRENT_PLATFORM
    int CURRENT_PAGE
    int NUMBER_PAGE

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

    float tempvar_X_coord
    float tempvar_Y_coord
    float tempvar_Z_coord
    float tempvar_Angle
    int Active_Interior
    int LAST_THROTTLE_TIME
    int THROTTLE_INTERVAL
    int PLAYER_FLAGS
        PLAYER_PROP_COLISION = 0
        PLAYER_PROP_IMMUNITION_BULLETS = 1
        PLAYER_PROP_IMMUNITION_FIRE = 2
        PLAYER_PROP_IMMUNITION_EXPLOSION = 3
        PLAYER_PROP_IMMUNITION_COLLISION = 4
        PLAYER_PROP_IMMUNITION_MELEE = 5
        PLAYER_PROP_BLEEDING = 6
        PLAYER_PROP_DROWN_AT_WATER = 7
        PLAYER_PROP_ATTACHED = 8
        PLAYER_PROP_FREEZE_POSITION = 9
        PLAYER_PROP_CROUCH = 10
        PLAYER_PROP_MAINTAIN_POSITION = 11
    int DYOS_FLAGS
        CAMARA_CINEMATICA = 0
        DEBUG_MODE = 1
    int __A
    int __B
    int __C
    int __D
    int __E
    int FILE_HANDLE
    int FILE_SIZE
    int FILE_OFFSET
    int FILE_COMMAND
    int FILE_VERSION
    int FILE_EXIST
    int WAIT_INFO
    int WAIT_ERROR
    int WAIT_DEFAULT
    int GAME_MODE
    float DEBUG_CURSOR_X
    float DEBUG_CURSOR_Y
    float __Af
    float __Bf
    float __Cf
    float __Df
    float __Ef
    int PLAYER_ANIM_LIB
            PLAYER_ANIM_LIB_NONE = 0
            PLAYER_ANIM_LIB_DYOS = 1
            PLAYER_ANIM_LIB_DYOM = 2
    int PLAYER_ANIM_ID

    int DYOS_HELP_ID
        HELP_SCM = v$HELP_SCM
    int PLAYER_FIGHT

    // # SCM
    int SCM_BUFFER_MAIN     // start of buffer SCM
    int SCM_BUFFER_OFFSETS  // table offsets (for GOTO/GOSUB)
    int SCM_CURRENT_OFFSET  // current offset in reading
    int SCM_IF_ACTIVE       // TRUE or FALSE
    int SCM_IF_TYPE         // 0 = AND, 1 = OR
    int SCM_ENTER_CONDITION // total of conditions
    int SCM_IF_TRUE         // truthy conditions
    int SCM_IF_FALSE_JUMP   // offset's jump
    int SCM_CONT_CONDITION
    int SCM_START_CONDITION

        BUFFER_MARKERS  = 0
        BUFFER_SPHERES  = 1
        BUFFER_BLIPS   = 2
        BUFFER_VEHICLES = 3
        BUFFER_OBJECTS  = 4
        BUFFER_PARTICLES= 5
        BUFFER_PICKUPS  = 6
        BUFFER_ACTORS  = 7
        BUFFER_SEARCHLIGHT = 8

    //int SCM_BUFFER_MARKERS
    int SCM_BUFFER_SPHERES
    int SCM_BUFFER_BLIPS
    int SCM_BUFFER_VEHICLES
    int SCM_BUFFER_OBJECTS
    //int SCM_BUFFER_PARTICLES
    int SCM_BUFFER_PICKUPS
    int SCM_BUFFER_ACTORS

    int SCM_INDEX_VEHICLES
    int SCM_INDEX_OBJECTS
    int SCM_INDEX_PARTICLES
    int SCM_INDEX_PICKUPS
    int SCM_INDEX_ACTORS
        
    int SCM_NUM_VEHICLES
    int SCM_NUM_OBJECTS
    int SCM_NUM_PARTICLES
    int SCM_NUM_PICKUPS
    int SCM_NUM_ACTORS
        
    int SCM_VEHICLE
    int SCM_OBJECT
    int SCM_PARTICLE
    int SCM_PICKUP
    int SCM_ACTOR

    int SCM_IN_CONDITION_BLOCK // bool → estoy escribiendo condiciones
    int SCM_COND_START_OFFSET // int  → offset de la 1ra condición
    int SCM_IF_EMITTED // bool → ya inserté el IF
    int SCM_COMMAND_IS_CONDITIONAL
    // #

    int DYOS_ACTOR_STATS

    //int SM_BUFFER_SPHERES
    //int SM_BUFFER_BLIPS
    int SM_BUFFER_VEHICLES
    int SM_BUFFER_OBJECTS
    int SM_BUFFER_PARTICLES
    int SM_BUFFER_PICKUPS
    int SM_BUFFER_ACTORS

    int SM_INDEX_VEHICLES
    int SM_INDEX_OBJECTS
    int SM_INDEX_PARTICLES
    int SM_INDEX_PICKUPS
    int SM_INDEX_ACTORS
        
    int SM_NUM_VEHICLES
    int SM_NUM_OBJECTS
    int SM_NUM_PARTICLES
    int SM_NUM_PICKUPS
    int SM_NUM_ACTORS
        
    int SM_VEHICLE
    int SM_OBJECT
    int SM_PARTICLE
    int SM_PICKUP
    int SM_ACTOR

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

    int FOCUS_LIGHT_MODE

    int MODEL_PLAYER
    int INPUT_MODE // 0 = selección, 1 = input numérico
    int ACTOR_MODEL_REQ
    int ACTOR_MODEL_BEFORE

    int NUM_PRESSED_AT_ANDROID

    int TEMP_FLAGS
    int WAIT_DEBUG // utilidad
`;

console.log(generatePointers(input));


/**
 * Sunny Builder Pointer Generator
 * Convierte definiciones tipo:
 *   int varA, varB
 *   float speed
 * en punteros automáticos con offsets.
 */
function generatePointers(inputText) {

    const lines = inputText.split(/\r?\n/);
    const OUTPUT_REGISTER = "30@";

    let offset = 0;
    const processed = [];

    // =========================
    // PASS 1 — generar líneas
    // =========================
    for (let line of lines) {

        const indent = (line.match(/^\s*/) || [""])[0];
        const trimmed = line.trim();

        // Línea vacía
        if (!trimmed) {
            processed.push({ raw: "" });
            continue;
        }

        // Comentarios puros (regiones)
        if (trimmed.startsWith("//")) {
            processed.push({ raw: indent + trimmed });
            continue;
        }

        // Separar comentario
        let comment = "";
        let codePart = trimmed;

        const commentIndex = trimmed.indexOf("//");
        if (commentIndex !== -1) {
            comment = trimmed.slice(commentIndex + 2).trim();
            codePart = trimmed.slice(0, commentIndex).trim();
        }

        const match = codePart.match(/^(int|float)\s+(.+)/i);

        // Línea normal (no variable)
        if (!match) {
            processed.push({ raw: line });
            continue;
        }

        const type = match[1].toLowerCase();
        const vars = match[2]
            .split(",")
            .map(v => v.trim())
            .filter(Boolean);

        const suffix = type === "float" ? "f" : "i";

        vars.forEach((name, index) => {

            const code =
                `${indent}${name} = &${offset}(${OUTPUT_REGISTER},1${suffix})`;

            processed.push({
                code,
                comment: (index === vars.length - 1) ? comment : ""
            });

            offset += 4;
        });
    }

    // =========================
    // PASS 2 — alineación
    // =========================

    // calcular ancho máximo del código
    let maxCodeLength = 0;

    for (const line of processed) {
        if (line.code) {
            maxCodeLength = Math.max(maxCodeLength, line.code.length);
        }
    }

    const COMMENT_SPACING = 2;

    const finalLines = processed.map(line => {

        if (line.raw !== undefined) {
            return line.raw;
        }

        if (!line.comment) {
            return line.code;
        }

        const padding =
            " ".repeat(maxCodeLength - line.code.length + COMMENT_SPACING);

        return `${line.code}${padding}// ${line.comment}`;
    });

    return finalLines.join("\n");
}

