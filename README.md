# Todo API (Backend)

API REST para la gestión de tareas (To-Do App) usando **Node.js**, **Express** y **MongoDB**.

---

## Descripción

Este backend permite:

- Crear, leer, actualizar y eliminar tareas.
- Manejo básico de errores.
- Validación simple de datos.
- API lista para ser consumida por un frontend independiente.

---

Endpoints:

Método/ Ruta / Descripción
GET /tasks / Listar todas las tareas
POST /tasks / Crear nueva tarea
PUT /tasks/:id / Editar una tarea existente
DELETE /tasks/:id / Eliminar una tarea

---

variables de entorno: . env

ejecutar en modo desarrollo:
npm run dev
La API correrá por defecto en http://localhost:3000.

---

Tecnologías

Node.js

Express

MongoDB (Atlas y local)

Mongoose

## CORS

Buenas prácticas implementadas

Código modular (routes, controllers, models)

Uso de variables de entorno

Manejo centralizado de errores

Configuración CORS para frontend

--- diagrama ASCII

        ┌─────────────┐
        │   Cliente   │
        │  (Frontend) │
        └─────┬───────┘
              │ HTTP Requests (GET, POST, PUT, DELETE)
              ▼
       ┌───────────────┐
       │   Express.js  │
       │  (Backend)    │
       └─────┬─────────┘
             │
             │ Mongoose
             ▼
       ┌───────────────┐
       │   MongoDB     │
       │ (Atlas/Local) │
       └───────────────┘

## Instalación

Clonar el repositorio:

```bash
git clone 
cd todo-api
node v 18.20.2
vite
npm install

```
