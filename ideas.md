# Ideas

## Ajustar limites
Permite a los usuarios cambiar los limites del mod, a traves de un buffer dinamico.

Suponiendo que los Handlen ocupan 4 bytes, podemos hacer que los buffers estaticos tambien dependan de esta

ya sabemos que por ejemplo en los actores, se guardan estos datos

* {acu_mlle }
* {acu_wpon }
* {acu_dist }
* {rep_anim }
* {ifp_file }
* {ifp_anim }
* {sty_fght }
* {sty_walk }
* {lcoord_x }
* {lcoord_y }
* {lcoord_z }
* {lcoord_a }
* {attach_to}
* {ped_type }
* {ped_gener}
* {model_spe}

y cada una ocupa `4` bytes.. solo seria sumar `4` mas a los `16*4` actuales.
tambien sabemos que actualmente son `50` los actores que podemos crear, asique nos queda esta formula

`((16+1)*4)*50` = `3.400`

3400 Bytes = 3.4 Kilobytes


hay que buscar una forma de hacerlo dinamico o estatico pero desde el lado del usuario.

Estos opcodes pueden ayudar.
``
0AC8: 11@ = allocate_memory_size 0
0AC9: free_allocated_memory 2@
``
al primero le indicamos de cuanto es el espacio en memoria que necesitamos.
pero hay que limpiar todos los bytes antes de ser usado para escribir nuestros datos, por que suele
darnos una fraccion de memoria escrita y llena de basura, para establecer todos los bytes en 0x00

``
0A8C: write_memory 0xC0BC15 size 0 value 0 virtual_protect 0
0A8D: $VAR18 = read_memory 2@ size 0 virtual_protect 0
``

0AC6: 16@ = label @LABEL pointer
0AC7: 19@ = var 16@ pointer

