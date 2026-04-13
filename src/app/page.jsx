"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Mousewheel, Scrollbar, Parallax } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/scrollbar"

export default function Invitation() {
  const [open, setOpen] = useState(false)
  return (

    <div className="relative h-screen w-full">
      {!open && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    onClick={() => setOpen(true)}
  >
    {/* Envelope Bottom */}
    <img
      src="/o1.png"
      className="absolute w-full h-full object-cover"
    />

    {/* Envelope Top (animated) */}
    <img
      src="/o2.png"
      className={`absolute w-full h-full object-cover transition-all duration-1000 ${
        open ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    />
  </div>
)}

  {/* Background Layer */}
  <div
    className="fixed inset-0 -z-10 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.jpg')" }}
  />

  {/* Swiper */}
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
          <h1 className="text-[40px] font-bold">Reception</h1>
          <p className="text-[12px] mt-2">Hilton Colombo Residences</p>
          <iframe 
src="https://www.google.com/maps?q=Hilton+Colombo+Residences&output=embed"
loading="lazy"className="mt-4 w-80 h-60 border-0">

</iframe>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-transparent">
          <h1 className="text-[40px] font-bold">Slide 3</h1>
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

  <button className="bg-black text-white py-2 rounded">
    Submit RSVP
  </button>
</form>
          
          <img src="/your-image.jpg" className="mt-4 w-40" />
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