// Dummy data for the educational platform

// Users
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "student",
    avatar: "/placeholder.svg?height=100&width=100",
    enrolledCourses: [1, 3, 5],
    completedCourses: [2, 4],
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Senior Web Developer with 10+ years of experience",
    courses: [1, 5, 8],
    createdAt: "2022-11-20",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "instructor",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Mobile Development Expert and Consultant",
    courses: [4, 7],
    createdAt: "2022-12-05",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "student",
    avatar: "/placeholder.svg?height=100&width=100",
    enrolledCourses: [2, 6, 8],
    completedCourses: [1],
    createdAt: "2023-02-10",
  },
  {
    id: 5,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    avatar: "/placeholder.svg?height=100&width=100",
    createdAt: "2022-10-01",
  },
]

// Courses
export const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more",
    longDescription:
      "This comprehensive web development bootcamp covers everything you need to know to become a full-stack web developer. Starting with the fundamentals of HTML, CSS, and JavaScript, you'll progress to advanced topics like React, Node.js, Express, and MongoDB. By the end of this course, you'll have built multiple real-world projects and gained the skills needed to land your first developer job or start freelancing.",
    image: "/placeholder.svg?height=200&width=350",
    price: 89.99,
    rating: 4.8,
    reviews: 2453,
    students: 45872,
    instructor: 2, // Jane Smith
    category: "Web Development",
    level: "Beginner to Advanced",
    duration: "42 hours",
    isPremium: true,
    createdAt: "2022-11-25",
    updatedAt: "2023-03-15",
    sections: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lectures: [
          { id: 1, title: "Course Overview", duration: "10:15", type: "video", isPreview: true },
          { id: 2, title: "How the Internet Works", duration: "15:22", type: "video", isPreview: false },
          {
            id: 3,
            title: "Setting Up Your Development Environment",
            duration: "20:45",
            type: "video",
            isPreview: false,
          },
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
    ],
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning",
    description: "Master Python for data analysis, visualization and ML",
    longDescription:
      "This comprehensive course will teach you everything you need to know to use Python for data science and machine learning. You'll learn how to use libraries like NumPy, Pandas, Matplotlib, and Scikit-Learn to analyze data, create visualizations, and build machine learning models. By the end of this course, you'll be able to apply these skills to real-world data science projects.",
    image: "/placeholder.svg?height=200&width=350",
    price: 94.99,
    rating: 4.9,
    reviews: 1876,
    students: 32541,
    instructor: 3, // Michael Brown
    category: "Data Science",
    level: "Intermediate",
    duration: "38 hours",
    isPremium: true,
    createdAt: "2022-12-10",
    updatedAt: "2023-02-20",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of effective user interface design",
    image: "/placeholder.svg?height=200&width=350",
    price: 74.99,
    rating: 4.7,
    reviews: 1253,
    students: 18765,
    instructor: 2, // Jane Smith
    category: "Design",
    level: "Beginner",
    duration: "28 hours",
    isPremium: true,
    createdAt: "2023-01-05",
    updatedAt: "2023-03-10",
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps with React Native",
    image: "/placeholder.svg?height=200&width=350",
    price: 84.99,
    rating: 4.6,
    reviews: 987,
    students: 12543,
    instructor: 3, // Michael Brown
    category: "Mobile Development",
    level: "Intermediate",
    duration: "35 hours",
    isPremium: true,
    createdAt: "2023-02-15",
    updatedAt: "2023-04-05",
  },
  {
    id: 5,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming",
    image: "/placeholder.svg?height=200&width=350",
    price: 0,
    rating: 4.5,
    reviews: 1543,
    students: 28976,
    instructor: 2, // Jane Smith
    category: "Web Development",
    level: "Beginner",
    duration: "15 hours",
    isPremium: false,
    createdAt: "2022-10-20",
    updatedAt: "2023-01-15",
  },
]

// Tutorials
export const tutorials = [
  {
    id: 1,
    title: "Building a Responsive Website with Tailwind CSS",
    excerpt: "Learn how to create a fully responsive website using Tailwind CSS framework",
    content: "Full tutorial content here...",
    image: "/placeholder.svg?height=200&width=350",
    author: 2, // Jane Smith
    date: "2023-03-15",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend"],
    views: 12543,
    likes: 342,
  },
  {
    id: 2,
    title: "Getting Started with React Hooks",
    excerpt: "A comprehensive guide to understanding and using React Hooks in your applications",
    content: "Full tutorial content here...",
    image: "/placeholder.svg?height=200&width=350",
    author: 2, // Jane Smith
    date: "2023-04-22",
    readTime: "15 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
    views: 9876,
    likes: 287,
  },
  {
    id: 3,
    title: "Introduction to Python for Beginners",
    excerpt: "A beginner-friendly guide to start programming with Python",
    content: "Full tutorial content here...",
    image: "/placeholder.svg?height=200&width=350",
    author: 3, // Michael Brown
    date: "2023-02-10",
    readTime: "10 min read",
    category: "Python",
    tags: ["Python", "Programming", "Beginners"],
    views: 15432,
    likes: 421,
  },
]

