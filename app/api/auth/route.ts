import { NextResponse } from "next/server"

// Mock user database
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
  },
]

export async function POST(request: Request) {
  try {
    const { email, password, action } = await request.json()

    if (action === "login") {
      // Find user by email
      const user = users.find((u) => u.email === email)

      // Check if user exists and password matches
      if (!user || user.password !== password) {
        return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
      }

      // In a real app, you would create a session or JWT token here
      return NextResponse.json({
        success: true,
        user: { id: user.id, name: user.name, email: user.email },
      })
    } else if (action === "register") {
      // Check if user already exists
      const existingUser = users.find((u) => u.email === email)

      if (existingUser) {
        return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 })
      }

      // Create new user
      const newUser = {
        id: users.length + 1,
        name: email.split("@")[0], // Simple name generation
        email,
        password,
      }

      // In a real app, you would save the user to a database
      users.push(newUser)

      return NextResponse.json({
        success: true,
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      })
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Auth error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

