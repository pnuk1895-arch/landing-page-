import { Icon } from "@iconify/react"
import ServiceImage from "../../assets/Services_Image.png"

const services = [
    {
        Icon: "devicon:google",
        IconName: "Google Ads",
        content: "High-intent customers for your business."
    },
    {
        Icon: "logos:meta-icon",
        IconName: "Meta Ads",
        content: "Reach & convert the right audience."
    },
    {
        Icon: "thesvg-color:instagram",
        IconName: "Social Media Ads",
        content: "Build brand and drive more sales."
    },
    {
        Icon: "glyphs-poly:signal-4",
        IconName: "Conversion Optimization",
        content: "Turn more clicks into customers."
    }
]

export default function ServicesComponent() {
    return (
        <section className="w-full h-100 mt-6 bg-linear-to-b from-[#F3F7FD] from-0% via-white via-50% to-[#F3F7FD] to-100%">
            <div className="flex w-full max-w-380 mx-auto">
                {/* left side texted content  */}
                <div className="w-full max-w-3xl ml-26 my-8 z-10">
                    <h4 className="text-sm font-bold text-[#52627A] tracking-wide">OUR SERVICES</h4>
                    <h1 className="text-5xl my-1 font-black font-custom scale-y-95 text-[#0B1736] "> Performance Marketing <br />That <span className="text-[#FFC83D]">Delivers Results</span> </h1>
                    <div className=" grid grid-cols-4 items-center gap-4 h-58 ">
                        {
                            services.map((service, index) => (
                                <div key={index} className="w-46 h-40 drop-shadow-2xl drop-shadow-gray-200 rounded-2xl py-4 pl-4 pr-2 overflow-visible bg-white/70">
                                    <Icon
                                        icon={service.Icon}
                                        className="w-10 h-10 my-3"
                                    />
                                    <h1 className="font-bold text-[#061B3A] leading-4 whitespace-nowrap ">{service.IconName}</h1>
                                    <p className="text-sm font-medium leading-4 pt-2 text-[#0B2A52] " >{service.content}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className=" ">
                    <div className=" relative w-full h-100 overflow-hidden">
                        <img
                            src={ServiceImage}
                            alt=""
                            className="object-cover object-right w-170 h-100 rounded-bl-2xl rounded-tl-2xl"
                        />
                        <div className="
                            absolute left-0 bottom-0 top-0 right-[60%]
                            bg-linear-to-r
                            from-[#F3F7FD]
                            via-transparent
                            to-transparent
                        "></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
