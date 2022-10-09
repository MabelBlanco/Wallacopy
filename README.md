# WALLACOPY #

## ÍNDICE ##

- [QUÉ ES](#qué-es)
- [CÓMO FUNCIONA](#como-funciona)
    - [Página principal](#2--página-principal)
    - [Detalle del anuncio](#3--detalle-del-anuncio)
    - [Eliminar anuncio](#4--eliminar-anuncio)
    - [Crear Anuncio](#5--crear-anuncio)
    - [Registro](#6--registro)
    - [Login](#7--login)
    - [Cerrar Sesión](#8--cerrar-sesión)
    - [Carga y Errores](#9--carga-y-errores)
- [ORGANIZACIÓN](#organización)
    - [Archivos](#archivos)
    - [Carpetas](#carpetas)

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
- **Si no estás logado**: Visualizarás las opciones de [Entrar](#7--login) y [Registrarse](#6--registro). Ambas te llevarán a otra página en la que aparecerá el formulario correspondiente.
- **Si estás logado**: Visualizarás las opciones de [Crear Anuncio](#5--crear-anuncio) y [Cerrar Sesión](#8--cerrar-sesión). La primera te redireccionará a otra página en la que encontrarás el formulario para crear el anuncio. La segunda tan solo te hará el log-out y volverá a cargar la página principal.

Aquí te pongo una visual de la página principal:
- [Sin login](https://photos.google.com/photo/AF1QipMeyWRyj75sf8aoWcDvvgR6f4HQAeWYpMJhQ1_C)
- [Con login](https://photos.google.com/photo/AF1QipOR_xvAGNstPPqUNc9osmgNXG1Ok81sr9JWXWGX)

3. ### DETALLE DEL ANUNCIO ###

En esta página podrás visualizar un anuncio con más detalle.

Los cambios que se pueden apreciar con respecto al [listado principal](#2--página-principal) son:
- Aparece un nuevo dato: el nombre del usuario creador del anuncio.
- La imagen es también un poco más grande que en el listado.
- Si el anuncio ha sido subido por el usuario logado, aparecerá también un botón que da la posibilidad de [Eliminar Anuncio](#4--eliminar-anuncio).

Arriba a la derecha, se sigue visualizando el menú de navegación del usuario, igual que en la [página principal](#2--página-principal).

En estos enlaces podrás visualizar esta página de detalle:

- [Cuando el usuario actual no es el mismo que ha creado el anuncio](https://photos.google.com/photo/AF1QipN3kAqpFwTU1Xnkz8pvrllfiq7JWoLTMfr96pj2)
- [Cuando el usuario logado es el mismo que ha creado el anuncio](https://photos.google.com/photo/AF1QipPy92fsg6-34SPoNMktjhMyOyji-WK2J5Yq_ora)

4. ### ELIMINAR ANUNCIO ###

Si eres el usuario propietario de un anuncio, tienes la opción de borrarlo.

**Para ello, primero debes estar [logado](#7--login).**

Visita el [listado principal](#2--página-principal) y busca tu anuncio. Ahora haz click en él.

Habrás sido redirigido a la [página de detalle](#3--detalle-del-anuncio).

Debajo de tu anuncio, verás un botón con el texto `Eliminar Anuncio`. Haz click en él.

Te saldrá una **ventana de confirmación** preguntándote si estás seguro. Si seleccionas *Aceptar*, tu anuncio se borrará de la base de datos, saldrá una ventana emergente confirmando el borrado del mismo y serás redirigido a la [página principal](#2--página-principal). Si seleccionas *Cancelar*, sencillamente se cerrará la ventana de confirmación sin que se produzca ningún cambio.

5. ### CREAR ANUNCIO ###

**Si has hecho [login](#7--login)**, tendrás la opción de crear un anuncio.

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

Para poder hacer uso de la [creación de anuncios](#5--crear-anuncio), antes debes estar [logado](#7--login).

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

Una vez el usuario se ha registrado, ya podría hacer login en el momento que quiera. 

Hacer login es necesario para poder [crear un anuncio](#5--crear-anuncio) y [eliminar un anuncio](#4--eliminar-anuncio) (siempre y cuando lo haya creado dicho usuario).

Para hacer login, tan solo debes dirigirte a cualquiera de las páginas y arriba a la izquierda aparecerá un enlace con la palabra *Entrar* (siempre y cuando no estés logado ya, si este es el caso, debes primero `Cerrar Sesión`). Haz click en él.

Se te redirigirá a otra página en la que aparecerá un formulario con los campos *Nombre de Usuario* y *Contraseña*. Debes rellenarlos con los datos que utilizaste en el registro y darle al botón `Entrar`.

Se conectará con la base de datos para confirmar ambos datos, y en caso de que ambos sean correctos, almacenará un token JWT en el almacenamiento local del navegador del usuario y lo redigirá a la [página principal](#2--página-principal).

En caso de que alguno de los datos no sea correcto, saltará una ventana emergente informando de ello al usuario.

Aquí pongo un enlace con la visual de esta página: [click](https://photos.google.com/photo/AF1QipPrDK23gsA4AGSTeuNnXlNpIIVB2AfPE1SbFeUw).

8. ### CERRAR SESIÓN ###

Por último, si ya estás [logado](#7--login), arriba a la izquierda (en cualquier página), verás el botón `Cerrar Sesión`. 

Si haces click en él, sencillamente se eliminará el token JWT almacenado en el almacenamiento local de tu navegador y ya no tendrás acceso a las funciones que requieren que estés logado. Después se te redirigirá a la [página principal](#2--página-principal).

9. ### CARGA Y ERRORES ###

Cada vez que se conecta con la base de datos y se carga un recurso, aparecerá una ruleta de carga para indicar al usuario que espere.

Todas las notificaciones al usuario de los errores que se puedan producir le serán informados mediante una ventana emergente con la información correspondiente al error sucedido (error al conectar con la base de datos, no se encuentra al usuario, etc.)


## ORGANIZACIÓN ##

Al primer vistazo, veremos una serie de carpetas, y varios archivos.

### Archivos ###

Entre los archivos encontramos un archivo *.gitignore* y este mismo *readme.md*, que son archivos básicos en cualquier proyecto.

Después podemos observar un archivo `db.json`. Es este archivo, el que se debe copiar en la aplicación [sparrest.js](https://github.com/kasappeal/sparrest.js) para poder acceder a los datos del proyecto.

Luego encontramos varios archivos `html`: index ([página principal](#2--página-principal)), advertisementDetail ([página de detalle del anuncio](#3--detalle-del-anuncio)), createAdvertisement ([crear anuncio](#5--crear-anuncio)) y login-register ([login](#7--login) y [registro](#6--registro)). 

Por último, encontramos el archivo `index.js`, que gestiona el javascript de la [página principal](#2--página-principal). Se ocupa de capturar los nodos y gestionar los controladores necesarios para el funcionamiento de dicha página: 
- advertisementList
- header
- notification

### Carpetas ###

- En la carpeta `styles` se encuentran todas las hojas de estilos **.css**.

- En la carpeta `utils`se encuentran los archivos:
    - PubSub.js (para comunicar unos componentes con otros)
    - SparrestApi.js (donde guardamos los métodos y endpoints para conectar con la base de datos).
    - decodeToken.js (función que decodifica el token, para averiguar el id del usuario que está logado).

- En la carpeta `notification` encontramos el controlador de las notificaciones que daremos al usuario. En este caso, he decidido gestionarlas todas mediante ventanas emergentes, porque me ha parecido que así me aseguraba que el usuario debía enterarse mejor de lo que estaba ocurriendo.

Después contamos con las carpetas de los diferentes componentes de nuestra web, todas están divididas según el esquema MVC (Modelo, Vista, Controlador), para su mejor expansión.

Los controladores los he exportado como clases porque he comprobado que así es más eficiente a la hora de trabajar con tantas funciones (ya que pasas el parámetro solo una vez y ya tienes acceso a él en toda la clase).

Los componentes son los siguientes:

- `header`: Se encuentra presente en todas las páginas. Es la cabecera, en la que se incluyen el título de la página y un menú de navegación para el usuario con diferentes opciones según esté logado o no: [Entrar](#7--login) y [Registrarse](#6--registro) (si no está logado) y [Crear Anuncio](#5--crear-anuncio) y [Cerrar Sesión](#8--cerrar-sesión) (si lo está).
En esta carpeta no he incluido modelo porque en este caso no necesito solicitar datos de la base de datos.

- `advertisementList`: Controla el listado de anuncios de la [página principal](#2--página-principal).
Cada anuncio es en sí un enlace, cuya propiedad *href* incluye un *query-param* con el id del anuncio para, al hacer click en él y ser redirigido a la página de detalle, ésta pueda recibir esa información. 

- `advertisementDetail`: Controla la visualización del [detalle del anuncio](#3--detalle-del-anuncio) y añade la opción de [Eliminar Anuncio](#4--eliminar-anuncio).
En esta carpeta se incluye un archivo `index.js` que recoge los nodos de la página mencionada anteriormente y gestiona el resto de controladores necesarios para el funcionamiento de dicha página.
Recibe la información del id del anuncio mediante una *query-param* situada en la URL, la captura y la utiliza para devolver el anuncio seleccionado en la página principal.

- `createAdvertisement`: Controla la página de [creación de un anuncio](#5--crear-anuncio). 
Como la anterior, también dispone de un archivo `index.js` que gestiona los nodos y controladores necesarios para el buen funcionamiento de la página.

- `login-register`: Por último, en esta carpeta gestionamos la página de [login](#7--login) y [registro](#6--registro). Cuenta por tanto con su propio archivo `index.js` para extraer nodos y gestionar los controladores oportunos.
He decidido juntar estos 2 componentes, tanto en una misma página como en la carpeta, los controladores y demás, porque el funcionamiento y visualización es muy similar y, además, porque quería ponérmelo como reto.
Recibe la selección de *login* o *registro* mediante una *query-param* situada en la URL, según el enlace que el usuario haya clicado en el menú de navegación. Una vez capturada la selección, ejecuta el controlador correspondiente a dicha selección.

