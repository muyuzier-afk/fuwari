export const config = { runtime: 'edge' };

const UMAMI_URL = 'https://my-umami-moe.zeabur.app';
const WEBSITE_ID = 'c18133ba-c744-49cc-a524-fae7e991e55c';

async function getToken() {
  const res = await fetch(`${UMAMI_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: process.env.UMAMI_USERNAME,
      password: process.env.UMAMI_PASSWORD,
    }),
  });
  const data = await res.json();
  return data.token;
}

export default async function handler(req: Request) {
  try {
    const token = await getToken();
    const now = Date.now();
    const res = await fetch(
      `${UMAMI_URL}/api/websites/${WEBSITE_ID}/stats?startAt=0&endAt=${now}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const stats = await res.json();
    return new Response(JSON.stringify({
      pageviews: stats.pageviews,
      visitors: stats.visitors,
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=60',
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch stats' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
