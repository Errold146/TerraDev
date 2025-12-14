# TerraDev

TerraDev es una aplicación construida con Next.js 15, Prisma (v6) y NextAuth para gestionar autenticación y perfiles de usuario. Es una app lista para empezar a añadir trailers y películas nuevas o no tan nuevas para el disfrute de la familia, de momento no hay películas completas pero se puede ver toda su funcionalidad y el buen gusto por el UI/UX

[![Prisma](https://img.shields.io/badge/Prisma-5.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Neon](https://img.shields.io/badge/Neon-Serverless-00E699?logo=neon&logoColor=white)](https://neon.tech/)
[![Zustand](https://img.shields.io/badge/Zustand-4.x-ffb300?logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Sonner](https://img.shields.io/badge/Sonner-1.x-4F46E5?logo=sonner&logoColor=white)](https://sonner.emilkowal.ski/)
[![lucide-react](https://img.shields.io/badge/lucide--react-latest-0A0A0A?logo=lucide&logoColor=white)](https://lucide.dev/)
[![bcryptjs](https://img.shields.io/badge/bcryptjs-2.x-3388FF?logo=auth0&logoColor=white)](https://www.npmjs.com/package/bcryptjs)


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

**Características**
- Inicio de sesión con `next-auth` y adaptador Prisma.
- Gestión de perfiles por usuario (crear / eliminar perfiles).
- Interfaz con componentes Radix UI y Tailwind.

**Requisitos**
- Node.js 18+ (recomendado).
- PostgreSQL (o proveedor compatible) — en este proyecto se usa una base de datos Neon (`DATABASE_URL`).
- `npm` o `pnpm`/`yarn`.

**Variables de entorno**
Crear un archivo `.env` en la raíz con al menos:

```
DATABASE_URL="postgresql://..."
AUTH_SECRET="..."
```

**Scripts útiles**
- `npm run dev` — inicia el servidor de desarrollo (Next.js/Turbopack).
- `npm run build` — compila para producción.
- `npm start` — inicia la aplicación en modo producción.

**Prisma (v6)**
Este proyecto usa Prisma v6. Comandos comunes:

```bash
npx prisma generate       # Genera el cliente Prisma
npx prisma migrate dev    # Aplica migraciones en entorno dev
npx prisma migrate reset  # Resetea la BD (ELIMINA DATOS) — cuidado
```

> Nota: si actualizas a Prisma v7 tendrás que mover la `url` de `datasource` a `prisma.config.ts` y ajustar la inicialización del cliente.

**Desarrollo local**
- Asegúrate de tener las variables de entorno correctas antes de ejecutar las migraciones.
- Evita importar el cliente Prisma (`db`) directamente en componentes cliente (`"use client"`): usa rutas de servidor, server components o actions para ejecutar consultas.

**Errores comunes y soluciones**
- Hydration errors (SSR ↔ cliente): Radix genera ids dinámicos para triggers/content (dialogs/sheets). Si ves errores de hidratación añade `id` en el contenido y `aria-controls` en el trigger para estabilizar ids.
- Prisma en el cliente: asegurarse de que `db` solo se importe en código servidor.
- Si la BD no está sincronizada con migraciones: `npx prisma migrate reset --force` (pierde datos) o reconciliar migraciones manualmente.

**Contribuir**
Haz fork del repo, crea una rama con tu feature/bugfix y abre un PR. Añade pruebas o describe cómo reproducir el bug.

---

Si quieres, puedo agregar instrucciones adicionales (ej. cómo probar autenticación, cómo desplegar o scripts para seeds/mocks). ¿Quieres que añada alguna sección específica?

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ✉️ Contacto
[![GitHub](https://img.shields.io/badge/GitHub-Errold146-181717?logo=github)](https://github.com/Errold146)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ErroldNúñezS-0A66C2?logo=linkedin)](https://linkedin.com/in/errold-núñez-sánchez) 
[![Email](https://img.shields.io/badge/Email-ErroldNúñezS-D14836?logo=gmail)](mailto:errold222@gmail.com)