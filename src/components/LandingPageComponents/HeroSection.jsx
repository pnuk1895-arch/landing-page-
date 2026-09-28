import HeroImage from "../../assets/heroImage.png"

export default function HeroSection()
{
  return (
  <section className="w-full h-150 bg-black overflow-hidden">
    <div className="h-auto w-full">
        <img 
            src={HeroImage} 
            alt="UAE Town" 
            className="w-full h-150  object-fill"/>
    </div>
  </section>
  )
}
