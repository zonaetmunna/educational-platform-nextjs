import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Developer",
    content:
      "This platform completely transformed my career. The courses are comprehensive and the instructors are top-notch. I went from a beginner to landing my dream job in just 6 months.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UX Designer",
    content:
      "The design courses here are incredible. I've tried many platforms, but the quality of content and teaching methodology here is unmatched. Highly recommended for anyone looking to level up their skills.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Data Scientist",
    content:
      "As someone transitioning into data science, I found exactly what I needed here. The structured learning paths and practical projects helped me build a solid portfolio that impressed employers.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="container py-12 space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Hear from our community of learners who have transformed their skills and careers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="relative bg-gradient-neutral card-hover-effect animate-fade-in">
            <CardContent className="pt-6">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <div className="relative pl-6 pt-6">
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t p-6">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