// Videos
export const videos = [
  {
    id: 1,
    title: "Building a Modern Website with Next.js and Tailwind CSS",
    description: "Learn how to create a fully responsive website using Next.js and Tailwind CSS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "32:15",
    views: "45.2K",
    likes: "2.3K",
    date: "2023-03-15",
    instructor: 2, // Jane Smith
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "React", "Frontend"],
  },
  {
    id: 2,
    title: "React Hooks Explained",
    description: "A comprehensive guide to understanding and using React Hooks in your applications",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "28:42",
    views: "38.7K",
    likes: "1.9K",
    date: "2023-04-22",
    instructor: 2, // Jane Smith
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 3,
    title: "Python Crash Course for Beginners",
    description: "A beginner-friendly guide to start programming with Python",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "45:18",
    views: "62.3K",
    likes: "3.1K",
    date: "2023-02-10",
    instructor: 3, // Michael Brown
    category: "Python",
    tags: ["Python", "Programming", "Beginners"],
  },
]

// Code Samples
export const codeSamples = [
  {
    id: 1,
    title: "React Authentication System",
    description: "A complete authentication system with JWT, React, and Node.js",
    language: "JavaScript",
    downloads: "12.5K",
    date: "2023-03-15",
    author: 2, // Jane Smith
    tags: ["React", "Authentication", "JWT"],
    code: "// Code content here...",
  },
  {
    id: 2,
    title: "Django REST API Boilerplate",
    description: "A production-ready Django REST API boilerplate with authentication and permissions",
    language: "Python",
    downloads: "8.7K",
    date: "2023-04-22",
    author: 3, // Michael Brown
    tags: ["Django", "REST API", "Python"],
    code: "# Code content here...",
  },
  {
    id: 3,
    title: "Next.js E-commerce Starter",
    description: "A starter template for building e-commerce sites with Next.js and Stripe",
    language: "TypeScript",
    downloads: "15.3K",
    date: "2023-02-10",
    author: 2, // Jane Smith
    tags: ["Next.js", "E-commerce", "Stripe"],
    code: "// Code content here...",
  },
]

// Orders
export const orders = [
  {
    id: 1,
    user: 1, // John Doe
    courses: [1, 3],
    total: 164.98,
    status: "completed",
    date: "2023-03-20",
    paymentMethod: "credit-card",
  },
  {
    id: 2,
    user: 4, // Sarah Johnson
    courses: [2],
    total: 94.99,
    status: "completed",
    date: "2023-04-05",
    paymentMethod: "paypal",
  },
  {
    id: 3,
    user: 1, // John Doe
    courses: [5],
    total: 0,
    status: "completed",
    date: "2023-02-15",
    paymentMethod: "free",
  },
]

// Reviews
export const reviews = [
  {
    id: 1,
    course: 1,
    user: 1, // John Doe
    rating: 5,
    comment:
      "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand, and the projects are challenging but doable. I've learned so much and feel confident in my web development skills now.",
    date: "2023-04-10",
  },
  {
    id: 2,
    course: 2,
    user: 4, // Sarah Johnson
    rating: 4,
    comment:
      "Great course with comprehensive content. The instructor is knowledgeable and explains concepts well. I would have liked more practical exercises, but overall it's a solid course for learning Python for data science.",
    date: "2023-04-20",
  },
  {
    id: 3,
    course: 1,
    user: 4, // Sarah Johnson
    rating: 5,
    comment:
      "I've taken many web development courses, and this is by far the best one. The curriculum is well-structured, and the instructor's teaching style is engaging and clear. Highly recommended!",
    date: "2023-03-25",
  },
]

// Categories
export const categories = [
  {
    id: 1,
    name: "Web Development",
    slug: "web-development",
    description: "Learn to build websites and web applications",
    count: 245,
  },
  {
    id: 2,
    name: "Data Science",
    slug: "data-science",
    description: "Master data analysis and machine learning",
    count: 187,
  },
  {
    id: 3,
    name: "Mobile Development",
    slug: "mobile-development",
    description: "Create apps for iOS and Android",
    count: 134,
  },
  {
    id: 4,
    name: "Design",
    slug: "design",
    description: "Learn UI/UX and graphic design",
    count: 156,
  },
]

