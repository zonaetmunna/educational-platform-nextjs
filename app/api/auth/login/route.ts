import { type NextRequest, NextResponse } from "next/server"

// Dummy users for demo purposes
const DUMMY_USERS: Record<
  string,
  {
    id: number
    name: string
    email: string
    role: "student" | "instructor" | "admin"
    password: string
  }
> = {
  "john@example.com": {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "student",
    password: "password",
  },
  "jane@example.com": {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "instructor",
    password: "password",
  },
  "admin@example.com": {
    id: 5,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    password: "password",
  },
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Check if user exists and password matches
    const user = DUMMY_USERS[email]
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    // Set session token based on role
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })

    // Set the appropriate session token
    if (user.role === "student") {
      response.cookies.set("session-token", "student-session-token", {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })
    } else if (user.role === "instructor") {
      response.cookies.set("session-token", "instructor-session-token", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
    } else if (user.role === "admin") {
      response.cookies.set("session-token", "admin-session-token", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
    }

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

