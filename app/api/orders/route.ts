import { NextResponse } from "next/server"
import { orders, courses } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const status = searchParams.get("status")

    // Filter orders based on query parameters
    let filteredOrders = [...orders]

    if (userId) {
      filteredOrders = filteredOrders.filter((order) => order.user === Number.parseInt(userId))
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    // Enhance orders with course details
    const enhancedOrders = filteredOrders.map((order) => {
      const orderCourses = order.courses.map((courseId) => {
        const course = courses.find((c) => c.id === courseId)
        return {
          id: course?.id,
          title: course?.title,
          price: course?.price,
          image: course?.image,
        }
      })

      return {
        ...order,
        courses: orderCourses,
      }
    })

    return NextResponse.json({ orders: enhancedOrders })
  } catch (error) {
    console.error("Orders API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { userId, courseIds, paymentMethod } = await request.json()

    // Validate required fields
    if (!userId || !courseIds || !courseIds.length || !paymentMethod) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Calculate total
    let total = 0
    const purchasedCourses = courseIds
      .map((id) => {
        const course = courses.find((c) => c.id === id)
        if (course) {
          total += course.price
        }
        return course
      })
      .filter(Boolean)

    // Create new order
    const newOrder = {
      id: orders.length + 1,
      user: userId,
      courses: courseIds,
      total,
      status: "completed",
      date: new Date().toISOString().split("T")[0],
      paymentMethod,
    }

    // In a real app, you would save the order to a database
    orders.push(newOrder)

    return NextResponse.json({
      success: true,
      order: {
        ...newOrder,
        courses: purchasedCourses,
      },
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

