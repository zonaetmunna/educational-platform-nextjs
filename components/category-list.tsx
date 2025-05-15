import Link from "next/link"
import { BookOpen, Code, FileText, Lightbulb, LineChart, Play, Smartphone, Zap } from "lucide-react"

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Web Development",
    icon: <Code className="h-6 w-6" />,
    count: 245,
    slug: "web-development",
  },
  {
    id: 2,
    name: "Data Science",
    icon: <LineChart className="h-6 w-6" />,
    count: 187,
    slug: "data-science",
  },
  {
    id: 3,
    name: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    count: 134,
    slug: "mobile-development",
  },
  {
    id: 4,
    name: "Design",
    icon: <Lightbulb className="h-6 w-6" />,
    count: 156,
    slug: "design",
  },
  {
    id: 5,
    name: "Tutorials",
    icon: <FileText className="h-6 w-6" />,
    count: 312,
    slug: "tutorials",
  },
  {
    id: 6,
    name: "Videos",
    icon: <Play className="h-6 w-6" />,
    count: 245,
    slug: "videos",
  },
  {
    id: 7,
    name: "Courses",
    icon: <BookOpen className="h-6 w-6" />,
    count: 178,
    slug: "courses",
  },
  {
    id: 8,
    name: "Quick Guides",
    icon: <Zap className="h-6 w-6" />,
    count: 92,
    slug: "quick-guides",
  },
]

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="group flex flex-col items-center justify-center rounded-lg border p-4 transition-all duration-300 hover:bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
        >
          <div className="mb-2 rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <div className="text-center">
            <h3 className="font-medium">{category.name}</h3>
            <p className="text-xs text-muted-foreground">{category.count} items</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

