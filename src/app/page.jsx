// page.jsx
"use client"

import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Mousewheel, Scrollbar, Parallax } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/scrollbar"

import Petals from "@/components/Petals"

export default function Invitation() {
  const [open, setOpen] = useState(false)
  const [hideEnvelope, setHideEnvelope] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Initialize audio on first user interaction
  useEffect(() => {
    audioRef.current = new Audio("/wedding-music.mp3") // Add your music file to public folder
    audioRef.current.loop = true
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Auto-play music when envelope opens
  useEffect(() => {
    if (open && audioRef.current && !isPlaying) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.log("Autoplay prevented:", error))
      }, 500)
    }
  }, [open])

  return (
    <div className="relative w-full h-full perspective-[1200px]">
      {!hideEnvelope && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#eeffff] overflow-hidden"
          onClick={() => setOpen(true)}
        >
          <div className="relative w-full h-full">
            {/* Bottom part (stays) */}
            <img
              src="/o1.png"
              className="absolute w-full h-full object-cover"
              alt="Envelope bottom"
            />

            {/* Top layer slides LEFT */}
            <motion.img
              src="/o2.png"
              className="absolute w-full h-full object-cover"
              alt="Envelope top"
              initial={{ x: 0 }}
              animate={open ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (open) setHideEnvelope(true)
              }}
            />
          </div>
        </div>
      )}

      {/* Floating Glass Music Button */}
      {hideEnvelope && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full backdrop-blur-md bg-white/20 shadow-lg border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
        >
          {isPlaying ? (
            // Playing icon (Pause symbol)
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            // Play icon
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
          
          {/* Sound wave animation when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full animate-ping bg-white/20"></div>
          )}
        </motion.button>
      )}

      {/* Background Layer */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* Swiper */}
      <Petals />
      <Swiper
        direction="vertical"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Mousewheel, Scrollbar, Parallax]}
        mousewheel={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={800}
        scrollbar={{ draggable: true }}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
            <img src="/hero.png" className="mt-4 w-100" alt="Hero" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
            <p className="text-[12px] mt-2">The Loving Daughter of Mr. & Mrs. Rodrigo,</p>
            <img src="/n.png" className="mt-4 w-60" alt="Bride" />
            <p className="text-[12px] mt-2">Is getting married to</p>
            <img src="/s.png" className="mt-4 w-60" alt="Groom" />
            <p className="text-[12px] mt-2">the Loving Son of Mr. & Mrs. Silva.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
            <h1 className="text-yellow-800 text-[40px] font-bold">Holy Mass</h1>
            
            <iframe 
              src="https://www.google.com/maps?q=Hilton+Colombo+Residences&output=embed"
              loading="lazy"
              className="mt-4 w-50 h-80 rounded-t-full border border-solid border-blue-800 shadow-md"
              title="Church Map"
            ></iframe>
            <p className="text-[15px] mt-6">Church Name Here</p>
            <p className="text-[20px] mt-6">Starting @ 10:00 AM</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
            <h1 className="text-yellow-800 text-[40px] font-bold">Reception</h1>
            
            <iframe 
              src="https://www.google.com/maps?q=Hilton+Colombo+Residences&output=embed"
              loading="lazy"
              className="mt-4 w-50 h-80 rounded-t-full border border-solid border-blue-800 shadow-md"
              title="Reception Map"
            ></iframe>
            <p className="text-[15px] mt-6">Hilton Colombo Residences</p>
            <p className="text-[20px] mt-6">Starting @ 4:00 PM</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
            <h1 className="text-yellow-800 text-[40px] font-bold">RSVP</h1>
            <form className="flex flex-col gap-3 mt-4 w-64">
              <input className="p-2 rounded bg-white/80 text-black" type="text" placeholder="Name" required />
              
              <select className="p-2 rounded bg-white/80 text-black">
                <option>Will you attend?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <input className="p-2 rounded bg-white/80 text-black" type="number" placeholder="Number of guests" />

              <input className="p-2 rounded bg-white/80 text-black" type="text" placeholder="Meal preference" />

              <textarea className="p-2 rounded bg-white/80 text-black" placeholder="Message"></textarea>

              <button className="border border-solid border-blue-800 text-yellow-600 py-2 rounded-full w-32 align-middle self-center mt-4" type="submit">
                Submit RSVP
              </button>
            </form>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}