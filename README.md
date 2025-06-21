## 🍽️ Pedidos Ágiles - API de Gestión de Restaurante

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue?logo=express)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-blueviolet?logo=sequelize)
![MySQL](https://img.shields.io/badge/MySQL-8.x-blue?logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-orange?logo=swagger)

---

## 📝 Descripción del Proyecto

Backend API construida con **Node.js**, **Express.js** y **Sequelize**, que soporta las operaciones de un sistema gastronómico. Incluye endpoints para autenticación de usuarios, gestión de menús, procesamiento de pedidos, y administración de reservas.

---

## 🛠️ Tecnologías Utilizadas

* **Node.js** (v18.x o superior) - Entorno de ejecución JavaScript.
* **Express.js** (v4.x) - Framework web para Node.js.
* **Sequelize** (v6.x) - ORM para Node.js, facilita la interacción con bases de datos relacionales.
* **MySQL** (v8.x o superior) - Sistema de gestión de bases de datos relacionales.
* **`mysql2`** - Driver para conectar Sequelize con MySQL.
* **`jsonwebtoken`** - Para la implementación de tokens de autenticación JWT.
* **`bcrypt.js`** - Para el hashing y comparación segura de contraseñas.
* **`dotenv`** - Para cargar variables de entorno desde un archivo `.env`.
* **`cors`** - Middleware para habilitar Cross-Origin Resource Sharing.
* **`swagger-jsdoc`** & **`swagger-ui-express`** - Para generar y servir la documentación interactiva de la API.

---

## ⚙️ Requisitos Previos

Antes de poder instalar y ejecutar este proyecto, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

* **Node.js y npm:**
    * Puedes descargarlo desde el sitio oficial: [nodejs.org](https://nodejs.org/). Se recomienda la versión LTS (Long Term Support). `npm` (Node Package Manager) viene incluido con Node.js.
* **MySQL Server:**
    * Necesitarás una instancia de MySQL corriendo. Puedes instalarlo directamente ([mysql.com/downloads](https://dev.mysql.com/downloads/)), usar Docker ([docker.com](https://www.docker.com/)) con una imagen de MySQL, o un servicio de base de datos en la nube.

---

## ⚙️ Instalación y 💻 Ejecución del Proyecto

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Clonar el Repositorio

Abre tu terminal o Git Bash y ejecuta el siguiente comando para clonar el repositorio y navegar a su directorio:

```bash
git clone https://github.com/joakinve/TTADS-Backend.git
cd TTADS-Backend
```

### 2. Instalar dependencias

Desde la raíz del proyecto (donde se encuentra `package.json`), ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Configurar variables de entorno

Este proyecto utiliza variables de entorno para gestionar configuraciones sensibles (como credenciales de base de datos, claves JWT, etc.).

* Crea un nuevo archivo en la raíz del proyecto llamado `.env`.

* Copia y pega el siguiente contenido en tu archivo `.env`, y reemplaza los valores de ejemplo con tus propias configuraciones:

```env
PORT=3000 # Puerto del Backend

# Config DB MySQL
DB_TYPE=mysql
DB_HOST=localhost # reemplazar por el host de la web si se está deployando
DB_PORT=3306 # Puerto por defecto de MySQL
DB_USER=tu_usuario_mysql    # <-- Cambia esto por tu usuario de MySQL
DB_PASS=tu_clave_mysql      # <-- Cambia esto por tu contraseña de MySQL
DB_NAME=tu_db_mysql         # <-- Cambia esto por el nombre de tu base de datos de MySQL
DB_TIMEZONE='-03:00'        # <-- Cambia esto por tu zona horaria 

HASH_KEY=tu_clave_secreta # Frase secreta para codificar el token JWT

# EMAIL
EMAIL_USERNAME=tu_email # email de la cuenta que envía correos
EMAIL_PASSWORD=tu_clave # contraseña de la cuenta que envía correos

# URLs
URL_BACK= 'http://localhost:3000' # url completa en el que esta alojado el backend
URL_FRONT= 'http://localhost:4200' # url completa en el que esta alojado el frontend
```

**¡Importante!** Asegúrate de reemplazar los valores con tus propias credenciales y configuraciones.

### 4. Configurar y crear la base de datos

* **Crear la Base de Datos:**
Asegúrate de que tu servidor **MySQL** esté corriendo. Luego, crea la base de datos con el nombre especificado en tu `.env` (*DB_NAME*). Puedes hacerlo con un cliente de **MySQL** (**MySQL Workbench**, **DBeaver**, **phpMyAdmin**) o desde la línea de comandos de **MySQL** (```shell mysql -u usuario -p```):

```sql
CREATE DATABASE your_database_name;
-- Opcional: si necesitas especificar el conjunto de caracteres y la intercalación
-- CREATE DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
(Reemplaza `your_database_name` con el nombre de tu base de datos).

* **Ejecutar Migraciones de Sequelize:**
Las migraciones crearán las tablas y estructuras de base de datos definidas en tu proyecto.

```bash
npx sequelize db:migrate
```

* **Opcional: Seeders (Datos de Prueba):**
Si el proyecto incluye datos de prueba (seeders) para poblar tu base de datos con información inicial, puedes ejecutarlos con:

```bash
npx sequelize db:seed:all   # Opcional si tenés datos por defecto
```

### 5. Iniciar el servidor

Una vez que todas las dependencias estén instaladas y la base de datos configurada, puedes iniciar el servidor:

* **Modo de Desarrollo (con recarga automática):**
Si deseas que el servidor se reinicie automáticamente cada vez que hagas cambios en el código (útil durante el desarrollo), usa:

```bash
npm run dev
```
El servidor se ejecutará en el puerto especificado en tu `.env` (por defecto, http://localhost:3000). Una vez que el servidor esté en ejecución, podrás acceder a la documentación de la API en http://localhost:[`PUERTO_API`]/api-docs (ej. http://localhost:3000/api-docs).

* **Modo de Producción/Normal:**

```bash
npm run start
```

---
## 📚 Documentación de la API

¡Explora y prueba todos los endpoints de nuestra API!

Hemos documentado la API siguiendo el estándar OpenAPI (Swagger), lo que te permite interactuar con ella directamente desde tu navegador.

👉 **[Acceder a la Documentación Interactiva (Swagger UI)](http://localhost:3000/api-docs)**

Allí encontrarás:
- Descripciones claras
- Parámetros requeridos
- Respuestas posibles
- Esquemas de datos

---

## 🔐 Autenticación

La API utiliza **JWT** para proteger las rutas privadas.

### 1. Login

```http
POST /auth/login
Content-Type: application/json
```

**Body:**
```json
{
  "correo": "usuario@example.com",
  "contrasena": "123456"
}
```

**Respuesta:**
```json
{
  "token": "JWT_TOKEN_GENERADO"
}
```

### 2. Usar el token

Incluí el token en cada request privado:

```http
Authorization: Bearer TU_TOKEN
```

---

## 🚀 Endpoints principales

| Método | Ruta                     | Descripción                        |
|--------|--------------------------|------------------------------------|
| POST   | /usuarios/create         | Crear un nuevo usuario             |
| GET    | /mesas/:id               | Obtener una mesa                   |
| GET    | /menues                  | Obtener todos los menúes           |
| PATCH  | /productos/:id           | Modificar un producto              |
| DELETE | /reservas/:id            | Eliminar reserva                   |
| POST   | /usuarios/login          | Iniciar sesión y obtener token     |

> Para ver todos los endpoints disponibles, consultá `/api-docs`.

---

## ⚗️ Pruebas y herramientas recomendadas

- **Postman** o **Insomnia** para probar los endpoints.
- `npm run dev` para modo desarrollo con recarga automática (usando nodemon).
- `npm run lint` si agregás reglas de linting.
- `npm test` si el proyecto cuenta con pruebas automatizadas.

---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras un error, tienes sugerencias de mejora o deseas añadir nuevas funcionalidades, por favor, abre un issue o envía un Pull Request.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

## 👨‍💻 Autor

Desarrollado por: 
* [Gonzalo Castillo](https://github.com/Gonza077)
* [Juan Frontons](https://github.com/Jufron97)
* [Joaquin Vedoya](https://github.com/joakinve)

---
