export const dynamic = "force-static";

export const revalidate = 10; // revalidate every 10 sec

export function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
