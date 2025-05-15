import { NextResponse } from "next/server"
import { reviews } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const courseId = searchParams.get("courseId")
    const userId = searchParams.get("userId")

    // Filter reviews based on query parameters
    let filteredReviews = [...reviews]

    if (courseId) {
      filteredReviews = filteredReviews.filter((review) => review.course === Number.parseInt(courseId))
    }

    if (userId) {
      filteredReviews = filteredReviews.filter((review) => review.user === Number.parseInt(userId))
    }

    return NextResponse.json({ reviews: filteredReviews })
  } catch (error) {
    console.error("Reviews API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { courseId, userId, rating, comment } = await request.json()

    // Validate required fields
    if (!courseId || !userId || !rating) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Check if user has already reviewed this course
    const existingReview = reviews.find((r) => r.course === courseId && r.user === userId)

    if (existingReview) {
      return NextResponse.json({ success: false, message: "You have already reviewed this course" }, { status: 409 })
    }

    // Create new review
    const newReview = {
      id: reviews.length + 1,
      course: courseId,
      user: userId,
      rating,
      comment: comment || "",
      date: new Date().toISOString().split("T")[0],
    }

    // In a real app, you would save the review to a database
    reviews.push(newReview)

    return NextResponse.json({ success: true, review: newReview })
  } catch (error) {
    console.error("Review creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

