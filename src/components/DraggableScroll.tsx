"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface DraggableScrollProps {
  className?: string
  children: React.ReactNode
}

const DraggableScroll: React.FC<DraggableScrollProps> = ({ className, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  useEffect(() => {
    const slider = scrollRef.current
    if (!slider) return

    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true
      slider.classList.add("active")
      startX.current = e.pageX - slider.offsetLeft
      scrollLeft.current = slider.scrollLeft
    }

    const onMouseLeave = () => {
      isDown.current = false
      slider.classList.remove("active")
    }

    const onMouseUp = () => {
      isDown.current = false
      slider.classList.remove("active")
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX.current) * 2
      slider.scrollLeft = scrollLeft.current - walk
    }

    slider.addEventListener("mousedown", onMouseDown)
    slider.addEventListener("mouseleave", onMouseLeave)
    slider.addEventListener("mouseup", onMouseUp)
    slider.addEventListener("mousemove", onMouseMove)

    return () => {
      slider.removeEventListener("mousedown", onMouseDown)
      slider.removeEventListener("mouseleave", onMouseLeave)
      slider.removeEventListener("mouseup", onMouseUp)
      slider.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div ref={scrollRef} className={className}>
      {children}
    </div>
  )
}

export default DraggableScroll

