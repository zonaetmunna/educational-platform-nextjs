import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for tutorials
const tutorials = [
  {
    id: 1,
    title: "Building a Responsive Website with Tailwind CSS",
    excerpt: "Learn how to create a fully responsive website using Tailwind CSS framework",
    image: "/placeholder.svg?height=200&width=350",
    author: "Jane Smith",
    date: "Mar 15, 2023",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
  },
  {
    id: 2,
    title: "Getting Started with React Hooks",
    excerpt: "A comprehensive guide to understanding and using React Hooks in your applications",
    image: "/placeholder.svg?height=200&width=350",
    author: "John Davis",
    date: "Apr 22, 2023",
    readTime: "15 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 3,
    title: "Introduction to Python for Beginners",
    excerpt: "A beginner-friendly guide to start programming with Python",
    image: "/placeholder.svg?height=200&width=350",
    author: "Michael Brown",
    date: "Feb 10, 2023",
    readTime: "10 min read",
    category: "Python",
    tags: ["Python", "Programming", "Beginners"],
  },
  {
    id: 4,
    title: "Creating RESTful APIs with Node.js and Express",
    excerpt: "Learn how to build robust RESTful APIs using Node.js and Express framework",
    image: "/placeholder.svg?height=200&width=350",
    author: "Sarah Johnson",
    date: "May 5, 2023",
    readTime: "18 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
  },
  {
    id: 5,
    title: "Understanding CSS Grid Layout",
    excerpt: "Master the CSS Grid Layout system for creating complex web layouts",
    image: "/placeholder.svg?height=200&width=350",
    author: "David Wilson",
    date: "Jan 28, 2023",
    readTime: "14 min read",
    category: "CSS",
    tags: ["CSS", "Grid Layout", "Web Design"],
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt: "Get started with TypeScript and learn how it improves JavaScript development",
    image: "/placeholder.svg?height=200&width=350",
    author: "Emily Clark",
    date: "Jun 12, 2023",
    readTime: "16 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
]

export default function TutorialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tutorials & Blogs</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our collection of tutorials and blog posts to enhance your skills
              </p>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-4">
                <div className="font-medium flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Category</h3>
                  <div className="space-y-2">
                    {["Web Development", "React", "Python", "Backend", "CSS", "TypeScript"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "CSS", "Python", "Node.js", "TypeScript"].map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative w-full sm:w-auto max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search tutorials..." className="pl-8 w-full sm:w-[300px]" />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {tutorials.map((tutorial) => (
                  <Card
                    key={tutorial.id}
                    className="overflow-hidden bg-gradient-secondary card-hover-effect animate-fade-in"
                  >
                    <div className="relative transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={tutorial.image || "/placeholder.svg"}
                        alt={tutorial.title}
                        width={350}
                        height={200}
                        className="object-cover w-full h-[180px]"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{tutorial.date}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {tutorial.readTime}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{tutorial.excerpt}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tutorial.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex items-center justify-between border-t">
                      <div className="text-sm">By {tutorial.author}</div>
                      <Button asChild size="sm">
                        <Link href={`/tutorials/${tutorial.id}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

