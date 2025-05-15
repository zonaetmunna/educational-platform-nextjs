import Image from "next/image"
import { ArrowRight, CheckCircle, Upload, Sparkles, Award, Users, DollarSign, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplyInstructorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50/50 dark:from-background dark:to-blue-950/10">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-pulse-glow" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gradient-primary">Become an Instructor</h1>
          <p className="text-xl text-muted-foreground">
            Share your knowledge and expertise with students around the world
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-primary card-hover-effect border-blue-100 dark:border-blue-900/50 animate-fade-in">
            <CardHeader className="pb-2">
              <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle>Earn Income</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Generate revenue from course sales and build a sustainable income stream
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary card-hover-effect border-blue-100 dark:border-blue-900/50 animate-fade-in delay-100">
            <CardHeader className="pb-2">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle>Reach Students</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with thousands of eager learners looking for your expertise
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary card-hover-effect border-blue-100 dark:border-blue-900/50 animate-fade-in delay-200">
            <CardHeader className="pb-2">
              <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle>Build Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Establish yourself as an expert in your field and grow your professional network
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Application Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-lg bg-white dark:bg-gray-900 animate-fade-in">
              <CardHeader>
                <CardTitle>Instructor Application</CardTitle>
                <CardDescription>Tell us about yourself and your teaching experience</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of Expertise</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary area of expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Programming & Development</SelectItem>
                      <SelectItem value="design">Design & Creative</SelectItem>
                      <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                      <SelectItem value="marketing">Marketing & Communications</SelectItem>
                      <SelectItem value="data">Data Science & Analytics</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Teaching Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your teaching experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No formal teaching experience</SelectItem>
                      <SelectItem value="beginner">1-2 years</SelectItem>
                      <SelectItem value="intermediate">3-5 years</SelectItem>
                      <SelectItem value="advanced">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about your professional background and teaching philosophy"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-idea">Course Idea</Label>
                  <Textarea
                    id="course-idea"
                    placeholder="Briefly describe a course you'd like to create"
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Portfolio or Sample Content</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50 hover:bg-muted/80 transition-colors cursor-pointer group">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
                    <p className="text-sm text-muted-foreground text-center">
                      Drag & drop files here or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload samples of your teaching content or portfolio (PDF, Video, or Links)
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group">
                  Submit Application
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right side - Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none shadow-lg overflow-hidden relative animate-fade-in">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] opacity-10 bg-repeat"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Apply</h3>
                    <p className="text-sm text-blue-100">
                      Submit your application with your expertise and course ideas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Review</h3>
                    <p className="text-sm text-blue-100">
                      Our team reviews your application (typically within 5-7 days)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Onboarding</h3>
                    <p className="text-sm text-blue-100">Complete instructor onboarding and platform training</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Create & Publish</h3>
                    <p className="text-sm text-blue-100">
                      Build your courses with our support and publish to our marketplace
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 dark:border-blue-900/50 animate-fade-in delay-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-gradient-primary">Instructor Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm">70% revenue share on all your course sales</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm">Marketing and promotion of your courses</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm">Access to course creation tools and resources</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm">Analytics and student feedback</p>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm">Community of fellow instructors</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-4 border border-border animate-fade-in delay-200">
              <h3 className="font-medium mb-2 flex items-center">
                <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                Instructor Success Story
              </h3>
              <blockquote className="text-sm text-muted-foreground italic">
                "Becoming an instructor changed my career. I've reached over 50,000 students worldwide and built a
                sustainable income stream while doing what I love - teaching."
              </blockquote>
              <div className="mt-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="Instructor"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Web Development Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

