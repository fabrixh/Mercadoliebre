# Proyecto integrador Mercado Liebre 📦

Mercado Liebre es una aplicación web de comercio electrónico donde los usuarios pueden buscar productos, registrarse, iniciar sesión y ver ofertas basadas en sus visitas anteriores.


<img src="./public/images/logo-mercado-liebre.svg" alt="Vista Previa del Video" width="220">


## 📑 Características

- **Página principal**: Muestra un banner y secciones de productos basados en visitas anteriores y ofertas.
- **Formulario de Registro**: Permite a los usuarios crear una cuenta proporcionando su información personal.
- **Formulario de Inicio de Sesión**: Permite a los usuarios iniciar sesión en su cuenta.
- **Barra de Búsqueda**: Permite a los usuarios buscar productos en el sitio.

## 👨🏻‍💻 Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos para la aplicación.
- **JavaScript**: Funcionalidades dinámicas en la aplicación.
- **Node.js** y **Express**: Backend para manejar las solicitudes del formulario de registro y login.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:



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

## 🎯 Consignas Prácticas Integradoras a Cumplir

| Clase | Descripción | Enlace |
|-------|-------------|--------|
| N17 | Estructura de un sitio web | [Ver](https://drive.google.com/file/d/1L7st7e2N9_6o6Yk5yaTT0OZk4ad0YJHV/view) |
| N18 | Agregando estilos | [Ver](https://drive.google.com/file/d/1P0k5uabfhBXmhtf_MalPUHWArxFtCX9U/view) |
| N19 | Diseño adaptativo | [Ver](https://drive.google.com/file/d/1r7aFOtVMpLnFS3-aiA9eraNYp-5KRfqa/view) |
| N20 | Posicionamiento avanzado FlexBox | [Ver](https://drive.google.com/file/d/1flX4YlO42VQC0YTCXYZsKN8FedsUykjV/view) |
| N21 | Formularios | [Ver](https://drive.google.com/file/d/1RxTxwmrUCc0WOoRg6_hyqNzq2FMYNDs1/view) |
| N22 | Organizando Elementos | [Ver](https://drive.google.com/file/d/1IZMZZQnK0auf_LFdOOUyl-tg63fjLSfw/view) |

## 🚀 Instalación

### 💻 Servidor local en Visual Studio Code

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/fabrixh/Mercadoliebre.git

2. Instala las dependencias necesarias:

   ```bash
   npm install

3. Inicia el servidor local:
 
   ```bash
   node app.js

4. Abre el navegador web y tipea:


   ```bash
     http://localhost:3030/
    ```


   
### 🌐 Depliegue en Servidor Web Render

1. Crea una cuenta en: 

   ```bash
      https://dashboard.render.com/create?type=web
    ```
      Continua en *New WebServer > Build and deploy from a Git repository > Next*

2. Puedes copiar el enlace del repositorio debajo en *Public Git repository*:
   ```bash
      https://github.com/fabrixh/Mercadoliebre
    ```
3. Define la configuración con los comandos más importantes:
   - Name: *descriptivo del proyecto*
   - Build Command: ```npm install```
   - Start Command: ```npm start```

4. Ejecutar el boton ```Deploy Web Service``` Si todo se cumple, el servidor estará en línea con el enlace para acceder al sitio. O accede a este enlace para verlo activo:

   ```bash
      https://ml-fabrixh.onrender.com/
    ```
