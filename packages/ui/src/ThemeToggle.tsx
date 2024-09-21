import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState<Boolean>()

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return <div className='px-6'>
        <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-200 ease-in-out ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-blue-100 text-gray-800'
                }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    </div>
}