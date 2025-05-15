import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Dummy user sessions - in a real app, this would be stored in a database
// and validated with proper authentication tokens
const DUMMY_SESSIONS: Record<
  string,
  {
    userId: number
    role: "student" | "instructor" | "admin"
    name: string
    email: string
  }
> = {
  "student-session-token": {
    userId: 1,
    role: "student",
    name: "John Doe",
    email: "john@example.com",
  },
  "instructor-session-token": {
    userId: 2,
    role: "instructor",
    name: "Jane Smith",
    email: "jane@example.com",
  },
  "admin-session-token": {
    userId: 5,
    role: "admin",
    name: "Admin User",
    email: "admin@example.com",
  },
}

// Routes that require authentication
const PROTECTED_ROUTES = ["/dashboard", "/checkout", "/account"]

// Routes that require specific roles
const ROLE_PROTECTED_ROUTES: Record<string, string[]> = {
  "/admin": ["admin"],
  "/instructor": ["instructor", "admin"],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the session token from cookies
  const sessionToken = request.cookies.get("session-token")?.value
  const user = sessionToken ? DUMMY_SESSIONS[sessionToken] : null

  // For demo purposes, if accessing /login with a specific role parameter,
  // set the appropriate session token
  if (pathname === "/login") {
    const role = request.nextUrl.searchParams.get("role")
    if (role && ["student", "instructor", "admin"].includes(role)) {
      const response = NextResponse.redirect(new URL("/", request.url))

      if (role === "student") {
        response.cookies.set("session-token", "student-session-token", {
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        })
      } else if (role === "instructor") {
        response.cookies.set("session-token", "instructor-session-token", {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        })
      } else if (role === "admin") {
        response.cookies.set("session-token", "admin-session-token", {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        })
      }

      return response
    }
  }

  // For demo purposes, if accessing /logout, clear the session token
  if (pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.delete("session-token")
    return response
  }

  // Check if the route requires authentication
  if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
    if (!user) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Check if the route requires a specific role
  for (const [route, roles] of Object.entries(ROLE_PROTECTED_ROUTES)) {
    if (pathname.startsWith(route)) {
      if (!user || !roles.includes(user.role)) {
        // Redirect to unauthorized page or home page
        return NextResponse.redirect(new URL("/", request.url))
      }
    }
  }

  // Add user info to request headers for server components
  const requestHeaders = new Headers(request.headers)
  if (user) {
    requestHeaders.set("x-user-id", user.userId.toString())
    requestHeaders.set("x-user-role", user.role)
    requestHeaders.set("x-user-name", user.name)
    requestHeaders.set("x-user-email", user.email)
  }

  // Continue with the request
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}

