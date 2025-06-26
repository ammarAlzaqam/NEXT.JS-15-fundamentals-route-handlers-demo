import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // const token = requestHeaders.get("authorization");

  const header = await headers();
  const token = header.get("authorization");
  console.log(`token:  ${token}`);

  return new Response("<h1>Profile API data</h1>", {
    headers: {"Content-Type": "text/html"}
  });
}
