import { type NextRequest, NextResponse } from "next/server"

// Dummy user sessions - this should match the middleware
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

export async function GET(request: NextRequest) {
  // Get the session token from cookies
  const sessionToken = request.cookies.get("session-token")?.value

  // If there's a valid session token, return the user info
  if (sessionToken && DUMMY_SESSIONS[sessionToken]) {
    const session = DUMMY_SESSIONS[sessionToken]

    return NextResponse.json({
      user: {
        id: session.userId,
        name: session.name,
        email: session.email,
        role: session.role,
      },
    })
  }

  // Otherwise, return an empty response
  return NextResponse.json({ user: null })
}

