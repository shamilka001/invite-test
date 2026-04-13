"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleOpen = () => {
    if (open) return

    setOpen(true)

    setTimeout(() => {
      router.push("/invitation")
    }, 1200)
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Bottom Image */}
      <img
        src="/o1.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      {/* Top Image (CLICKABLE) */}
      <img
        src="/o2.png"
        onClick={handleOpen}
        onTouchStart={handleOpen}
        className={`absolute inset-0 w-full h-full object-cover cursor-pointer transition-opacity duration-700 ${
          open ? "opacity-0" : "opacity-100"
        }`}
        alt="open invitation"
      />

    </div>
  )
}