'use client'

import About from '@/components/MyComponents/About'
import AdmissionOpen from '@/components/MyComponents/AdmissionOpen'
import Hero from '@/components/MyComponents/Hero'
import ImageGallery from '@/components/MyComponents/ImageGallary'
import MainFooter from '@/components/MyComponents/MainFooter'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import NoticeBoard from '@/components/MyComponents/NoticeBoard'
import Testimonials from '@/components/MyComponents/Testimonials'
import WhyChooseUs from '@/components/MyComponents/WhyChooseUs'
import { useLenis } from '@/hooks/useLenis'
import React from 'react'

export default function HomePage() {
  // Initialize smooth scroll navigation
  useLenis()

  return (
    <>
      <MainNavbar />
      <hr />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="admission">
        <AdmissionOpen />
      </section>
      <section id="notice">
        <NoticeBoard />
      </section>
      <section id="gallery">
        <ImageGallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <MainFooter />
      </section>
    </>
  )
}
