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

export default async function handler(req: any, res: any) {
  try {
    const token = await getToken();
    const now = Date.now();
    const response = await fetch(
      `${UMAMI_URL}/api/websites/${WEBSITE_ID}/stats?startAt=0&endAt=${now}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const stats = await response.json();
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    res.json({ pageviews: stats.pageviews, visitors: stats.visitors });
  } catch {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
}
