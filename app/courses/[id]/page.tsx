import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Clock, Globe, LayoutGrid, Play, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

// Mock data for a single course
const course = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  description:
    "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive web development bootcamp. This course is designed to take you from beginner to professional developer.",
  longDescription:
    "This comprehensive web development bootcamp covers everything you need to know to become a full-stack web developer. Starting with the fundamentals of HTML, CSS, and JavaScript, you'll progress to advanced topics like React, Node.js, Express, and MongoDB. By the end of this course, you'll have built multiple real-world projects and gained the skills needed to land your first developer job or start freelancing.",
  image: "/placeholder.svg?height=400&width=800",
  price: 89.99,
  rating: 4.8,
  reviews: 2453,
  students: 45872,
  instructor: {
    name: "Jane Smith",
    title: "Senior Web Developer",
    bio: "Jane has over 10 years of experience in web development and has worked with companies like Google and Facebook. She's passionate about teaching and has helped thousands of students launch their careers in tech.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  lastUpdated: "March 2023",
  language: "English",
  level: "Beginner to Advanced",
  duration: "42 hours",
  isPremium: true,
  features: [
    "Lifetime access to 42 hours of content",
    "150+ coding exercises and challenges",
    "15 real-world projects",
    "Certificate of completion",
    "Access on mobile and TV",
    "Downloadable resources",
  ],
  sections: [
    {
      id: 1,
      title: "Introduction to Web Development",
      lectures: [
        { id: 1, title: "Course Overview", duration: "10:15", type: "video", isPreview: true },
        { id: 2, title: "How the Internet Works", duration: "15:22", type: "video", isPreview: false },
        { id: 3, title: "Setting Up Your Development Environment", duration: "20:45", type: "video", isPreview: false },
      ],
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lectures: [
        { id: 4, title: "HTML Document Structure", duration: "18:30", type: "video", isPreview: true },
        { id: 5, title: "HTML Tags and Elements", duration: "25:15", type: "video", isPreview: false },
        { id: 6, title: "Forms and Input Elements", duration: "22:40", type: "video", isPreview: false },
        {
          id: 7,
          title: "HTML Project: Building a Personal Website",
          duration: "45:10",
          type: "project",
          isPreview: false,
        },
      ],
    },
    {
      id: 3,
      title: "CSS Styling",
      lectures: [
        { id: 8, title: "CSS Selectors and Properties", duration: "28:15", type: "video", isPreview: false },
        { id: 9, title: "Box Model and Layout", duration: "32:20", type: "video", isPreview: false },
        { id: 10, title: "Flexbox and Grid", duration: "35:45", type: "video", isPreview: false },
        { id: 11, title: "Responsive Design", duration: "30:10", type: "video", isPreview: false },
        {
          id: 12,
          title: "CSS Project: Styling Your Personal Website",
          duration: "50:25",
          type: "project",
          isPreview: false,
        },
      ],
    },
  ],
  whatYouWillLearn: [
    "Build 15+ real world projects for your portfolio",
    "Learn HTML5, CSS3, JavaScript, React, Node.js, MongoDB, Express and more",
    "Create a full-fledged e-commerce application from scratch",
    "Implement authentication and authorization using JWT",
    "Deploy your applications to production",
    "Learn professional developer best practices",
  ],
  requirements: [
    "No programming experience needed - I'll teach you everything you need to know",
    "A computer with access to the internet",
    "No paid software required - all tools used in the course are free",
    "A desire to learn and take action",
  ],
}

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/courses">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Courses
                    </Link>
                  </Button>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{course.title}</h1>
                <p className="text-muted-foreground md:text-xl">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{course.language}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={course.instructor.avatar || "/placeholder.svg"}
                    alt={course.instructor.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{course.instructor.name}</div>
                    <div className="text-sm text-muted-foreground">{course.instructor.title}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" fill="currentColor" />
                    Enroll Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Preview Course
                  </Button>
                </div>
              </div>
              <div className="lg:order-last">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full bg-background/80 text-primary hover:bg-background/90"
                      >
                        <Play className="h-6 w-6" fill="currentColor" />
                        <span className="sr-only">Play preview</span>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${course.price}</span>
                      {course.isPremium && <Badge className="bg-primary">Premium</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium">This course includes:</div>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
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
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button className="w-full" size="lg">
                      Enroll Now
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">30-Day Money-Back Guarantee</div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About This Course</h2>
                <p className="text-muted-foreground">{course.longDescription}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">What You'll Learn</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Requirements</h2>
                <ul className="space-y-2">
                  {course.requirements.map((item, index) => (
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Course Content</h2>
                  <div className="text-sm text-muted-foreground">
                    {course.sections.reduce((total, section) => total + section.lectures.length, 0)} lectures •{" "}
                    {course.duration} total length
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {course.sections.map((section) => (
                    <AccordionItem key={section.id} value={`section-${section.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start text-left">
                          <div>{section.title}</div>
                          <div className="text-sm font-normal text-muted-foreground">
                            {section.lectures.length} lectures •{" "}
                            {(section.lectures.reduce((total, lecture) => {
                              const [min, sec] = lecture.duration.split(":").map(Number)
                              return total + min * 60 + sec
                            }, 0) /
                              60) |
                              0}{" "}
                            min
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.lectures.map((lecture) => (
                            <li
                              key={lecture.id}
                              className="flex items-center justify-between py-2 hover:bg-muted/50 px-2 rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                {lecture.type === "video" ? (
                                  <Play className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <LayoutGrid className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span>{lecture.title}</span>
                                {lecture.isPreview && (
                                  <Badge variant="outline" className="ml-2">
                                    Preview
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">{lecture.duration}</div>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            <TabsContent value="instructor" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Meet Your Instructor</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <Image
                      src={course.instructor.avatar || "/placeholder.svg"}
                      alt={course.instructor.name}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/4 space-y-4">
                    <h3 className="text-xl font-bold">{course.instructor.name}</h3>
                    <p className="text-muted-foreground">{course.instructor.title}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>125,000+ Students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4" />
                        <span>15 Courses</span>
                      </div>
                    </div>
                    <p>{course.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Student Reviews</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 space-y-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold">{course.rating}</div>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Course Rating</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">5</div>
                        <Progress value={75} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">75%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">4</div>
                        <Progress value={20} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">20%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">3</div>
                        <Progress value={3} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">3%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">2</div>
                        <Progress value={1} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">1%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium w-6">1</div>
                        <Progress value={1} className="h-2" />
                        <div className="text-sm text-muted-foreground w-8">1%</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    {/* Sample reviews */}
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-6 last:border-0">
                        <div className="flex items-center gap-4 mb-2">
                          <Image
                            src={`/placeholder.svg?height=50&width=50&text=User${review}`}
                            alt={`User ${review}`}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <div className="font-medium">Student {review}</div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                                />
                              ))}
                              <span className="ml-2 text-xs text-muted-foreground">3 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          This course exceeded my expectations! The instructor explains complex concepts in a way that's
                          easy to understand, and the projects are challenging but doable. I've learned so much and feel
                          confident in my web development skills now.
                        </p>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

