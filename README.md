# WALLACOPY #

## QUÉ ES ##
Wallacopy es un proyecto encargado por la escuela *Keepcoding* para el módulo *Desarrollo Front-End con Javascript*. 

En él se nos pedía que creásemos una página web con Javascript sin usar librerías ni frameworks, y que tuviese las siguientes utilidades:

- Mostrar un listado de anuncios en la página principal.
- Al clicar en un anuncio, poder verlo en detalle en otra página.
- Darle la posibilidad al usuario de Registrarse.
- Disponer de un formulario para el registro y el login.
- Una vez logado, el usuario debería poder crear anuncios (con su correspondiente formulario)
- Si el anuncio ha sido creado por el usuario, darle la posibilidad de eliminarlo.
- Gestionar los errores, la carga de datos y el vacío de todas estas opciones.
- Los datos se gestionarían desde un API (aunque en este caso, hemos utilizado [sparrest.js](https://github.com/kasappeal/sparrest.js) para imitar un API real).

## COMO FUNCIONA ##

1. Para poder utilizar **Wallacopy**, primero debes clonar el repositorio de [sparrest.js](https://github.com/kasappeal/sparrest.js). Luego copia el archivo `db.json` de este proyecto y pégalo en tu *sparrest.js*. Ahora ejecuta en la terminal:
```
npm install
```
Así instalarás las dependencias. Después ejecuta 
```
npm start
```
Así arrancas el servidor. 

Y... ¡Ya puedes disfrutar de Wallacopy en tu directorio local!

Para cualquier otra duda, puedes mirar la documentación de *sparrest.js*.

2. ### PÁGINA PRINCIPAL ###

En la página principal te encontrarás con el listado de todos los anuncios.

En los anuncios aparecen los siguientes datos:
- Título del anuncio.
- Imagen (si tiene).
- Descripción del anuncio.
- Si es Compra o Venta.
- Precio
- La fecha de subida del anuncio en formato DD-MM-YYYY

Si haces click en alguno de ellos, se te redireccionará a otra página en la que verás el [detalle del anuncio](#3--detalle-del-anuncio).

Arriba a la derecha, tienes el menú de navegación del usuario. En él podrás visualizar 2 opciones:
- **Si no estás logado**: Visualizarás las opciones de **Entrar** y **Registrarse**. Ambas te llevarán a otra página en la que aparecerá el formulario correspondiente.
- **Si estás logado**: Visualizarás las opciones de **Crear Anuncio** y **Cerrar Sesión**. La primera te redireccionará a otra página en la que encontrarás el formulario para crear el anuncio. La segunda tan solo te hará el log-out y volverá a cargar la página principal.

Aquí te pongo una visual de la página principal:
- [Sin login](https://photos.google.com/photo/AF1QipMeyWRyj75sf8aoWcDvvgR6f4HQAeWYpMJhQ1_C)
- [Con login](https://photos.google.com/photo/AF1QipOR_xvAGNstPPqUNc9osmgNXG1Ok81sr9JWXWGX)

3. ### DETALLE DEL ANUNCIO ###

En esta página podrás visualizar un anuncio con más detalle.

Los cambios que se pueden apreciar con respecto al [listado principal](#2--página-principal) son:
- Aparece un nuevo dato: el nombre del usuario creador del anuncio.
- La imagen es también un poco más grande que en el listado.
- Si el anuncio ha sido subido por el usuario logado, aparecerá también un botón que da la posibilidad de **Eliminar Anuncio**.

Arriba a la derecha, se sigue visualizando el menú de navegación del usuario, igual que en la [página principal](#2--página-principal).

En estos enlaces podrás visualizar esta página de detalle:

- [Cuando el usuario actual no es el mismo que ha creado el anuncio](https://photos.google.com/photo/AF1QipN3kAqpFwTU1Xnkz8pvrllfiq7JWoLTMfr96pj2)
- [Cuando el usuario logado es el mismo que ha creado el anuncio](https://photos.google.com/photo/AF1QipPy92fsg6-34SPoNMktjhMyOyji-WK2J5Yq_ora)

4. ### ELIMINAR ANUNCIO ###

Si eres el usuario propietario de un anuncio, tienes la opción de borrarlo.

**Para ello, primero debes estar logado.**

Visita el [listado principal](#2--página-principal) y busca tu anuncio. Ahora haz click en él.

Habrás sido redirigido a la [página de detalle](#3--detalle-del-anuncio).

Debajo de tu anuncio, verás un botón con el texto `Eliminar Anuncio`. Haz click en él.

Te saldrá una **ventana de confirmación** preguntándote si estás seguro. Si seleccionas *Aceptar*, tu anuncio se borrará de la base de datos, saldrá una ventana emergente confirmando el borrado del mismo y serás redirigido a la [página principal](#2--página-principal). Si seleccionas *Cancelar*, sencillamente se cerrará la ventana de confirmación sin que se produzca ningún cambio.

5. ### CREAR ANUNCIO ###

**Si has hecho login**, tendrás la opción de crear un anuncio.

Para ello, visita cualquier página y arriba a la izquierda podrás visualizar el enlace *Crear Anuncio*. Haz click en él.

Te redirigirá a una nueva página (si entrases en ella sin estar logado, saltaría un mensaje informando al usuario del error y se le redirigiría a la [página principal](#2--página-principal)) en la que aparecerá un formulario con los campos que debes rellenar para crear el anuncio. Los campos son los siguientes:
- Nombre del producto (requerido)
- Descripción (requerido)
- Precio (requerido)
- ¿Compras o vendes? (requerido): Debes seleccionar Compra o Venta.
- Link para la imagen (opcional)

Los campos *Nombre del producto*, *Descripción* y *Precio* son obligatorios, si alguno de ellos no está relleno, el botón para crear el anuncio permanecerá desactivado.

El campo *¿Compras o vendes?* con sus respectivas opciones, también es obligatorio. En este caso, si no se selecciona una de estas opciones y se le da al botón de `Crear Anuncio`  saldrá un ventana de aviso, informando al usuario de que debe seleccionar una de las opciones.

Finalmente, si todos los campos requeridos están rellenos, la página conectará con la base de datos y creará el anuncio. Entonces aparecerá una nueva ventana emergente informando al usuario de que el anuncio se ha creado correctamente. Acto seguido, serás redirigido a la [página principal](#2--página-principal).

En este enlace tienes una visual de esta página: [click](https://photos.google.com/photo/AF1QipM_uaQbn1f3F3SFyMr29iW3LjRYVN2HhMpmgJjS)

6. ### REGISTRO ###

Para poder hacer uso de la [creación de anuncios](#5--crear-anuncio), antes debes estar logado.

Para ello, lo primero que debes hacer es crearte un usuario.

Para ir a la página de *Registro*, tan solo visita cualquier página del sitio (sin estar logado), y arriba a la izquierda, verás un enlace con el texto *Registrarse*. Haz click en él.

Se te redirigirá a otra página en la que aparecerá un formulario de registro.

Los campos que verás son los siguientes:
- Nombre de usuario
- Contraseña
- Confirmar contraseña

Para que se habilite el botón de `Registrarse`, debes haber rellenado los 3 campos, sino, permanecerá deshabilitado.

Una vez hayas rellenado los 3 campos, podrás hacer click en el botón `Registrarse` y se validará lo siguiente:

- Que el campo *Contraseña* y *Confirmar contraseña* contengan el mismo texto.
- Que la contraseña tenga al menos 6 caracteres.
- Que la contraseña contenga letras y números.

Si no cumpliese alguno de estos requisitos, saldría una ventana emergente informando al usuario del problema correspondiente y no se enviaría el registro a la base de datos. 

Cuando todos los campos estén rellenos correctamente, se enviará el registro a la base de datos, y saldrá una ventana emergente con la confirmación del registro en la misma. También se logea al usuario automáticamente.

En este enlace tienes una visual del formulario de registro: [click](https://photos.google.com/photo/AF1QipOg95bO4MbM8jC4ufBo2k0zdWEkAyN069vbhHrS)

7. ### LOGIN ###
