# Node js entity node starter

scale your NodeJs back-end as fast

### Folder architecture

- `/src` - All the source code get written here
  - `apps/` - Contains each individual service
  - `prisma/` - Contains the DB related service
    - `migrations/` - DB migration files
    - `prisma.service.ts` - open DB connection
    - `schema.prisma` - DB schema
  - `utils/` - utilities that are used by the app
  - `app.ts` - set the node js middleware and configurations
  - `server.ts` - Contains the logic for running the server
  - `routers.ts` - Contains the routes handling
