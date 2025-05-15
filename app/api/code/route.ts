import { NextResponse } from "next/server"
import { codeSamples } from "@/data/dummy-data"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const language = searchParams.get("language")
    const tag = searchParams.get("tag")
    const search = searchParams.get("search")
    const sort = searchParams.get("sort") || "popular"

    // Filter code samples based on query parameters
    let filteredSamples = [...codeSamples]

    if (language) {
      filteredSamples = filteredSamples.filter((sample) => sample.language.toLowerCase() === language.toLowerCase())
    }

    if (tag) {
      filteredSamples = filteredSamples.filter((sample) =>
        sample.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
      )
    }

    if (search) {
      filteredSamples = filteredSamples.filter(
        (sample) =>
          sample.title.toLowerCase().includes(search.toLowerCase()) ||
          sample.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Sort code samples
    switch (sort) {
      case "newest":
        filteredSamples.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        filteredSamples.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "popular":
      default:
        filteredSamples.sort(
          (a, b) => Number.parseInt(b.downloads.replace("K", "000")) - Number.parseInt(a.downloads.replace("K", "000")),
        )
        break
    }

    return NextResponse.json({ codeSamples: filteredSamples })
  } catch (error) {
    console.error("Code Samples API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // This would require authentication in a real app
    const { title, description, language, code, tags, author } = await request.json()

    // Validate required fields
    if (!title || !description || !language || !code || !tags || !author) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Create new code sample
    const newCodeSample = {
      id: codeSamples.length + 1,
      title,
      description,
      language,
      downloads: "0",
      date: new Date().toISOString().split("T")[0],
      author,
      tags,
      code,
    }

    // In a real app, you would save the code sample to a database
    codeSamples.push(newCodeSample)

    return NextResponse.json({ success: true, codeSample: newCodeSample })
  } catch (error) {
    console.error("Code Sample creation error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

