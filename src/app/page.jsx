"use client"

import { useState } from "react"
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
      />

      {/* Top layer slides LEFT */}
      <motion.img
        src="/o2.png"
        className="absolute w-full h-full object-cover"
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
  fadeEffect={{ crossFade: true }}   // ⭐ THIS FIXES IT
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
          <img src="/hero.png" className="mt-4 w-100" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <p className="text-[12px] mt-2">The Loving Daughter of Mr. & Mrs. Rodrigo,</p>
          <img src="/n.png" className="mt-4 w-60" />
          <p className="text-[12px] mt-2">Is getting married to</p>
          <img src="/s.png" className="mt-4 w-60" />
          <p className="text-[12px] mt-2">the Loving Son of Mr. & Mrs. Silva.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <h1 className=" text-yellow-800 text-[40px] font-bold">Holy Mass</h1>
          
          <iframe 
          src="https://www.google.com/maps?q=Hilton+Colombo+Residences&output=embed"
          loading="lazy"className="mt-4 w-50 h-80 rounded-t-full border border-solid border-blue-800 shadow-md">

</iframe><p className="text-[12px] mt-2">Hilton Colombo Residences</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <h1 className=" text-yellow-800 text-[40px] font-bold">Reception</h1>
          
          <iframe 
src="https://www.google.com/maps?q=Hilton+Colombo+Residences&output=embed"
loading="lazy"className="mt-4 w-50 h-80 rounded-t-full border border-solid border-blue-800">

</iframe><p className="text-[12px] mt-2">Hilton Colombo Residences</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <h1 className=" text-yellow-800 text-[40px] font-bold">Slide 3</h1>
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

  <button className=" bg-yellow-600 text-white py-2 rounded-full w-32 align-middle self-center mt-4" type="submit">
    Submit RSVP
  </button>
</form>
          
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <h1 className="text-[40px] font-bold">Slide 4</h1>
          <p className="text-[12px] mt-2">Second section</p>
          <img src="/your-image.jpg" className="mt-4 w-40" />
        </div>
      </SwiperSlide>
    
    </Swiper>
    </div>
  )
}