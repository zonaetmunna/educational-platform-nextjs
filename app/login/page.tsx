import { ArrowRight, AtSign, KeyRound, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gradient-primary">Welcome back</h1>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>

          <Card className="border-none shadow-lg bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 animate-fade-in">
            <CardContent className="pt-6 pb-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="pl-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group">
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pb-6">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <Button variant="outline" className="w-full group hover:bg-blue-50 dark:hover:bg-blue-950/30">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="transition-all duration-300 group-hover:translate-x-1">Google</span>
                </Button>
                <Button variant="outline" className="w-full group hover:bg-blue-50 dark:hover:bg-blue-950/30">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="transition-all duration-300 group-hover:translate-x-1">GitHub</span>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Banner/Image */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-10 bg-repeat"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white space-y-8">
          <div className="animate-float">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Learning illustration"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="max-w-md text-center space-y-4">
            <h2 className="text-2xl font-bold">Want to share your knowledge?</h2>
            <p className="text-blue-100">Join our community of instructors and help others learn while earning</p>
            <Button
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 group animate-pulse-subtle"
            >
              Apply as Instructor
              <Sparkles className="ml-2 h-4 w-4 animate-pulse-glow" />
            </Button>
          </div>

          <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-slide-up">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Become an instructor today!</h3>
                <p className="text-sm text-blue-100">Share your expertise with our global community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile instructor banner */}
      <div className="md:hidden p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Become an instructor</h3>
            <p className="text-sm text-blue-100">Share your knowledge</p>
          </div>
          <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Apply Now
            <Sparkles className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}

