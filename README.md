<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

# 📌 NestJS Base Template

Esta es una plantilla base para aplicaciones desarrolladas con **NestJS**. Incluye:
- Autenticación y autorización con **JWT Strategy**.
- Manejo básico de archivos (carga y consulta).
- Configuración lista para **Docker**.

## 🚀 Instalación y configuración

### 1️⃣ Clonar el proyecto
```bash
  git clone <URL_DEL_REPOSITORIO>
  cd <NOMBRE_DEL_PROYECTO>
```

### 2️⃣ Instalar dependencias
Usando **Yarn**:
```bash
yarn install
```

O usando **npm**:
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Copia el archivo `.env.template` y renómbralo a `.env`:
```bash
cp .env.template .env
```
Edita el archivo `.env` y asigna los valores adecuados a las variables de entorno.

### 4️⃣ Levantar la base de datos y el backend
Asegúrate de tener **Docker** instalado y ejecuta:
```bash
docker compose up -d
```
Esto iniciará los servicios en contenedores.

### 5️⃣ Iniciar el servidor en modo desarrollo
```bash
yarn start:dev
```
O con **npm**:
```bash
npm run start:dev
```

### 6️⃣ Ejecutar el seed de la base de datos
Para poblar la base de datos con datos iniciales:
```bash
curl -X GET http://localhost:4200/api/seed
```

## 📂 Estructura del proyecto
```
📦 src
 ┣ 📂 auth        # Módulo de autenticación y autorización
 ┃ ┣ 📂 decorators   # Decoradores personalizados
 ┃ ┣ 📂 dto          # Data Transfer Objects
 ┃ ┣ 📂 entities     # Entidades
 ┃ ┣ 📂 guards       # Guardias de autenticación
 ┃ ┣ 📂 interfaces   # Interfaces
 ┃ ┗ 📂 strategies   # Estrategias de autenticación
 ┣ 📂 common      # DTOs compartidos
 ┣ 📂 files       # Módulo de manejo de archivos
 ┃ ┗ 📂 helpers      # Utilidades para archivos
 ┣ 📂 seed        # Datos iniciales
 ┃ ┗ 📂 data         # Datos de prueba
 ┣ 📂 static      # Archivos estáticos (ej. uploads)
 ┗ 📜 main.ts     # Archivo principal
```

## 📌 Tecnologías usadas
- **NestJS** - Framework principal.
- **JWT** - Autenticación basada en tokens.
- **TypeORM** - ORM para la base de datos.
- **Docker** - Contenedores para el backend y la base de datos.


---
Hecho con ❤️ usando **NestJS** 🚀

