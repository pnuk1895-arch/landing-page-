import caseStudies from "../../assets/caseStudies.png"
import { Icon } from "@iconify/react"

const data = [
  {
    icon: "el:group",
    score: "3.5x",
    content: "Average ROI"
  },
  {
    icon: "famicons:rocket-outline",
    score: "+320%",
    content: "increase in Leads"
  },
  {
    icon: "streamline-plump:graph-bar-increase-solid",
    score: "500+",
    content: "Compaigns"
  }]

export default function CaseStudies() {
  return (
    <section className=" relative w-full px-8 py-3 text-amber-50">
      <div className="h-full">
        <div className="absolute inset-0 -z-1 ">
          <img
            src={caseStudies}
            alt=""
            className="w-full object-center object-cover h-60"
          />
          <div className="absolute inset-0 bg-[#061B3A] ">
          </div>
        </div>
        <div className="w-full">
          <div className="mx-auto w-auto flex flex-col items-center">
            {/* first title  */}
            <h1 className="text-sm tracking-widest scale-y-90">PROVEN IMPACT</h1>
            {/* second heading  */}
            <p className="text-xl font-bold font-custom ">Real Growth for UAE Businesses</p>
          </div>
          <div className="flex justify-between items-center ">
            {
              data.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 flex flex-col items-center my-4 ${index < data.length - 1 ? "border-r-2 border-[#D9E2EC]/20 " : "border-0!"}`}
                >
                  <Icon icon={item.icon} className="text-[#FFC83D] text-4xl" />
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-semibold">{item.score}</p>
                    <p className="text-sm tracking-wide">{item.content}</p>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section >
  )
}
