...............
<a id="readme-top"></a>
# Proyecto integrador Mercado Liebre 📦

Mercado Liebre es una aplicación web de comercio electrónico donde los usuarios pueden buscar productos, registrarse, iniciar sesión y ver ofertas basadas en sus visitas anteriores.   
   
  


<abn href="https://ml-fabrixh.onrender.com/" style="display: block; text-align: center;">
  <img src="./public/images/logo-mercado-liebre.svg" alt="Vista de Mercado Liebre" width="220"> 
</a>
 
<br> <!-- Salto de línea -->

<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li><a href="#readme-top"><sub>Inicio</sub></a></li>
    <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-características"><sub>Características</sub></a></li>
    <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-tecnologías-utilizadas"><sub>Tecnologías Utilizadas</sub></a></li>
    <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-estructura-del-proyecto"><sub>Estructura del Proyecto</sub></a></li>
    <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-hoja-de-ruta"><sub>Hoja de Ruta</sub></a></li>
    <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-instalación"><sub>Instalación</sub></a></li>
    <ul>
      <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-servidor-local-en-visual-studio-code"><sub>Servidor local en Visual Studio Code</sub></a></li>
      <li><a href="https://github.com/fabrixh/Mercadoliebre?tab=readme-ov-file#-despliegue-en-servidor-web-render"><sub>Despliegue en Servidor Web Render</sub></a></li>
    </ul>
  </ol>
</details>

## 📑 Características

- **Página principal**: Muestra un banner y secciones de productos basados en visitas anteriores y ofertas.
- **Formulario de Registro**: Permite a los usuarios crear una cuenta proporcionando su información personal.
- **Formulario de Inicio de Sesión**: Permite a los usuarios iniciar sesión en su cuenta.
- **Barra de Búsqueda**: Permite a los usuarios buscar productos en el sitio.

## 👨🏻‍💻 Tecnologías Utilizadas


- <img src="https://cdn3.emoji.gg/emojis/HTML.png" width="16"> **HTML5**: Estructura de la aplicación.
- <img src="https://cdn3.emoji.gg/emojis/css.png" width="16"> **CSS3**: Estilos para la aplicación.
- <img src="https://cdn3.emoji.gg/emojis/node_js.png" width="16"> **JavaScript**: Funcionalidades dinámicas en la aplicación.
 - <img src="https://cdn3.emoji.gg/emojis/node_js.png" width="16"> **Node.js** y **Express**: Backend para manejar las solicitudes del formulario de registro y login.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente forma:



```bash
.
├── public/
│   ├── css/
│   │   └── styles.css            # Estilos CSS de la aplicación
│   └── images/
│        ├── img-cafetera-moulinex.jpg
│        ├── img-home-banner.jpg
│        ├── img-macbook-pro-2019.jpg
│        ├── img-samsung-galaxy-s10.jpg
│        ├── img-tv-samsung-smart.jpg
│        ├── logo-mercado-liebre.svg
│        └── logo.png              # Logo de la aplicación                 
├── views/
│   ├── index.html                # Página principal de la aplicación
│   ├── login.html                # Formulario de inicio de sesión
│   └── register.html             # Formulario de registro de usuario
├── app.js                        # Archivo principal del servidor Node.js
├── package.json                  # Archivo de configuración del proyecto y dependencias
├── README.md                     # Documentación del proyecto
└── .gitignore                    # Archivos y directorios a ignorar por Git
```

## 🎯 Hoja de Ruta

| Clase | Descripción | Hoja de ruta | Enlace |
|-------|-------------|--------------|--------|
| N17   | Estructura de un sitio web | &#9745; ⬜ ⬜ ⬜ ⬜ ⬜ | [Ver](https://drive.google.com/file/d/1L7st7e2N9_6o6Yk5yaTT0OZk4ad0YJHV/view) |
| N18   | Agregando estilos | &#9745; &#9745; ⬜ ⬜ ⬜ ⬜ | [Ver](https://drive.google.com/file/d/1P0k5uabfhBXmhtf_MalPUHWArxFtCX9U/view) |
| N19   | Diseño adaptativo | &#9745; &#9745; &#9745; ⬜ ⬜ ⬜ | [Ver](https://drive.google.com/file/d/1r7aFOtVMpLnFS3-aiA9eraNYp-5KRfqa/view) |
| N20   | Posicionamiento avanzado FlexBox | &#9745; &#9745; &#9745; &#9745; ⬜ ⬜ | [Ver](https://drive.google.com/file/d/1flX4YlO42VQC0YTCXYZsKN8FedsUykjV/view) |
| N21   | Formularios | &#9745; &#9745; &#9745; &#9745; &#9745; ⬜ | [Ver](https://drive.google.com/file/d/1RxTxwmrUCc0WOoRg6_hyqNzq2FMYNDs1/view) |
| N22   | Organizando Elementos | &#9745; &#9745; &#9745; &#9745; &#9745; &#9745; | [Ver](https://drive.google.com/file/d/1IZMZZQnK0auf_LFdOOUyl-tg63fjLSfw/view) |

 

## 🚀 Instalación

### 💻 Servidor local en Visual Studio Code

1. Clona el repositorio en tu máquina local con el siguiente comando a continuación:

   ```bash
   git clone https://github.com/fabrixh/Mercadoliebre.git

2. Instala las dependencias necesarias:

   ```bash
   npm install

3. Inicia el servidor local:
 
   ```bash
   node app.js

4. Abre tu navegador web y escribe en la barra de direcciones:


   ```bash
     http://localhost:3030/
    ```


   
### 🌐 Despliegue en Servidor Web Render

1. Crea una cuenta en Render usando el enlace a continuación. Si tienes más preguntas, consulta la <a href="https://drive.google.com/file/d/1vHm07KcydinAfDofaiOoAPcH4tkj6kL_/view" style="display: inline-block; padding: 10px 15px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Guía Detallada Deploy.pdf</a>.


   ```bash
      https://dashboard.render.com/create?type=web
    ```
      Continúa en ***New WebServer > Build and deploy from a Git repository > Next***


3. Puedes copiar el enlace del repositorio debajo en ***Public Git repository***:
   ```bash
      https://github.com/fabrixh/Mercadoliebre
    ```
4. Define la configuración con los comandos más importantes:
   - Name: *descriptivo del proyecto*
   - Build Command: ```npm install```
   - Start Command: ```npm start```

5. Ejecutar el boton ```Deploy Web Service``` Si todo se cumple, el servidor estará en línea con el enlace para acceder al sitio. O accede a este enlace para verlo activo:

   ```bash
      https://ml-fabrixh.onrender.com/
    ```
<p align="right">(<a href="#readme-top">Volver arriba</a>)</p>


