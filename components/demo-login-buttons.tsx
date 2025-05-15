"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DemoLoginButtons() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleDemoLogin = (role: string) => {
    setIsLoading(role)

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an actual API call to set the session
      localStorage.setItem("userRole", role)

      // Redirect based on role
      if (role === "admin") {
        router.push("/admin/dashboard")
      } else if (role === "instructor") {
        router.push("/instructor/dashboard")
      } else {
        router.push("/dashboard")
      }

      setIsLoading(null)
    }, 1500)
  }

  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fade-in">
      <Button
        variant="outline"
        className="bg-gradient-primary-hover"
        onClick={() => handleDemoLogin("student")}
        disabled={isLoading !== null}
      >
        {isLoading === "student" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <User className="mr-2 h-4 w-4" />
        )}
        Demo as Student
      </Button>

      <Button
        variant="outline"
        className="bg-gradient-secondary-hover"
        onClick={() => handleDemoLogin("instructor")}
        disabled={isLoading !== null}
      >
        {isLoading === "instructor" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <User className="mr-2 h-4 w-4" />
        )}
        Demo as Instructor
      </Button>

      <Button
        variant="outline"
        className="bg-gradient-tertiary-hover"
        onClick={() => handleDemoLogin("admin")}
        disabled={isLoading !== null}
      >
        {isLoading === "admin" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <User className="mr-2 h-4 w-4" />}
        Demo as Admin
      </Button>
    </div>
  )
}

