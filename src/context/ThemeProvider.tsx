import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
   children: React.ReactNode
   defaultTheme?: Theme
   storageKey?: string
}

type ThemeProviderState = {
   theme: Theme
   setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
   theme: 'system',
   setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

const ThemeProvider = ({
   children,
   defaultTheme = 'system',
   storageKey = 'theme',
}: ThemeProviderProps) => {
   const [theme, setTheme] = useState<Theme>(() =>  (localStorage.getItem(storageKey) as Theme) || defaultTheme)

   useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove('dark', 'light')

      if (theme === 'system') {
         root.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
         return
      }
      root.classList.add(theme)
   }, [theme])

   const value = { theme, setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
   } }

   return (
      <ThemeProviderContext.Provider value={value}>
         {children}
      </ThemeProviderContext.Provider>
   )
}

export default ThemeProvider

export const useTheme = () => {
   const context = useContext(ThemeProviderContext)

   if (context === undefined)
      throw new Error('useTheme must be used within a ThemeProvider')

   return context
}