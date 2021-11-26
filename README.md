# E-coomerce-Minimalistic-checkout

## UNDER CONSTRUCTION

# Calidad de código

[![CodeFactor](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout/badge)](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout)

# Proyecto

El proyecto consiste en crear una pasarela de pago sencilla que permite al usuario tener una experiencia cómoda a la hora de realizar el pago. El proyecto tmabién contiene una web de comercio simple que permite al usuario seleccional un producto y su cantidad antes de proceder a la pasarela de pago.

## Background

Este proyecto es un ejercicio práctico para participar en la hackathon JUMP2DIGITAL 2021. He podido reeforzar con este ejercicio mis conocimientos de maquetación (HTML5/CSS3/SASS), javascript y ReactJS, y el uso de APIS externas. Con este proyecto tmabién he aprendido por primera vez el uso de useContext (parecido a redux), hook de React que me perimite compartir y crear variables globales con diferentes componentes de mi aplicación.

# Objetivos principales y historias

1. Habilidades de maquetación

2. uso de Apis de terceros para rellenar los campos de un formulario

[x] Task 1 → Puedo ver correctamente la vista de PC
[x] Task 2 → Puedo ver correctamente la vista de móvil
[x] Task 3 → Si introduzco un campo que no corresponde con un patrón de tarjeta de crédito salta un error
[x] Task 4 → Si introduzco un email que no corresponde con patrón de correo electrónico salta un error de aviso
[x] Task 5 → Puedo seleccionar ver la lista de países completa

## Stack

![](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react) y ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
: Maquetación de la web

![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) y ![](https://img.shields.io/badge/-react%20Boostrap-orange)
: Dar estilos a la página web

![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
: Framework CSS para facilitar la utilización de CSS y hacerlo de manera más práctica.

![](https://img.shields.io/badge/gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
: Sistema de compilación de transmisión en el desarrollo web front-end.

![](https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=61DAFB)
: Facilita la gestión de paquetes por defecto de Node.js

![](https://img.shields.io/badge/Git-F74E27?style=for-the-badge&logo=git&logoColor=white)
: Control de versiones.

## API

Para este proyecto se han utilizado dos API de tercercos:

1. API externa para recoger productos de la página web => (https://fakestoreapi.com/products)
2. API Externa para pintar el listado de paises en el campo "select" del formulario de pago => (https://restcountries.com/v3.1/all)

## Instalación

**NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

_Pasos a seguir para arrancar un proyecto desde cero:_

1. **Clona esta repositorio desde GitHub**.
1. **Abre una terminal** en la carpeta raíz del repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

**Pasos para arrancar el proyecto:**

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **para arrancar el proyecto** ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de tu navegador y muestra la página web** (http://localhost:3000/#/).
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
  - Convierte los ficheros SASS en CSS.
  - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Si deseas editar este proyecto después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

**Para generar mi página para producción ejecute el comando:**

```bash
npm run githubpages
```

Es un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón. Te recomendamos ver el fichero `package.json` para aprender cómo funciona.

También en lugar de clonar el repositorio, lo puedes descargar cómodamente en tu servidor local para revisión.

## Estructura de carpetas

```
src
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ 01.variables.js
 |  ├─02-fetch.js
 |  └─ ... .js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```

## Contact info

<p align="left">
<a href="https://twitter.com/sara_rid" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="sara_rid" height="30" width="40" /></a>
<a href="https://linkedin.com/in/www.linkedin.com/in/sara-rd/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="www.linkedin.com/in/sara-rd/" height="30" width="40" /></a>

</p>

## License

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
