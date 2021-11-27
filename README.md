# E-commerce-Minimalistic-checkout-payment-getaway

# Calidad de código

[![CodeFactor](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout/badge)](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout)

# Proyecto

El proyecto consiste en crear una pasarela de pago sencilla que permite al usuario tener una experiencia cómoda a la hora de realizar el pago. El proyecto también contiene una web de comercio simple que permite al usuario seleccionar un producto y su cantidad antes de proceder a la pasarela de pago.

## Background

Este proyecto es un ejercicio práctico para participar en la hackathon JUMP2DIGITAL 2021. He podido reeforzar con este ejercicio mis conocimientos de maquetación (HTML5/CSS3/SASS/MIXINS/BEM), JavaScript y ReactJS, y el uso de APIS externas. Con este proyecto tmabién he aprendido por primera vez el uso de **useContext** (parecido a redux), hook de React que me permite compartir y crear variables globales con diferentes componentes de mi aplicación.

# Objetivos principales y historias

1. Habilidades de maquetación

2. Uso de Apis de terceros para rellenar los campos de un formulario

- [x] Task 1 → Puedo ver correctamente la vista de PC
- [x] Task 2 → Puedo ver correctamente la vista de móvil
- [x] Task 3 → Si introduzco un campo que no corresponde con un patrón de tarjeta de crédito salta un error
- [x] Task 4 → Si introduzco un email que no corresponde con patrón de correo electrónico salta un error de aviso
- [x] Task 5 → Puedo seleccionar ver la lista de países completa

## Stack

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
: estructura de componentes más eficiente y uso de router así hooks tales como useContext, useEffect o useState, etc

![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
: Maquetación de la web

![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
: Dar estilos a la página web

![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
: Framework de css para facilitar la utilización de css3 y hacerlo de manera más práctica. También he utilizado los **mixins** y **variables** para mejorar el código y hacerlo más eficiente. He utilizado Flex para diseñar algunos layouts y react bootstrap para la construir por ejemplo el hero.

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

Aquí pueden encontrar una explicación de la estructura del proyecto.

```
src
 ├─ components // los ficheros de esta carpeta se concatenan en el fichero app.js y este se guarda en public/main.js
 |  ├─checkout
 |    └─Checkout.js
 |    └─CountriesDropDown.js //fichero dónde se hace la llamada al api e integración de esta data en el select input.
 |    └─Payment.js //fichero dónde se encuentra el formulario de la pasarela de pago con todos los campos a rellanar por el usuario.
 |    └─ProcessedPayment.js // Fichero dónde se encuentre la página de pago realizado con éxito al que el usuario accede una vez rellenada la pasarela de pago correctamente.
 |  ├─cart
 |    └─Cart.js
 |    └─CartItem.js
 |    └─CartTotal.js
 |  ├─layout
 |    └─Header.js
 |    └─Footer.js
 |    └─Hero.js
 |    └─Main.js
 |    └─NotFound.js
 |  ├─ products //carpeta que contiene los componentes que renderizan los productos en la página principal y en /shop , y de manera individual.
 |    └─FeaturesdProdDetail.js
 |    └─FeaturedProduct.js
 |    └─FeaturedCollection.js
 |  ├─ App.js // fichero principal donde renderizo todos los componentes creados
 |  ├─ context
 |     └─cart-context.js
 |     └─cart-reducers.js
 |     └─products-context.js
 |  ├─ images
 |  ├─service //carpeta dónde se encuentra el api que utilizo para buscar los datos de todos los países y así pintarlos en el campo del formulario de la pasarela de pago.
 |     └─api.js
 |  ├─styles
 |   ├─Layout
 |     └─Header.scss
 |     └─Footer.scss
 |     └─Hero.scss
 |     └─Main.scss
 |     └─NotFound.scss
 |   ├─cart
 |     └─Cart.scss
 |   ├─checkout
 |     └─Checkout.scss
 |     └─Payment.scss
 |     └─ProcessPayment.scss
 |   ├─products
 |     └─Featured.scss
 |       └─FeaturedProduct.scss
 |   ├─ App.scss
 |   ├─ Mixins.scss
 |   ├─ Variables.scss
 |   ├─ index.js


```

## Contact info

<a href="mailto:sarayridouane@gmail.com"><img src="https://img.icons8.com/color/35/000000/gmail.png" alt="email"/></a>
<a href="https://www.linkedin.com/in/sara-rd"><img src="https://img.icons8.com/color/35/000000/linkedin.png" alt="linkedin"/></a>
<a href="https://twitter.com/sara_rid" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="sara_rid" height="30" width="40" /></a>

## License

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
