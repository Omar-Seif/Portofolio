import { useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"


const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <>
            <div className="container mt-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Verto </span> Port
                    </span>
                </Link>



                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-primary transition-color duration-300">Home</Link>
                    <Link to="/aboutme" className="hover:text-primary transition-color duration-300">About</Link>
                    <Link to="/skills" className="hover:text-primary transition-color duration-300">Skills</Link>
                    <a href="" className="hover:text-primary transition-color duration-300">Projects</a>
                    <a href="" className="hover:text-primary transition-color duration-300">Contact</a>
                </div>

                <button onClick={openMenu} className="md:hidden z-50"> {isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>


                <div className={cn(
                    "fixed top-0 left-0 w-full bg-background pt-20 pb-8 px-4 flex flex-col",
                    "items-center justify-start transition-all shadow-lg",
                    "duration-300 md:hidden z-40",
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                )}>
                    <div className="flex flex-col space-y-6 text-xl w-full items-center">
                        <Link to="/" className="hover:text-primary transition-color duration-300 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/aboutme" className="hover:text-primary transition-color duration-300 w-full text-center py-2" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="/skills" className="hover:text-primary transition-color duration-300 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Skills</Link>
                        <a href="" className="hover:text-primary transition-color duration-300 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href="" className="hover:text-primary transition-color duration-300 w-full text-center py-2" onClick={() => setMenuOpen(false)}>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
