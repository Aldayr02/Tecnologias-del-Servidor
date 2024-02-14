# Tarea 2 - Creación de Middlewares

El package.jos tiene los siguientes scripts para correr la API:

    npm start
    npm run dev

Los paquetes que se instalaron son:

    "axios": "^1.6.7",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.4",
    "express": "^4.18.2",
    "nodemon": "^3.0.3"

Para pobrar la funcionalidad utilize la extension de vs **REST Client** por lo que si se instala esa extension se podran probar los endpoints en el archivo *requests.http*

Los roles del usuario estan hardcodeados en el archivo *loginCheck_middleware.js* y el role que permite hacer los endpoints es *"Admin"*, cualquier otra cosa regresara 403 Forbidden