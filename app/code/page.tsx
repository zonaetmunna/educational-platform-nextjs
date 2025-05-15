import Link from "next/link"
import { Code, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for code samples
const codeSamples = [
  {
    id: 1,
    title: "React Authentication System",
    description: "A complete authentication system with JWT, React, and Node.js",
    language: "JavaScript",
    downloads: "12.5K",
    date: "Mar 15, 2023",
    author: "Jane Smith",
    tags: ["React", "Authentication", "JWT"],
  },
  {
    id: 2,
    title: "Django REST API Boilerplate",
    description: "A production-ready Django REST API boilerplate with authentication and permissions",
    language: "Python",
    downloads: "8.7K",
    date: "Apr 22, 2023",
    author: "John Davis",
    tags: ["Django", "REST API", "Python"],
  },
  {
    id: 3,
    title: "Next.js E-commerce Starter",
    description: "A starter template for building e-commerce sites with Next.js and Stripe",
    language: "TypeScript",
    downloads: "15.3K",
    date: "Feb 10, 2023",
    author: "Michael Brown",
    tags: ["Next.js", "E-commerce", "Stripe"],
  },
  {
    id: 4,
    title: "Vue.js Dashboard Template",
    description: "A responsive admin dashboard template built with Vue.js and Tailwind CSS",
    language: "Vue",
    downloads: "9.8K",
    date: "May 5, 2023",
    author: "Sarah Johnson",
    tags: ["Vue.js", "Dashboard", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Express.js API Boilerplate",
    description: "A production-ready Express.js API boilerplate with authentication and validation",
    language: "JavaScript",
    downloads: "11.2K",
    date: "Jan 28, 2023",
    author: "David Wilson",
    tags: ["Express.js", "API", "Node.js"],
  },
  {
    id: 6,
    title: "Flutter UI Components",
    description: "A collection of reusable Flutter UI components for mobile apps",
    language: "Dart",
    downloads: "7.9K",
    date: "Jun 12, 2023",
    author: "Emily Clark",
    tags: ["Flutter", "UI", "Mobile"],
  },
]

// Helper function to get language color
const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Vue: "bg-emerald-500",
    Dart: "bg-sky-500",
  }
  return colors[language] || "bg-gray-500"
}

export default function CodePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Free Code Samples</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Download and use our free code samples to jumpstart your projects
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
                  <h3 className="font-medium text-sm">Language</h3>
                  <div className="space-y-2">
                    {["JavaScript", "TypeScript", "Python", "Vue", "Dart"].map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox id={`language-${language}`} />
                        <label
                          htmlFor={`language-${language}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {language}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "API", "Node.js", "Next.js", "UI", "Authentication"].map((tag) => (
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
                  <Input type="search" placeholder="Search code samples..." className="pl-8 w-full sm:w-[300px]" />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="popular">Most Downloads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {codeSamples.map((sample) => (
                  <Card
                    key={sample.id}
                    className="overflow-hidden bg-gradient-quaternary card-hover-effect animate-fade-in"
                  >
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(sample.language)}`}></div>
                        <span className="text-sm font-medium">{sample.language}</span>
                      </div>
                      <CardTitle className="line-clamp-1">{sample.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <span className="flex items-center">
                          <Download className="mr-1 h-3 w-3" />
                          {sample.downloads} downloads
                        </span>
                        <span>•</span>
                        <span>{sample.date}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{sample.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {sample.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex items-center justify-between border-t">
                      <div className="text-sm">By {sample.author}</div>
                      <Button asChild size="sm" className="gap-2">
                        <Link href={`/code/${sample.id}`}>
                          <Code className="h-4 w-4" />
                          View Code
                        </Link>
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

