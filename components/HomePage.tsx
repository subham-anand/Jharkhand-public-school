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
import ErrorBoundary from '@/components/ErrorBoundary'
import { useLenis } from '@/hooks/useLenis'
import React from 'react'

export default function HomePage() {
  // Initialize smooth scroll navigation
  useLenis()

  return (
    <ErrorBoundary>
      <MainNavbar />
      <hr />
      <ErrorBoundary>
        <section id="home">
          <Hero />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="about">
          <About />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="admission">
          <AdmissionOpen />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="notice">
          <NoticeBoard />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="gallery">
          <ImageGallery />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="testimonials">
          <Testimonials />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section id="contact">
          <MainFooter />
        </section>
      </ErrorBoundary>
    </ErrorBoundary>
  )
}
