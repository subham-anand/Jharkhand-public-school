import React from 'react'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import MainFooter from '@/components/MyComponents/MainFooter'
import GallerySection from './_components/GallerySection'

export default function GalleryPage() {
  return (
    <>
      <MainNavbar />
      <hr />
      <GallerySection />
      <MainFooter />
    </>
  )
}
