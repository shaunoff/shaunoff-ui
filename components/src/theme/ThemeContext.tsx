import React, { useContext } from 'react'
import defaultTheme from './defaultTheme'

// Currently only uses the default theme. We can change this here to extend using custom themes and change modes etc.
interface ThemeContextInterface {
  theme: typeof defaultTheme
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
  value?: ThemeContextInterface
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const value = { theme: defaultTheme }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextInterface => {
  const value = useContext(ThemeContext)
  if (!value) {
    throw new Error('Theme requires context')
  }
  return value
}
