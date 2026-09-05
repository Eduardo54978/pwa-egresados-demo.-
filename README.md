# PWA Egresados UMSS — demo mínima

Stack: Astro + React → Vercel · API en Vercel Serverless Functions · Firestore + Analytics (Firebase) · Tailwind + estilo shadcn.

## Correr local
```
npm install
npm run dev
```

## Subir a GitHub
```
git init
git add .
git commit -m "demo inicial"
git branch -M main
git remote add origin <URL_DE_TU_REPO>
git push -u origin main
```

## Desplegar en Vercel
1. Entra a vercel.com → "Add New Project" → importa el repo de GitHub.
2. Vercel detecta Astro solo (usa el adaptador `@astrojs/vercel`).
3. En Settings → Environment Variables, agrega las variables de `.env.example`
   con los datos reales de tu proyecto Firebase.
4. Deploy. Cada `push` a `main` vuelve a desplegar solo.

## Firebase (solo Firestore + Analytics, sin tarjeta)
1. Crea un proyecto en console.firebase.google.com (plan Spark/gratis).
2. Habilita Firestore Database (modo producción o prueba).
3. Habilita Analytics si lo pide el asistente de creación.
4. Copia las credenciales del proyecto a las variables `PUBLIC_FIREBASE_*`.
5. No actives Cloud Functions — las APIs ya las cubre `/src/pages/api`.

## Qué muestra esta demo
- `src/pages/index.astro`: página con los tokens de color/tipografía definidos.
- `src/components/ProfileCard.tsx`: isla de React que llama a la API.
- `src/pages/api/match.ts`: endpoint que se despliega como función serverless
  de Vercel (reemplaza a Cloud Functions).
- `src/lib/firebase.ts`: conexión lista para Firestore + Analytics.
- `public/manifest.webmanifest`: base del comportamiento PWA.
