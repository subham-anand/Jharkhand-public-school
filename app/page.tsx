import About from '@/components/MyComponents/About'
import AdmissionOpen from '@/components/MyComponents/AdmissionOpen'
import Hero from '@/components/MyComponents/Hero'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import NoticeBoard from '@/components/MyComponents/NoticeBoard'
import WhyChooseUs from '@/components/MyComponents/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <>
    <MainNavbar/>
    <hr />
    <Hero/>
    <About/>
    <WhyChooseUs/>
    <AdmissionOpen/>
    <NoticeBoard/>
    </>
  )
}
