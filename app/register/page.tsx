import Link from "next/link"
import Image from "next/image"
import { AtSign, KeyRound, User, ArrowRight, Sparkles, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Banner/Image */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-10 bg-repeat"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white space-y-8">
          <div className="animate-float">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Education illustration"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="max-w-md text-center space-y-4">
            <h2 className="text-2xl font-bold">Start your learning journey today</h2>
            <p className="text-purple-100">
              Join thousands of students learning new skills and advancing their careers
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-slide-up">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Expert instructors</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-slide-up delay-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Flexible learning</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-slide-up delay-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Practical projects</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-slide-up delay-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Career support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gradient-secondary">Create an account</h1>
            <p className="text-muted-foreground">Join our learning community today</p>
          </div>

          <Card className="border-none shadow-lg bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 animate-fade-in">
            <CardContent className="pt-6 pb-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

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
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type="password"
                      className="pl-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group">
                  Create Account
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
                  <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <Button variant="outline" className="w-full group hover:bg-purple-50 dark:hover:bg-purple-950/30">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="transition-all duration-300 group-hover:translate-x-1">Google</span>
                </Button>
                <Button variant="outline" className="w-full group hover:bg-purple-50 dark:hover:bg-purple-950/30">
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
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile instructor banner */}
      <div className="md:hidden p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Want to teach?</h3>
            <p className="text-sm text-purple-100">Become an instructor</p>
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

