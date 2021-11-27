# Minimalistic-shop-checkout-payment-getaway

# Calidad de código

[![CodeFactor](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout/badge)](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout)

# Proyecto

El proyecto consiste en crear una pasarela de pago sencilla que permite al usuario tener una experiencia cómoda a la hora de realizar el pago. El proyecto también contiene una web de comercio simple que permite al usuario seleccionar un producto y su cantidad antes de proceder a la pasarela de pago.

![getway payment](https://github.com/Sararid/e-commerce-checkout/blob/main/src/gif/paymentget.gif)

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
 ├─ components // los ficheros de esta carpeta contiene todos los componentes que se concatenan en el fichero App.js e index.js.
 |  ├─checkout
 |    └─Checkout.js
 |    └─CountriesDropDown.js //fichero donde se hace la llamada al api e integración de la lista de países en el select input.
 |    └─Payment.js //fichero donde se encuentra el formulario de la pasarela de pago con todos los campos a rellanar por el usuario.
 |    └─ProcessedPayment.js // Fichero donde se encuentre la página de pago realizado con éxito al que el usuario accede una vez rellenada la pasarela de pago correctamente.
 |  ├─cart //carpeta donde figuran los componentes con la información de los productos seleccionados por el usuario
 |    └─Cart.js
 |    └─CartItem.js
 |    └─CartTotal.js
 |  ├─layout //carpeta que contiene los ficheros de cabercera, footer y hero , así como el componente de página no encontrada
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
 |  ├─ context //carpeta donde guardo las varibales y funciones globales para compartir con el resto de componentes (para no utilizar Props)
 |     └─cart-context.js
 |     └─cart-reducers.js
 |     └─products-context.js
 |  ├─ images
 |  ├─service //carpeta dónde se encuentra el api que utilizo para buscar los datos de todos los países y así pintarlos en el campo del formulario de la pasarela de pago.
 |     └─api.js
 |  ├─styles // carpeta donde se encuentra los ficheros de estilo de los componentes divididas en carpetas con similar estructura a la de los componentes.
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
 |   ├─ Mixins.scss //fichero donde guardo mis funciones globales
 |   ├─ Variables.scss
 |   ├─ index.js


```

## Contact info

<a href="mailto:sarayridouane@gmail.com"><img src="https://img.icons8.com/color/35/000000/gmail.png" alt="email"/></a>
<a href="https://www.linkedin.com/in/sara-rd"><img src="https://img.icons8.com/color/35/000000/linkedin.png" alt="linkedin"/></a>
<a href="https://twitter.com/sara_rid" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="sara_rid" height="30" width="40" /></a>

## License

[MIT](https://opensource.org/licenses/MIT)

#### ENGLISH VERSION

# Minimalistic-shop- checkout-payment-getaway

# Code quality

[![CodeFactor](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout/badge)](https://www.codefactor.io/repository/github/sararid/e-commerce-checkout)

# Project

The project consists of creating a simple payment gateway that allows the user to have a comfortable experience when making the payment. The project also contains a simple commerce website that allows the user to select a product and its quantity before proceeding to the payment gateway.

![getway payment](https://github.com/Sararid/e-commerce-checkout/blob/main/src/gif/paymentget.gif)

## Background

This project is a practical exercise to participate in the JUMP2DIGITAL 2021 hackathon. With this exercise I have been able to reinforce my knowledge of front-end (HTML5 / CSS3 / SASS / MIXINS / BEM), JavaScript and ReactJS, and the use of external APIs.
With this project I have also learned for the first time the use of ** useContext ** (similar to redux), React hook that allows me to create and share global variables with different components of my application.

# Main objectives and user stories

1. Layout skills

2. Use of third-party Apis to fill in form fields

- [x] Task 1 → I can see the PC view correctly.
- [x] Task 2 → I can see the mobile view correctly.
- [x] Task 3 → If I enter a field that does not correspond to a credit card pattern, an error occurs.
- [x] Task 4 → If I enter an email that does not correspond to the email pattern, a warning error appears.
- [x] Task 5 → I can choose to see the complete list of countries.

## Stack

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
:More efficient component structure and use of router, and hooks such as useContext, useEffect or useState, etc.

![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
:Website layout.

![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
:Styling of the website.

![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
:Framework of CSS to facilitate the use of CSS3 and make it more practical. Also, use of **mixins** and **variables** in order to improve the code and make it more efficient. Flex was used to design parts of the layout and react bootstrap to build e. g. the hero.

![](https://img.shields.io/badge/gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
:Compilation system to automate repetitive workflows and compose them into efficient build pipelines.

![](https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=61DAFB)
:Facilitates Node.js default package management.

![](https://img.shields.io/badge/Git-F74E27?style=for-the-badge&logo=git&logoColor=white)
:Version control.

## API

Two third-party APIs have been used for this project:

1. External API to fetch products from the website. => (https://fakestoreapi.com/products)
2. External API to render the list of countries in the "select" field of the payment form. => (https://restcountries.com/v3.1/all)

## Installation

** NOTE: ** [Node JS] (https://nodejs.org/) is required to work with this Starter Kit:

_Steps to follow to start a project from scratch: _

1. ** Clone this repository from GitHub **.
1. ** Open a terminal ** in the root folder of the repository.
1. ** Install the local dependencies ** by executing the command in the terminal:

```bash
npm install
```

** Steps to start the project: **

Once all the dependencies are installed, the project can be started. ** to start the project ** run the command:

```bash
npm start
```

This command:

- ** Open a window of your browser and show the web page ** (http: // localhost: 3000 / # /).
- It also ** processes the ** HTML, SASS / CSS and JS files and ** generates and saves them in the `public /` ** folder. For instance:
  - Convert SASS files into CSS.

If you want to edit this project after executing `npm start` you can start editing all the files that are inside the`src /`folder and programming comfortably.

** To generate my page for production run the command: **

```bash
npm run githubpages
```

A shortcut that generates the production version and pushes the `docs /` folder at once. We recommend looking at the `package.json` file to learn how it works.

Also instead of cloning the repository, you can conveniently download it to your local server for review.

## Folder structure

Please find below the explanation of the structure of the project.

```
src
 ├─ components // The files in this folder contain all the components that are concatenated in the App.js and index.js files.
 |  ├─checkout
 |    └─Checkout.js
 |    └─CountriesDropDown.js // File where the call to the API is made and the list of countries is integrated in the select input.
 |    └─Payment.js // File where the payment gateway form is found with all the fields to be filled in by the user.
 |    └─ProcessedPayment.js // File where the successful payment page is located, which the user accesses once the payment gateway has been filled in correctly.
 |  ├─cart // Folder where the components are listed with the information of the products selected by the user.
 |    └─Cart.js
 |    └─CartItem.js
 |    └─CartTotal.js
 |  ├─layout // Folder containing header, footer and hero files, as well as the page-not-found component.
 |    └─Header.js
 |    └─Footer.js
 |    └─Hero.js
 |    └─Main.js
 |    └─NotFound.js
 |  ├─ products // Folder that contains the components that render the products on the main page and in the page "/shop", and individually.
 |    └─FeaturesdProdDetail.js
 |    └─FeaturedProduct.js
 |    └─FeaturedCollection.js
 |  ├─ App.js // Main file where I render all the components created.
 |  ├─ context // Folder where I keep the variables and global functions to share with the rest of the components (in order not to use Props).
 |     └─cart-context.js
 |     └─cart-reducers.js
 |     └─products-context.js
 |  ├─ images
 |  ├─service // Folder that contains the API used to look for the data of all the countries in order to paint them in the form field of the payment gateway.
 |     └─api.js
 |  ├─styles // Folder where the style files of the components are located, divided into folders with a similar structure to that of the components.
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
 |   ├─ Mixins.scss // File where my global functions are stored.
 |   ├─ Variables.scss
 |   ├─ index.js


```

## Contact info

<a href="mailto:sarayridouane@gmail.com"><img src="https://img.icons8.com/color/35/000000/gmail.png" alt="email"/></a>
<a href="https://www.linkedin.com/in/sara-rd"><img src="https://img.icons8.com/color/35/000000/linkedin.png" alt="linkedin"/></a>
<a href="https://twitter.com/sara_rid" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="sara_rid" height="30" width="40" /></a>

## License

[MIT](https://opensource.org/licenses/MIT)
