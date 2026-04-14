"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const PETAL_IMAGES = ["/p1.png", "/p2.png", "/p3.png", "/p4.png"]

export default function Petals() {
  const [petals, setPetals] = useState([])

  const spawnPetals = (x, y) => {
    const newPetals = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      img: PETAL_IMAGES[Math.floor(Math.random() * PETAL_IMAGES.length)],
      size: 20 + Math.random() * 20,
      drift: Math.random() * 100 - 50,
      rotate: Math.random() * 360,
      delay: Math.random() * 0.2,
    }))

    setPetals((prev) => [...prev, ...newPetals])

    // remove after animation
    setTimeout(() => {
      setPetals((prev) => prev.slice(newPetals.length))
    }, 3000)
  }

  useEffect(() => {
    const handleClick = (e) => {
      spawnPetals(e.clientX, e.clientY)
    }

    const handleScroll = () => {
      spawnPetals(window.innerWidth / 2, window.innerHeight / 2)
    }

    window.addEventListener("click", handleClick)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {petals.map((petal) => (
        <motion.img
          key={petal.id}
          src={petal.img}
          className="absolute pointer-events-none"
          initial={{
            x: petal.x,
            y: petal.y,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            x: petal.x + petal.drift,
            y: petal.y + 300, // fall downward
            opacity: 0,
            rotate: petal.rotate,
          }}
          transition={{
            duration: 2.5,
            delay: petal.delay,
            ease: "easeOut",
          }}
          style={{
            width: petal.size,
          }}
        />
      ))}
    </div>
  )
}