# Exte Movies

## Antes de empezar

Se debe crear un fichero de configuración en la raíz del proyecto para definir el acceso a la API de películas con los siguientes datos:

```bash
API_MOVIES_PATH="https://api.themoviedb.org/3/discover/movie"
API_DETAIL_PATH="https://api.themoviedb.org/3/movie"
API_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWZiOWU0MzEwZTU3MmQ0NTY0Y2NjMjU1ZDI2NzMyMiIsInN1YiI6IjY1NTM1MjM1ZDRmZTA0MDEzOTgxMjVmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CEYYvydoCUUJgTR7eskapz3sGiU-Y8gjzE9nmJMXOdE"
API_IMAGES_PATH="https://image.tmdb.org/t/p/w220_and_h330_face"
```
NOTA: Normalmente no se exponen aquí las variables pero al ser una prueba las dejo aquí por mayor facilidad. No obstante he dejado un fichero `.env.example` que es el que se sube al repositorio para indicar la estructura.

## Instalación

Se requiere `nodeJS` versión 20 o superior.

Para instalar las dependencias del proyecto se debe ejecutar el siguiente comando:

```bash
# npm
npm install
```

## Servidor de desarrollo

Se puede arrancar un servidor de desarrollo en `http://localhost:3000` con el siguiente comando:

```bash
# npm
npm run dev
```

## Stack tecnológico y explicaciones

## Nuxt 3

Normalmente suelo utilizar el framework `Nuxt` ya que agiliza bastante el desarrollo y facilita la integración de módulos y utilidades al proyecto.

### CSS

Se ha utilizado la librería `Tailwind` para incluir rápidamente clases `helpers` que faciliten la maquetación. Es una configuración básica.

### Internacionalización

Se ha incluido la libería `i18n` para gestionar los literales de la aplicación y así además de permitir el cambio de idioma organizar los literales para que no estén en medio de los componentes.

NOTA: Quería llegar a cambiar las request a la API según el idioma pero se me iba de las manos el tiempo.

### Pinia

Para gestionar el estado interno de la app he utilizado `Pinia` en lugar de `Vuex` ya que se recomienda para las versiones 3 y en adelante de Vue y Nuxt.

## Funcionalidades desarrolladas

* Vistas: Listado principal, vista de detalle y listado de favoritos
* Menú de navegación
* Tarjetas de película en listado
* Añadir películas a favoritos
* Internacionzalización de textos de la app

## Funcionalidades no implementadas

* Desmarcar de favoritos
* Búsqueda, ordenación y filtro
* Tarjetas marcadas con favorito

## Conclusiones

He intentado abordar todos los puntos relevantes pero es cierto que no es una prueba de 1 o 2 horas por lo que he intentado priorizar la funcionalidad general teniendo en cuenta el manejo de routing, creación de componentes y su relación con la información de datos de la aplicación mediante props o acceso a `Pinia`, maquetación con `Tailwind` para que tenga un aspecto "atractivo (No soy diseñador, disculpad los colores)" pero sobre todo pensando en que haya armonía entre los elementos, sufiencte separación y se vea bien en diferentes tamaños de pantalla.

También he incluído que las llamadas a la API se hagan siempre desde servidor para dar robusted a una escalidabilidad donde se tuviera en cuenta seguridad y utilizar modelos de datos, normalizadores y gestiones de caché de llamadas.

En la organización del repositorio he seguido `GitFlow` en cuanto a la nomenclatura de commits, por tener alguna organización aunque sea básica.