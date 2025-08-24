import { cn } from "../lib/utils"
import AboutMeCard from "../components/AboutMeCard"


const AboutMeSection = () => {
    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text:4xl font-bold mb-12 text-center">
                    About <span className="text-primary text-glow"> ME </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">at ut, alias voluptates, quaerat incidunt, perspiciatis recusandae sunt facere aliquid doloremque.</p>

                        <p className="text-muted-foreground">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quia obcaecati ut, quis fugit corrupti et quo. Iusto</p>

                        <div className="sm:flex sm:justify-center sm:space-x-8 flex flex-row justify-between">
                            <a href="" className="cosmic-button">Get in Touch</a>

                            <a href="" className={cn("px-6 py-2 rounded-full border border-primary",
                                "text-primary hover:bg-primary hover:text-foreground transition-color duration-300")}>Upload CV</a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <AboutMeCard />
                        <AboutMeCard />
                        <AboutMeCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
