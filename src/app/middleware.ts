import { getUser } from "@/app/actions/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getUser();
  // Rotas públicas
  const publicRoutes = ["/login", "/signup",];

  // Caso não esteja autenticado e acesse rota protegida
  if (!user && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Caso autenticado, impedir acesso a páginas de login ou cadastro
  if (user && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Rota que ignora assets
};
