'use client'

import { useEffect, useRef, useState } from 'react'

type ProjectVideoProps = {
  src: string
  poster?: string
}

export function ProjectVideo({ src, poster }: ProjectVideoProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hasRequestedLoadRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = wrapperRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) {
      if (!hasRequestedLoadRef.current) {
        video.load()
        hasRequestedLoadRef.current = true
      }
      void video.play().catch(() => {})
      return
    }
    video.pause()
  }, [isVisible])

  const handleCanPlay = () => {
    const video = videoRef.current
    if (!video || !isVisible) return
    void video.play().catch(() => {})
  }

  return (
    <div ref={wrapperRef} className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-black/60">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls
        poster={poster}
        preload="metadata"
        onCanPlay={handleCanPlay}
        onLoadedData={handleCanPlay}
      />
    </div>
  )
}
