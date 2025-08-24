

const HeadSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span>Welcome to </span>
                        <span className="text-primary text-glow">Verto Port</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-2-2xl mx-auto">Verto's first portfolio website that lets anyone save and showcase their work, skills, and projects in one sleek, modern space. Build your professional presence in minutes with our intuitive tools and designer-approved templates.</p>
                </div>
                <div className="mt-8">
                    <a className="cosmic-button">Check Your Portofolio</a>
                </div>
            </div>
        </section>
    )
}

export default HeadSection
