import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Mock data for roadmaps
const roadmaps = [
  {
    id: 1,
    title: "Frontend Web Development",
    description: "Become a professional frontend developer with this comprehensive learning path",
    image: "/placeholder.svg?height=200&width=350",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: 12543,
    rating: 4.8,
    progress: 0,
    steps: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        duration: "4 weeks",
        courses: [
          { id: 5, title: "HTML & CSS Fundamentals", completed: false },
          { id: 6, title: "Responsive Web Design", completed: false },
        ],
        status: "not-started",
      },
      {
        id: 2,
        title: "JavaScript Basics",
        description: "Master the fundamentals of JavaScript programming",
        duration: "6 weeks",
        courses: [
          { id: 7, title: "JavaScript Fundamentals", completed: false },
          { id: 8, title: "DOM Manipulation", completed: false },
        ],
        status: "locked",
      },
      {
        id: 3,
        title: "Frontend Frameworks",
        description: "Learn modern frontend frameworks like React",
        duration: "8 weeks",
        courses: [
          { id: 9, title: "React Fundamentals", completed: false },
          { id: 10, title: "State Management with Redux", completed: false },
        ],
        status: "locked",
      },
      {
        id: 4,
        title: "Advanced Frontend Concepts",
        description: "Master advanced frontend development techniques",
        duration: "6 weeks",
        courses: [
          { id: 11, title: "Performance Optimization", completed: false },
          { id: 12, title: "Testing Frontend Applications", completed: false },
        ],
        status: "locked",
      },
    ],
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description: "Master both frontend and backend development to become a full-stack developer",
    image: "/placeholder.svg?height=200&width=350",
    duration: "9 months",
    level: "Intermediate to Advanced",
    students: 8765,
    rating: 4.9,
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
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, visualization, and machine learning techniques",
    image: "/placeholder.svg?height=200&width=350",
    duration: "8 months",
    level: "Intermediate",
    students: 6543,
    rating: 4.7,
    progress: 0,
    steps: [
      {
        id: 1,
        title: "Python Programming",
        description: "Learn Python for data science",
        duration: "6 weeks",
        courses: [
          { id: 19, title: "Python Fundamentals", completed: false },
          { id: 20, title: "Python for Data Science", completed: false },
        ],
        status: "not-started",
      },
      {
        id: 2,
        title: "Data Analysis & Visualization",
        description: "Learn to analyze and visualize data",
        duration: "8 weeks",
        courses: [
          { id: 21, title: "Data Analysis with Pandas", completed: false },
          { id: 22, title: "Data Visualization with Matplotlib", completed: false },
        ],
        status: "locked",
      },
      {
        id: 3,
        title: "Machine Learning Fundamentals",
        description: "Learn the basics of machine learning",
        duration: "10 weeks",
        courses: [
          { id: 23, title: "Introduction to Machine Learning", completed: false },
          { id: 24, title: "Supervised Learning Algorithms", completed: false },
        ],
        status: "locked",
      },
      {
        id: 4,
        title: "Advanced Machine Learning",
        description: "Master advanced machine learning techniques",
        duration: "8 weeks",
        courses: [
          { id: 25, title: "Deep Learning Fundamentals", completed: false },
          { id: 26, title: "Natural Language Processing", completed: false },
        ],
        status: "locked",
      },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 via-indigo-50 to-white dark:from-purple-950/50 dark:via-indigo-950/50 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                Learning Paths
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learning Roadmaps</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Follow structured learning paths to master new skills and advance your career
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Roadmaps</TabsTrigger>
                <TabsTrigger value="my-roadmaps">My Roadmaps</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="new">Newest</TabsTrigger>
              </TabsList>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline">Filter</Button>
                <Button>Create Custom Roadmap</Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {roadmaps.map((roadmap) => (
                  <Card
                    key={roadmap.id}
                    className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in"
                  >
                    <div className="relative transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={roadmap.image || "/placeholder.svg"}
                        alt={roadmap.title}
                        width={350}
                        height={200}
                        className="object-cover w-full h-[180px]"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {roadmap.duration}
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{roadmap.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 font-medium">{roadmap.rating}</span>
                        </span>
                        <span className="text-muted-foreground">({roadmap.students} students)</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{roadmap.description}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{roadmap.progress}%</span>
                        </div>
                        <Progress value={roadmap.progress} className="h-2" />
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">{roadmap.level}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex items-center justify-between border-t">
                      <div className="text-sm text-muted-foreground">{roadmap.steps.length} steps</div>
                      <Button asChild size="sm">
                        <Link href={`/roadmap/${roadmap.id}`}>View Roadmap</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-roadmaps" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {roadmaps
                  .filter((r) => r.progress > 0)
                  .map((roadmap) => (
                    <Card
                      key={roadmap.id}
                      className="overflow-hidden bg-gradient-primary card-hover-effect animate-fade-in"
                    >
                      <div className="relative transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={roadmap.image || "/placeholder.svg"}
                          alt={roadmap.title}
                          width={350}
                          height={200}
                          className="object-cover w-full h-[180px]"
                        />
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                          {roadmap.duration}
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1">{roadmap.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <span className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="ml-1 font-medium">{roadmap.rating}</span>
                          </span>
                          <span className="text-muted-foreground">({roadmap.students} students)</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{roadmap.description}</p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{roadmap.progress}%</span>
                          </div>
                          <Progress value={roadmap.progress} className="h-2" />
                        </div>
                        <div className="mt-4">
                          <Badge variant="outline">{roadmap.level}</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 flex items-center justify-between border-t">
                        <div className="text-sm text-muted-foreground">{roadmap.steps.length} steps</div>
                        <Button asChild size="sm">
                          <Link href={`/roadmap/${roadmap.id}`}>Continue</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}

                {roadmaps.filter((r) => r.progress > 0).length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                      <GraduationCap className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">No roadmaps in progress</h2>
                    <p className="text-muted-foreground mb-6">
                      You haven't started any learning roadmaps yet. Browse our collection and start learning today.
                    </p>
                    <Button asChild>
                      <Link href="#all">Browse Roadmaps</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Other tabs would have similar content */}
          </Tabs>
        </section>
      </div>
    </div>
  )
}

