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
<p> <img href="https://photos.google.com/photo/AF1QipMeyWRyj75sf8aoWcDvvgR6f4HQAeWYpMJhQ1_C"> </p>

3. ### DETALLE DEL ANUNCIO ###

En esta página podrás visualizar un anuncio con más detalle.

Los cambios que se pueden apreciar con respecto al [listado principal](#2--página-principal) son:
- Aparece un nuevo dato: el nombre del usuario creador del anuncio.
- La imagen es también un poco más grande que en el listado.
- Si el anuncio ha sido subido por el usuario logado, aparecerá también un botón que da la posibilidad de **Eliminar Anuncio**.

Arriba a la derecha, se sigue visualizando el menú de navegación del usuario, igual que en la [página principal](#2--página-principal).










Ya está listo el login y el registro de usuarios. En todo caso, faltaría darle algo más de estilo, pero la funcionalidad está ok.

Ya está creada la opción, página y funcionalidad de "crear anuncio", aunque quedaría redirigir al usuario a la página de detalle del anuncio creado, por ejemplo, o darle la opción de seguir creando, tal vez.


Ya está modificada la página principal para que los anuncios vengan del API. Se podría mejorar añadiendo la paginación, ordenar, etc.

Ya está listo el detalle del anuncio. Podría mejorar el título de la página para que fuese personalizado al anuncio (con el nombre del anuncio por ejemplo).

Ya está implementada la eliminación del anuncio por el usuario que lo ha creado en el detalle del anuncio. Podría mejorar el poderlo utilizar también en la lista principal y añadir editar anuncio.

Ya estaría terminado de implementar el spinner para la carga en las páginas.
