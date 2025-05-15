import { NextResponse } from "next/server"
import { categories } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    // If slug is provided, return a specific category
    if (slug) {
      const category = categories.find((c) => c.slug === slug)

      if (!category) {
        return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 })
      }

      return NextResponse.json({ category })
    }

    // Otherwise return all categories
    return NextResponse.json({ categories })
  } catch (error) {
    console.error("Categories API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require admin authentication in a real app
    const { name, slug, description } = await request.json()

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Check if category already exists
    const existingCategory = categories.find((c) => c.slug === slug)

    if (existingCategory) {
      return NextResponse.json({ success: false, message: "Category with this slug already exists" }, { status: 409 })
    }

    // Create new category
    const newCategory = {
      id: categories.length + 1,
      name,
      slug,
      description: description || "",
      count: 0,
    }

    // In a real app, you would save the category to a database
    categories.push(newCategory)

    return NextResponse.json({ success: true, category: newCategory })
  } catch (error) {
    console.error("Category creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

