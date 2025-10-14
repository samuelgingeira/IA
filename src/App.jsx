import React from 'react'
import TopNavbar from './components/TopNavbar'
import CardsSection from './components/CardsSection'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <TopNavbar />
      <main>
        <CardsSection />
        <FormSection />
      </main>
      <Footer />
    </>
  )
}
