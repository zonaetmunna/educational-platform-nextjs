"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define user type
export type User = {
  id: number
  name: string
  email: string
  role: "student" | "instructor" | "admin"
}

// Define auth context type
type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string, role?: string) => Promise<boolean>
  logout: () => Promise<void>
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Dummy users for demo purposes
const DUMMY_USERS: Record<string, User> = {
  "john@example.com": {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "student",
  },
  "jane@example.com": {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "instructor",
  },
  "admin@example.com": {
    id: 5,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
}

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // In a real app, this would be an API call to validate the session
        const response = await fetch("/api/auth/session")
        const data = await response.json()

        if (data.user) {
          setUser(data.user)
        }
      } catch (error) {
        console.error("Failed to fetch session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [])

  // Login function
  const login = async (email: string, password: string, role?: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // For demo purposes, we'll use the dummy users
      // In a real app, this would be an API call to authenticate

      // If a specific role is requested (for demo purposes)
      if (role) {
        // Redirect to the middleware route that sets the cookie
        window.location.href = `/login?role=${role}`
        return true
      }

      // Regular login with email/password
      if (DUMMY_USERS[email] && password === "password") {
        const user = DUMMY_USERS[email]

        // In a real app, this would set a session cookie via an API call
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
          setUser(user)
          return true
        }
      }

      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = async (): Promise<void> => {
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to invalidate the session
      // For demo purposes, we'll redirect to the middleware route that clears the cookie
      window.location.href = "/logout"
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setUser(null)
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

