import React from 'react'
import { MainNavbar } from '@/components/MyComponents/MainNavbar'
import MainFooter from '@/components/MyComponents/MainFooter'
import TeachersSection from './_components/TeachersSection'

export default function TeachersPage() {
  return (
    <>
      <MainNavbar />
      <hr />
      <TeachersSection />
      <MainFooter />
    </>
  )
}
