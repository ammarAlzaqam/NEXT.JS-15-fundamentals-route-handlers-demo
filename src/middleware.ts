import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //! first approach is custom matcher config
  //   return NextResponse.redirect(new URL("/", request.nextUrl));

  //! second approach is conditional statements
  //   if (request.nextUrl.pathname === "/profile")
  //     return NextResponse.rewrite(new URL("/hello", request.nextUrl));

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) response.cookies.set("theme", "dark");

  response.headers.set("custom-header", "custom-value");
  return response;
}

//! first approach is custom matcher config
// export const config = {
//   matcher: ["/profile"],
// };
