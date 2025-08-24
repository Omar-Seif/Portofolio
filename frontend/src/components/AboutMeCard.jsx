import { Code } from "lucide-react"

const AboutMeCard = () => {
    return (
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-6 rounded-full">
                    <Code />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Developmnent</h4>
                    <p>Creating responsive websites and web applications with
                        modern frameworks.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeCard
