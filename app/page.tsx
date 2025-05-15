import Link from "next/link"
import { ArrowRight, Code, FileText, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedCourses } from "@/components/featured-courses"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CategoryList } from "@/components/category-list"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="container py-12 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Browse by Category</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find What You're Looking For</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore our vast library of tutorials, courses, and resources
          </p>
        </div>

        <CategoryList />
      </section>

      <section className="container py-12 space-y-6 bg-muted/50">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Featured Content</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Courses</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Discover our most popular and highly-rated courses
          </p>
        </div>

        <FeaturedCourses />

        <div className="flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container py-12 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Free Resources</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learn at Your Own Pace</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Access our free tutorials, videos, and code samples
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-primary card-hover-effect animate-fade-in">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Tutorials & Blogs</CardTitle>
              <CardDescription>Step-by-step guides and in-depth articles</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground">
                Explore our collection of tutorials and blog posts covering a wide range of topics.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/tutorials">
                  Browse Tutorials
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-secondary card-hover-effect animate-fade-in">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Free Videos</CardTitle>
              <CardDescription>Watch and learn with our video content</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground">
                Access our library of free educational videos to enhance your learning experience.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/videos">
                  Watch Videos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-tertiary card-hover-effect animate-fade-in">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Code Samples</CardTitle>
              <CardDescription>Ready-to-use code examples and snippets</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-muted-foreground">
                Download and use our free code samples to jumpstart your projects.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="gap-1">
                <Link href="/code">
                  Get Code
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <TestimonialsSection />

      <section className="container py-12 space-y-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Learning?</h2>
          <p className="text-primary-foreground/80 md:text-xl">
            Join thousands of students already learning with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

