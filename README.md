# TerraDev

TerraDev es una aplicación construida con Next.js 15, Prisma (v6) y NextAuth para gestionar autenticación y perfiles de usuario. Es una app lista para empezar a añadir trailers y películas nuevas o no tan nuevas para el disfrute de la familia, de momento no hay películas completas pero se puede ver toda su funcionalidad y el buen gusto por el UI/UX

[![Prisma](https://img.shields.io/badge/Prisma-6.x-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Player](https://img.shields.io/badge/React_Player-3.x-61DAFB?logo=react&logoColor=white)](https://www.npmjs.com/package/react-player)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Neon](https://img.shields.io/badge/Neon-Serverless-00E699?logo=neon&logoColor=white)](https://neon.tech/)
[![Zustand](https://img.shields.io/badge/Zustand-5.x-443E38?logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Sonner](https://img.shields.io/badge/Sonner-2.x-4F46E5?logo=sonner&logoColor=white)](https://sonner.emilkowal.ski/)
[![lucide-react](https://img.shields.io/badge/lucide--react-latest-0A0A0A?logo=lucide&logoColor=white)](https://lucide.dev/)
[![bcryptjs](https://img.shields.io/badge/bcryptjs-3.x-3388FF?logo=auth0&logoColor=white)](https://www.npmjs.com/package/bcryptjs)


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

## 🎬 Características

### Autenticación y Perfiles
- **Inicio de sesión seguro** con `NextAuth v5` y adaptador Prisma
- **Gestión de perfiles** por usuario (crear/eliminar perfiles personalizados)
## 📋 Requisitos
- **Node.js** 18+ (recomendado 20+)
- **PostgreSQL** (o proveedor compatible) — este proyecto usa Neon como base de datos serverless
- **npm**, `pnpm` o `yarn` como gestor de paqueteso** usando `react-player` con soporte para múltiples formatos
- **Controles completos** de reproducción (play, pause, volumen, fullscreen)
## 🔧 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/Errold146/TerraDev.git
cd terra-dev
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Variables de entorno
Crear un archivo `.env` en la raíz con las siguientes variables:

```env
# Database
DATABASE_URL="postgresql://usuario:password@host/database"

# NextAuth
AUTH_SECRET="tu-secret-key-generada"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configurar la base de datos
```bash
npx prisma generate       # Genera el cliente Prisma
npx prisma migrate dev    # Aplica migraciones en desarrollo
```

### 5. Iniciar el servidor de desarrollo
```bash
npm run dev
## 🗄️ Prisma (v6)
Este proyecto utiliza **Prisma v6** como ORM. Comandos útiles:

```bash
npx prisma generate          # Genera el cliente Prisma
npx prisma migrate dev       # Crea y aplica migraciones en desarrollo
npx prisma migrate reset     # Resetea la BD (⚠️ ELIMINA TODOS LOS DATOS)
npx prisma studio            # Abre Prisma Studio para ver/editar datos
```

> **Nota:** Si actualizas a Prisma v7, deberás personalizadas
## 🛠️ Desarrollo Local

### Mejores Prácticas
- ✅ Asegúrate de tener las variables de entorno correctas antes de ejecutar migraciones
- ✅ Evita importar el cliente Prisma (`db`) en componentes cliente (`"use client"`)
- ✅ Usa Server Components, Server Actions o Route Handlers para consultas a la base de datos
- ✅ El estado global (Zustand) se usa solo para datos del cliente (favoritos, usuario actual)

## 🐛 Errores Comunes y Soluciones
## 🚀 Funcionalidades Principales

### 📺 Reproductor de Películas
El reproductor utiliza **react-player**, una biblioteca versátil que soporta múltiples plataformas y formatos:

```tsx
// Implementación del reproductor
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

<ReactPlayer 
  src={movieUrl}
  playing={true}
  controls={true}
  loop={true}
  width="100%"
  height="100%"
/>
```

**Características del reproductor:**
- ✅ Soporte para múltiples formatos (MP4, WebM, OGG)
- ✅ Controles nativos de reproducción
- ✅ Modo fullscreen
- ✅ Control de volumen
- ✅ Carga dinámica para optimizar SSR

### ⭐ Sistema de Favoritos
Sistema de gestión de favoritos por usuario con persistencia local:

```typescript
// Hook personalizado con Zustand
const { addFavoriteFilm, removeFavoriteFilm, favoritesFilmsByUser } = useFavoritesFilms()

// Agregar película a favoritos
addFavoriteFilm(movieData)

// Eliminar de favoritos
removeFavoriteFilm(movieId)
```

**Características:**
- ✅ Almacenamiento separado por usuario
- ✅ Persistencia en localStorage
- ✅ Validación de duplicados automática
- ✅ Notificaciones toast con Sonner
- ✅ Estado global con Zustand

## 📚 Tecnologías y Librerías

### Core
- **Next.js 15** - Framework React con App Router y Turbopack
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5** - Tipado estático

### Base de Datos y ORM
- **Prisma 6** - ORM moderno para TypeScript
- **PostgreSQL** - Base de datos relacional
- **Neon** - PostgreSQL serverless para desarrollo y producción

### Autenticación
- **NextAuth v5** - Autenticación completa con soporte de sesiones
- **@auth/prisma-adapter** - Adaptador de Prisma para NextAuth
- **bcryptjs** - Encriptación de contraseñas

### Estado y Gestión de Datos
- **Zustand 5** - Gestión de estado global ligera y performante
- **React Hook Form** - Manejo de formularios con validación
- **Zod 4** - Validación de esquemas TypeScript-first
- **Axios** - Cliente HTTP para peticiones

### UI/UX
- **shadcn/ui** - Componentes de UI accesibles y personalizables
- **Radix UI** - Primitivos de UI sin estilos, totalmente accesibles
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Librería de iconos moderna y personalizable
- **Embla Carousel** - Librería de carruseles ligera y fluida
- **Sonner** - Sistema de notificaciones toast elegante

### Multimedia
- **React Player** - Reproductor de video/audio universal que soporta:
  - Archivos locales (MP4, WebM, OGG)
  - YouTube, Vimeo, Twitch
  - SoundCloud, Mixcloud
  - Streaming HLS/DASH

## 🤝 Contribuir
1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

**Lineamientos:**
- Añade pruebas si es posible
- Describe claramente los cambios y cómo probarlos
- Mantén el código limpio y bien documentado
**Problema:** Error al importar `db` en componentes cliente.  
**Solución:** Mueve las consultas a Server Components o crea un API Route/Server Action.

### Base de Datos Desincronizada
**Problema:** Migraciones no aplicadas o esquema desactualizado.  
**Solución:** 
```bash
npx prisma migrate reset --force  # ⚠️ Elimina todos los datos
# O
npx prisma migrate dev            # Aplica migraciones pendientes
```

### Error: "params should be awaited" (Next.js 15)
**Problema:** En Next.js 15, `params` en rutas dinámicas es una promesa.  
**Solución:** Cambia `params: {id: string}` por `params: Promise<{id: string}>` y usa `const {id} = await params`
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