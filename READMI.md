# API de Gestión de Eventos Corporativos

Esta aplicación es una API para gestionar eventos corporativos, que permite administrar eventos, asistentes y tipos de eventos. La API está construida utilizando Node.js con Express y Sequelize, y se conecta a una base de datos SQL Server.

## Estructura de la Base de Datos

La base de datos consta de las siguientes tablas principales:

1. *Events*: Representa los eventos corporativos con campos como title, description, date y eventTypeId (referencia a EventTypes).
2. *Attendees*: Tabla para gestionar los asistentes a los eventos, con campos como name, email, eventId (referencia a Events) y roleId (referencia a Roles).
3. *EventTypes*: Define los tipos de eventos (como conferencia, taller, seminario) y contiene campos como name y description.
4. *Roles*: Define los roles de los asistentes en los eventos (como Orador, Invitado, Organizador), con campos name y description.

### Diagrama de la Base de Datos (Relaciones)


- *Events* está relacionado con *Attendees* (uno a muchos).
- *EventTypes* está relacionado con *Events* (uno a muchos).
- *Roles* está relacionado con *Attendees* (uno a muchos).

## Arquitectura de la Aplicación

La arquitectura de la aplicación sigue el patrón MVC (Modelo-Vista-Controlador), dividiendo el código en controladores, modelos, rutas y configuraciones:

1. *Controladores*: Contienen la lógica de negocio para las diferentes operaciones de la API (como crear eventos, agregar asistentes, obtener tipos de eventos).
   - Ubicados en la carpeta /controllers.
   - Archivos principales: attendeeController.js, eventController.js, eventTypeController.js.

2. *Modelos*: Definen las tablas de la base de datos y las relaciones entre ellas. Utilizan Sequelize como ORM para mapear los modelos a SQL Server.
   - Ubicados en la carpeta /models.
   - Archivos principales: attendee.js, event.js, eventType.js, role.js.

3. *Rutas*: Definen los endpoints de la API y mapean las rutas a los métodos de los controladores.
   - Ubicados en la carpeta /routes.
   - Archivos principales: attendeeRoutes.js, eventRoutes.js, eventTypeRoutes.js.

4. *Configuración de Base de Datos*: Configuración de Sequelize para conectar con SQL Server y manejar las migraciones y seeders.
   - Ubicada en /config/config.json.
   
5. *Migraciones y Seeders*: Scripts para crear las tablas en la base de datos y poblar datos iniciales.
   - Migraciones en /migrations.
   - Seeders en /seeders.

6. *Documentación de API con Swagger*: La documentación de la API está disponible en formato Swagger y puede ser visualizada en el navegador en la ruta /api-docs.

## Entorno de Pruebas

La API está disponible en el entorno de pruebas en el siguiente enlace:
[Entorno de Pruebas de la API](URL_DE_PRUEBAS)



### Ejemplo de Uso

- *Obtener todos los eventos*: GET /api/events
- *Crear un nuevo asistente*: POST /api/attendees
- *Obtener tipos de eventos*: GET /api/event-types
- *Eliminar un rol*: DELETE /api/roles/:id

## Requisitos Previos

- Node.js y npm instalados
- Base de datos SQL Server en funcionamiento
- Configuración de la conexión a la base de datos en /config/config.json