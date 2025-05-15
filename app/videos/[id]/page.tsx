"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Download,
  Expand,
  Heart,
  Pause,
  Play,
  Share2,
  ThumbsUp,
  User,
  Volume2,
  VolumeX,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

// Mock data for a single video
const video = {
  id: 1,
  title: "Building a Modern Website with Next.js and Tailwind CSS",
  description:
    "Learn how to create a fully responsive website using Next.js and Tailwind CSS in this comprehensive tutorial. We'll cover everything from setup to deployment.",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail: "/placeholder.svg?height=400&width=800",
  duration: "32:15",
  views: "45.2K",
  likes: "2.3K",
  date: "Mar 15, 2023",
  instructor: {
    name: "Jane Smith",
    title: "Senior Web Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    subscribers: "125K",
  },
  category: "Web Development",
  tags: ["Next.js", "Tailwind CSS", "React", "Frontend"],
  relatedVideos: [
    {
      id: 2,
      title: "React Hooks Explained",
      description: "A comprehensive guide to understanding and using React Hooks in your applications",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "28:42",
      views: "38.7K",
      date: "Apr 22, 2023",
      instructor: "John Davis",
    },
    {
      id: 3,
      title: "CSS Grid Layout Masterclass",
      description: "Master the CSS Grid Layout system for creating complex web layouts",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "26:47",
      views: "33.5K",
      date: "Jan 28, 2023",
      instructor: "David Wilson",
    },
    {
      id: 4,
      title: "TypeScript for JavaScript Developers",
      description: "Get started with TypeScript and learn how it improves JavaScript development",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "41:23",
      views: "27.9K",
      date: "Jun 12, 2023",
      instructor: "Emily Clark",
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "This tutorial was incredibly helpful! I've been struggling with combining Next.js and Tailwind CSS effectively, but your explanations made it so clear. Thank you!",
      date: "2 weeks ago",
      likes: 24,
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "Great content as always! I especially liked the section on responsive design. Would love to see a follow-up video on animations with Tailwind.",
      date: "1 week ago",
      likes: 18,
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      text: "I implemented everything from this tutorial and my website looks amazing now. The deployment section was particularly useful.",
      date: "5 days ago",
      likes: 12,
    },
  ],
}

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [comment, setComment] = useState("")

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration)
    }

    videoElement.addEventListener("timeupdate", handleTimeUpdate)
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata)

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate)
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

  const togglePlay = () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    if (isPlaying) {
      videoElement.pause()
    } else {
      videoElement.play()
    }

    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    videoElement.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const newVolume = value[0]
    videoElement.volume = newVolume
    setVolume(newVolume)

    if (newVolume === 0) {
      setIsMuted(true)
      videoElement.muted = true
    } else if (isMuted) {
      setIsMuted(false)
      videoElement.muted = false
    }
  }

  const handleSeek = (value: number[]) => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const seekTime = (value[0] / 100) * duration
    videoElement.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const handleFullscreen = () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoElement.requestFullscreen()
    }
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the comment to the backend
    console.log("Submitting comment:", comment)
    setComment("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/videos">
                <ArrowLeft className="h-4 w-4" />
                Back to Videos
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
                <video
                  ref={videoRef}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  className="w-full h-full"
                  onClick={togglePlay}
                />

                {/* Video Controls */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!isPlaying && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-16 w-16 rounded-full bg-black/50 text-white hover:bg-black/70"
                      onClick={togglePlay}
                    >
                      <Play className="h-8 w-8" fill="currentColor" />
                    </Button>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="space-y-2">
                    <Slider
                      value={[currentTime ? (currentTime / duration) * 100 : 0]}
                      onValueChange={handleSeek}
                      className="w-full [&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&>span:first-child_span]:bg-primary"
                    />
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={togglePlay}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" fill="currentColor" />}
                        </Button>

                        <div
                          className="relative flex items-center"
                          onMouseEnter={() => setShowVolumeSlider(true)}
                          onMouseLeave={() => setShowVolumeSlider(false)}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white hover:bg-white/20"
                            onClick={toggleMute}
                          >
                            {isMuted || volume === 0 ? (
                              <VolumeX className="h-5 w-5" />
                            ) : (
                              <Volume2 className="h-5 w-5" />
                            )}
                          </Button>

                          {showVolumeSlider && (
                            <div className="absolute bottom-full left-0 mb-2 p-2 bg-black/80 rounded-md w-24">
                              <Slider
                                value={[isMuted ? 0 : volume]}
                                min={0}
                                max={1}
                                step={0.01}
                                onValueChange={handleVolumeChange}
                                className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&>span:first-child_span]:bg-primary"
                              />
                            </div>
                          )}
                        </div>

                        <span className="text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20"
                          onClick={handleFullscreen}
                        >
                          <Expand className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">{video.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{video.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{video.likes} likes</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={video.instructor.avatar} alt={video.instructor.name} />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{video.instructor.name}</div>
                      <div className="text-sm text-muted-foreground">{video.instructor.subscribers} subscribers</div>
                    </div>
                  </div>
                  <Button>Subscribe</Button>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Description</h3>
                        <Badge variant="outline">{video.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {video.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Comments</h3>

                  <form onSubmit={handleSubmitComment} className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <Textarea
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <div className="flex justify-end">
                        <Button type="submit" disabled={!comment.trim()}>
                          Comment
                        </Button>
                      </div>
                    </div>
                  </form>

                  <div className="space-y-4">
                    {video.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                          <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.user.name}</span>
                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-sm mt-1">{comment.text}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{comment.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Videos */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Related Videos</h3>
              <div className="space-y-4">
                {video.relatedVideos.map((related) => (
                  <Card key={related.id} className="overflow-hidden">
                    <div className="relative group">
                      <Image
                        src={related.thumbnail || "/placeholder.svg"}
                        alt={related.title}
                        width={350}
                        height={200}
                        className="object-cover w-full h-[180px]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="rounded-full bg-primary/90 p-3">
                          <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {related.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium line-clamp-2">
                        <Link href={`/videos/${related.id}`} className="hover:underline">
                          {related.title}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <span>{related.instructor}</span>
                        <span>•</span>
                        <span>{related.views} views</span>
                        <span>•</span>
                        <span>{related.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

