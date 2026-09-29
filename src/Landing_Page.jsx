import Footer from "./components/CommonComponent/Footer"
import Header from "./components/CommonComponent/Header"
import About from "./components/LandingPageComponents/About"
import HeroSection from "./components/LandingPageComponents/HeroSection"
import CaseStudies from "./components/LandingPageComponents/ProvenImpact"
import ServicesComponent from "./components/LandingPageComponents/ServicesComponent"
import TrustedGroupSection from "./components/LandingPageComponents/TrustedGroupSection"

export default function LandingPage()
{
  return (
  <>
    <Header/>
    <main className="w-full">
      <HeroSection/>
      <TrustedGroupSection/>
      <ServicesComponent/>
      <CaseStudies/>
      <About/>
    </main>
    <Footer/>
  </>
  )
}
