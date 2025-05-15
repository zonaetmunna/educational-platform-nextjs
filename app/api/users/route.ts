import { NextResponse } from "next/server"
import { users } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const role = searchParams.get("role")
    const search = searchParams.get("search")

    // Filter users based on query parameters
    let filteredUsers = [...users]

    if (role) {
      filteredUsers = filteredUsers.filter((user) => user.role === role)
    }

    if (search) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Remove sensitive information
    const sanitizedUsers = filteredUsers.map(({ id, name, email, role, avatar, createdAt }) => ({
      id,
      name,
      email,
      role,
      avatar,
      createdAt,
    }))

    return NextResponse.json({ users: sanitizedUsers })
  } catch (error) {
    console.error("Users API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require admin authentication in a real app
    const { name, email, role, password } = await request.json()

    // Validate required fields
    if (!name || !email || !role || !password) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      return NextResponse.json({ success: false, message: "User with this email already exists" }, { status: 409 })
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
      avatar: "/placeholder.svg?height=100&width=100",
      createdAt: new Date().toISOString().split("T")[0],
    }

    // In a real app, you would hash the password and save the user to a database
    users.push(newUser)

    // Remove sensitive information
    const { id, name: userName, email: userEmail, role: userRole, avatar, createdAt } = newUser

    return NextResponse.json({
      success: true,
      user: { id, name: userName, email: userEmail, role: userRole, avatar, createdAt },
    })
  } catch (error) {
    console.error("User creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

