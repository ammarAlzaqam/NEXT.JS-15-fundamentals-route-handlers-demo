import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // const token = requestHeaders.get("authorization");

  const header = await headers();
  const token = header.get("authorization");
  console.log(`token:  ${token}`);

  console.log(request.cookies.get("theme"));

  //! build-in cookies function
  const cookieStore = await cookies();
  cookieStore.set("resultPerPage", "20");
  console.log(`result per page is: ${cookieStore.get("resultPerPage")?.value}`);

  return new Response("<h1>Profile API data</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" },
  });
}
