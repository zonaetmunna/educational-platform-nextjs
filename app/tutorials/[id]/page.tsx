import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for a single tutorial
const tutorial = {
  id: 1,
  title: "Building a Responsive Website with Tailwind CSS",
  excerpt: "Learn how to create a fully responsive website using Tailwind CSS framework",
  content: `
  <h2>Introduction</h2>
  <p>Tailwind CSS has revolutionized the way developers style their web applications. With its utility-first approach, it allows for rapid UI development without leaving your HTML. In this tutorial, we'll build a responsive website from scratch using Tailwind CSS.</p>
  
  <h2>Setting Up Your Project</h2>
  <p>First, let's set up a new project with Tailwind CSS. We'll use npm to install the necessary dependencies:</p>
  
  <pre><code>npm init -y
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
  
  <p>Next, we need to configure Tailwind by creating a configuration file:</p>
  
  <pre><code>// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
  
  <h2>Creating the HTML Structure</h2>
  <p>Now, let's create a basic HTML structure for our website. We'll include a header, main content area, and footer:</p>
  
  <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Responsive Website with Tailwind CSS&lt;/title&gt;
  &lt;link href="./dist/output.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="bg-blue-600 text-white p-4"&gt;
    &lt;div class="container mx-auto flex justify-between items-center"&gt;
      &lt;h1 class="text-2xl font-bold"&gt;My Website&lt;/h1&gt;
      &lt;nav class="hidden md:block"&gt;
        &lt;ul class="flex space-x-4"&gt;
          &lt;li&gt;&lt;a href="#" class="hover:underline"&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#" class="hover:underline"&gt;About&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#" class="hover:underline"&gt;Services&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#" class="hover:underline"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
      &lt;button class="md:hidden"&gt;
        &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
          &lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /&gt;
        &lt;/svg&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;!-- Hero Section --&gt;
    &lt;section class="bg-gray-100 py-12"&gt;
      &lt;div class="container mx-auto px-4"&gt;
        &lt;div class="flex flex-col md:flex-row items-center"&gt;
          &lt;div class="md:w-1/2 mb-8 md:mb-0"&gt;
            &lt;h2 class="text-4xl font-bold mb-4"&gt;Welcome to My Website&lt;/h2&gt;
            &lt;p class="text-lg mb-6"&gt;This is a responsive website built with Tailwind CSS.&lt;/p&gt;
            &lt;button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"&gt;Learn More&lt;/button&gt;
          &lt;/div&gt;
          &lt;div class="md:w-1/2"&gt;
            &lt;img src="https://via.placeholder.com/600x400" alt="Hero Image" class="rounded shadow-lg"&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
    
    &lt;!-- Features Section --&gt;
    &lt;section class="py-12"&gt;
      &lt;div class="container mx-auto px-4"&gt;
        &lt;h2 class="text-3xl font-bold mb-8 text-center"&gt;Features&lt;/h2&gt;
        &lt;div class="grid grid-cols-1 md:grid-cols-3 gap-8"&gt;
          &lt;div class="bg-white p-6 rounded shadow"&gt;
            &lt;h3 class="text-xl font-bold mb-2"&gt;Feature 1&lt;/h3&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="bg-white p-6 rounded shadow"&gt;
            &lt;h3 class="text-xl font-bold mb-2"&gt;Feature 2&lt;/h3&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="bg-white p-6 rounded shadow"&gt;
            &lt;h3 class="text-xl font-bold mb-2"&gt;Feature 3&lt;/h3&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  
  &lt;footer class="bg-gray-800 text-white py-8"&gt;
    &lt;div class="container mx-auto px-4"&gt;
      &lt;p class="text-center"&gt;&copy; 2023 My Website. All rights reserved.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  
  <h2>Making it Responsive</h2>
  <p>Tailwind CSS makes it easy to create responsive designs using its built-in breakpoint prefixes. We've already used some of these in our HTML structure:</p>
  
  <ul>
    <li><code>hidden md:block</code> - Hide on small screens, show as block on medium screens and up</li>
    <li><code>md:hidden</code> - Show on small screens, hide on medium screens and up</li>
    <li><code>flex-col md:flex-row</code> - Column layout on small screens, row layout on medium screens and up</li>
    <li><code>grid-cols-1 md:grid-cols-3</code> - Single column on small screens, three columns on medium screens and up</li>
  </ul>
  
  <h2>Customizing the Design</h2>
  <p>Tailwind allows for easy customization through its configuration file. Let's add some custom colors and fonts:</p>
  
  <pre><code>// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da8ff',
          DEFAULT: '#0077ff',
          dark: '#0055cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}</code></pre>
  
  <h2>Conclusion</h2>
  <p>In this tutorial, we've built a responsive website using Tailwind CSS. We've covered the basics of setting up a project, creating a responsive layout, and customizing the design. Tailwind's utility-first approach makes it easy to create beautiful, responsive websites without writing custom CSS.</p>
  
  <p>For more advanced features, consider exploring Tailwind's plugins ecosystem or creating your own custom components.</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  date: "Mar 15, 2023",
  readTime: "12 min read",
  author: {
    name: "Jane Smith",
    title: "Senior Frontend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  category: "Web Development",
  tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
  relatedTutorials: [
    {
      id: 2,
      title: "Getting Started with React Hooks",
      excerpt: "A comprehensive guide to understanding and using React Hooks in your applications",
      image: "/placeholder.svg?height=200&width=350",
      date: "Apr 22, 2023",
      readTime: "15 min read",
    },
    {
      id: 3,
      title: "CSS Grid Layout Masterclass",
      excerpt: "Master the CSS Grid Layout system for creating complex web layouts",
      image: "/placeholder.svg?height=200&width=350",
      date: "Jan 28, 2023",
      readTime: "14 min read",
    },
    {
      id: 4,
      title: "Modern JavaScript Features You Should Know",
      excerpt: "Explore the latest JavaScript features that will improve your code",
      image: "/placeholder.svg?height=200&width=350",
      date: "Feb 15, 2023",
      readTime: "10 min read",
    },
  ],
}

export default function TutorialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/50 dark:to-background py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="gap-1">
                  <Link href="/tutorials">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Tutorials
                  </Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Badge variant="secondary">{tutorial.category}</Badge>
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{tutorial.title}</h1>
                <p className="text-muted-foreground md:text-xl">{tutorial.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{tutorial.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{tutorial.readTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Avatar>
                  <AvatarImage src={tutorial.author.avatar} alt={tutorial.author.name} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-medium">{tutorial.author.name}</div>
                  <div className="text-sm text-muted-foreground">{tutorial.author.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  src={tutorial.image || "/placeholder.svg"}
                  alt={tutorial.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              <article className="prose prose-slate dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: tutorial.content }} />
              </article>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/tutorials">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Tutorials
                    </Link>
                  </Button>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About the Author</h2>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={tutorial.author.avatar} alt={tutorial.author.name} />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{tutorial.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{tutorial.author.title}</p>
                    <p className="mt-2">
                      Jane is a senior frontend developer with over 8 years of experience building web applications. She
                      specializes in responsive design, CSS frameworks, and JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-20 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="#introduction" className="text-muted-foreground hover:text-foreground">
                          Introduction
                        </Link>
                      </li>
                      <li>
                        <Link href="#setting-up" className="text-muted-foreground hover:text-foreground">
                          Setting Up Your Project
                        </Link>
                      </li>
                      <li>
                        <Link href="#html-structure" className="text-muted-foreground hover:text-foreground">
                          Creating the HTML Structure
                        </Link>
                      </li>
                      <li>
                        <Link href="#responsive" className="text-muted-foreground hover:text-foreground">
                          Making it Responsive
                        </Link>
                      </li>
                      <li>
                        <Link href="#customizing" className="text-muted-foreground hover:text-foreground">
                          Customizing the Design
                        </Link>
                      </li>
                      <li>
                        <Link href="#conclusion" className="text-muted-foreground hover:text-foreground">
                          Conclusion
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Related Tutorials</h3>
                    <div className="space-y-4">
                      {tutorial.relatedTutorials.map((related) => (
                        <div key={related.id} className="flex flex-col gap-2">
                          <Link href={`/tutorials/${related.id}`} className="font-medium hover:underline">
                            {related.title}
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{related.date}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{related.readTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest tutorials and updates delivered to your inbox.
                    </p>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-muted py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">More Tutorials You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tutorial.relatedTutorials.map((related) => (
                <Card key={related.id}>
                  <div className="relative">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      width={350}
                      height={200}
                      className="object-cover w-full h-[180px] rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2">
                      <Link href={`/tutorials/${related.id}`} className="hover:underline">
                        {related.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{related.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{related.date}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{related.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

