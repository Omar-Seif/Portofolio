import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";



const ThemeToggle = () => {

    const [isDark, setDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark")
            setDark(true)
        } else {
            setDark(false)
        }
    }, [])

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setDark(false)
        }
        else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setDark(true)
        }

    }

    return (
        <button onClick={toggleTheme} className={cn(
            "fixed top-5 right-5 rounded-full",
            "transition-colors duration-300",
            "focus:outline-none",
            "max-sm:hidden"
        )}
        > {isDark ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}</button>
    )
}

export default ThemeToggle
