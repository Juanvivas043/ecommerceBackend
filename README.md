# 🛒 E-Commerce API REST Backend

Una API REST robusta, escalable y completamente tipada con **TypeScript** y **Express** para dar soporte a una plataforma de comercio electrónico. Utiliza **PostgreSQL** como base de datos relacional y **JWT** (JSON Web Tokens) para una autenticación segura y basada en roles.

---

## 🛠️ Tecnologías y Herramientas

*   **Entorno de Ejecución:** [Node.js](https://nodejs.org/) (v20+)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estático seguro)
*   **Framework Web:** [Express.js](https://expressjs.com/)
*   **Base de Datos:** [PostgreSQL](https://www.postgresql.org/) (Mediante el cliente `pg`)
*   **Autenticación:** [JSON Web Tokens (JWT)](https://jwt.io/)
*   **Entorno de Desarrollo:** [tsx](https://github.com/privatenumber/tsx) (Ejecución ultrarrápida sin compilación manual previa)
*   **Contenedores:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## 📂 Estructura del Proyecto

El backend sigue una arquitectura limpia basada en capas de responsabilidad:

```text
src/
├── config/         # Configuración del entorno y base de datos (Pool de PostgreSQL)
├── controllers/    # Lógica de negocio de la API (Manejo de Requests y Responses)
├── models/         # Modelos de datos y consultas directas a la Base de Datos (SQL)
├── routes/         # Definición de rutas y endpoints modulares de Express
├── middlewares/    # Funciones intermediarias (Validación, autenticación con JWT)
├── utils/          # Utilidades y funciones auxiliares reutilizables
└── index.ts        # Punto de entrada de la aplicación
```

---

## ⚙️ Configuración del Entorno

Para ejecutar este proyecto, necesitas configurar tus variables de entorno. Crea un archivo `.env` en la raíz del proyecto basándote en la siguiente estructura:

```env
# URL de conexión a tu base de datos PostgreSQL
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/nombre_bd

# Secreto de encriptación para la generación de JWT
JWT_SECRET=tu_secreto_super_seguro
```

---

## 🚀 Instalación y Ejecución

### Opción A: Desarrollo Local con Node.js

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Iniciar el servidor en modo desarrollo (con recarga automática):**
   ```bash
   pnpm dev
   ```
   *El servidor se levantará en http://localhost:3000*

### Opción B: Utilizando Docker

Si prefieres ejecutar el entorno dentro de un contenedor Docker aislado:

1. **Construir e iniciar los contenedores:**
   ```bash
   docker-compose up --build
   ```

---

## 🛣️ Endpoints de la API

| Método | Endpoint | Descripción | Requiere Autenticación |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Estado del servidor y prueba de conexión a la base de datos | No |
| **POST** | `/login` | Autenticación y generación de Token JWT (Simulado) | No |
| **GET** | `/api/products` | Obtiene el listado de productos activos (con stock) | No |

### Ejemplo de Respuestas

#### Obtener Productos (`GET /api/products`)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Camiseta Deportiva",
      "price": 29.99,
      "stock": 45,
      "category_id": 2
    }
  ]
}
```
