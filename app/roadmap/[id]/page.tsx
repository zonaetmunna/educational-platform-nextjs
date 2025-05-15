import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Clock, GraduationCap, Lock, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for a single roadmap
const getRoadmapById = (id: string) => {
  // This would normally be an API call
  return {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Master both frontend and backend development to become a full-stack developer",
    longDescription:
      "This comprehensive roadmap will guide you through the journey of becoming a full-stack web developer. You'll start with frontend fundamentals, then learn backend development, databases, and finally build complete full-stack applications. By the end of this roadmap, you'll have the skills to build, deploy, and maintain modern web applications.",
    image: "/placeholder.svg?height=400&width=800",
    duration: "9 months",
    level: "Intermediate to Advanced",
    students: 8765,
    rating: 4.9,
    reviews: 543,
    progress: 25,
    steps: [
      {
        id: 1,
        title: "Frontend Fundamentals",
        description: "Learn HTML, CSS, and JavaScript",
        duration: "6 weeks",
        courses: [
          { id: 5, title: "HTML & CSS Fundamentals", completed: true },
          { id: 7, title: "JavaScript Fundamentals", completed: true },
        ],
        status: "completed",
      },
      {
        id: 2,
        title: "Backend Basics",
        description: "Learn server-side programming with Node.js",
        duration: "8 weeks",
        courses: [
          { id: 13, title: "Node.js Fundamentals", completed: false },
          { id: 14, title: "Express.js Framework", completed: false },
        ],
        status: "in-progress",
      },
      {
        id: 3,
        title: "Databases",
        description: "Learn SQL and NoSQL databases",
        duration: "6 weeks",
        courses: [
          { id: 15, title: "SQL Fundamentals", completed: false },
          { id: 16, title: "MongoDB Essentials", completed: false },
        ],
        status: "locked",
      },
      {
        id: 4,
        title: "Full-Stack Projects",
        description: "Build complete web applications from scratch",
        duration: "10 weeks",
        courses: [
          { id: 17, title: "MERN Stack Development", completed: false },
          { id: 18, title: "Deployment & DevOps", completed: false },
        ],
        status: "locked",
      },
    ],
    instructor: {
      name: "John Davis",
      title: "Senior Full-Stack Developer",
      bio: "John has over 10 years of experience in web development and has worked with companies like Google and Facebook. He's passionate about teaching and has helped thousands of students launch their careers in tech.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    prerequisites: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Familiarity with programming concepts",
      "A computer with internet access",
    ],
    outcomes: [
      "Build complete web applications from scratch",
      "Work with both frontend and backend technologies",
      "Implement database solutions for web applications",
      "Deploy applications to production environments",
      "Understand and implement authentication and authorization",
      "Work with APIs and third-party services",
    ],
  }
}

export default function RoadmapDetailPage({ params }: { params: { id: string } }) {
  const roadmap = getRoadmapById(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-indigo-50 to-white dark:from-purple-950/50 dark:via-indigo-950/50 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/roadmap">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Roadmaps
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{roadmap.title}</h1>
                <p className="text-muted-foreground md:text-xl">{roadmap.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{roadmap.rating}</span>
                    <span className="text-muted-foreground">({roadmap.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{roadmap.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{roadmap.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={roadmap.instructor.avatar || "/placeholder.svg"}
                    alt={roadmap.instructor.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{roadmap.instructor.name}</div>
                    <div className="text-sm text-muted-foreground">{roadmap.instructor.title}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" fill="currentColor" />
                    Start Learning
                  </Button>
                  <Button variant="outline" size="lg">
                    Add to My Roadmaps
                  </Button>
                </div>
              </div>
              <div className="lg:order-last">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={roadmap.image || "/placeholder.svg"}
                      alt={roadmap.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Your Progress</span>
                      <Badge className="bg-primary">{roadmap.progress}%</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={roadmap.progress} className="h-2" />
                    <div className="space-y-2">
                      <div className="font-medium">This roadmap includes:</div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary shrink-0"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span>{roadmap.steps.length} learning steps</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary shrink-0"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span>{roadmap.steps.reduce((acc, step) => acc + step.courses.length, 0)} courses</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary shrink-0"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary shrink-0"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span>Lifetime access</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full" size="lg">
                      Continue Learning
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">Share this roadmap with friends</div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About This Roadmap</h2>
                <p className="text-muted-foreground">{roadmap.longDescription}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Learning Path</h2>
                <div className="space-y-6">
                  {roadmap.steps.map((step, index) => (
                    <Card
                      key={step.id}
                      className={`overflow-hidden card-hover-effect animate-fade-in ${
                        step.status === "completed"
                          ? "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-900 dark:from-green-950/20 dark:to-emerald-950/20"
                          : step.status === "in-progress"
                            ? "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-900 dark:from-blue-950/20 dark:to-indigo-950/20"
                            : "bg-gradient-neutral"
                      }`}
                    >
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              step.status === "completed"
                                ? "bg-green-500 text-white"
                                : step.status === "in-progress"
                                  ? "bg-blue-500 text-white"
                                  : step.status === "locked"
                                    ? "bg-muted text-muted-foreground"
                                    : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step.status === "completed" ? (
                              <Check className="h-4 w-4" />
                            ) : step.status === "locked" ? (
                              <Lock className="h-4 w-4" />
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-2">
                              {step.title}
                              {step.status === "completed" && (
                                <Badge variant="outline" className="bg-green-500 text-white border-none">
                                  Completed
                                </Badge>
                              )}
                              {step.status === "in-progress" && (
                                <Badge variant="outline" className="bg-blue-500 text-white border-none">
                                  In Progress
                                </Badge>
                              )}
                              {step.status === "locked" && (
                                <Badge variant="outline" className="bg-muted text-muted-foreground">
                                  Locked
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription>{step.description}</CardDescription>
                          </div>
                          <div className="text-sm text-muted-foreground">{step.duration}</div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="space-y-2">
                          {step.courses.map((course) => (
                            <div
                              key={course.id}
                              className="flex items-center justify-between rounded-md p-2 hover:bg-muted/50"
                            >
                              <div className="flex items-center gap-2">
                                {course.completed ? (
                                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                                    <Check className="h-3 w-3 text-white" />
                                  </div>
                                ) : (
                                  <div className="h-5 w-5 rounded-full border border-muted-foreground/30"></div>
                                )}
                                <span>{course.title}</span>
                              </div>
                              <Button
                                variant={course.completed ? "outline" : "default"}
                                size="sm"
                                disabled={step.status === "locked"}
                              >
                                {course.completed ? "Review" : "Start"}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What You'll Learn</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {roadmap.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Prerequisites</h2>
                <ul className="space-y-2">
                  {roadmap.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="16" />
                        <line x1="8" x2="16" y1="12" y2="12" />
                      </svg>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meet Your Instructor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={roadmap.instructor.avatar} alt={roadmap.instructor.name} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{roadmap.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{roadmap.instructor.title}</p>
                    </div>
                  </div>
                  <p className="text-sm">{roadmap.instructor.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold">{roadmap.rating}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(roadmap.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{roadmap.reviews} reviews</div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">5</div>
                        <Progress value={70} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">70%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">4</div>
                        <Progress value={20} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">20%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">3</div>
                        <Progress value={7} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">7%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">2</div>
                        <Progress value={2} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">2%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">1</div>
                        <Progress value={1} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">1%</div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    See All Reviews
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share This Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Copy Link
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

