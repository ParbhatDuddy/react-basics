import { createContext, useState } from "react";
export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggletheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{ theme, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    )
}