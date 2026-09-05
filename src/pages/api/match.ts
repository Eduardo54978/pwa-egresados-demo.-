import type { APIRoute } from 'astro';

// Backend/API: esta ruta se despliega sola como Vercel Serverless Function,
// sin necesidad de Cloud Functions de Firebase (evita pedir tarjeta).
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const skills = url.searchParams.get('skills')?.split(',').filter(Boolean) ?? [];

  // Demo: puntaje simple según cantidad de habilidades marcadas.
  // En el proyecto real esto compararía contra el perfil de vacantes en Firestore.
  const score = Math.min(100, 40 + skills.length * 12);

  return new Response(
    JSON.stringify({ skills, match_score: score }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
