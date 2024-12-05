import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext } from "react";

type LanguageApplicationSupport = "ru" | "eng" | "chi"

export function XSS_injectionJavaScript(input: string): boolean {return /alert|ALERT|document|DOCUMENT|fetch|FETCH|<|>|script|SCRIPT/.test(input.toLowerCase())}
export function XSS_injectionSQL(input: string): boolean {return /SQL|SELECT|select|sql|from|FROM|drop|DROP|put|PUT|insert|INSERT/.test(input.toLowerCase())}
export function XSS_injectionSVG(input: string): boolean {return /SVG|<|>|svg/.test(input.toLowerCase())}
export function XSS_injectionHTML(input: string): boolean {return /<|>|html|HTML|alert/.test(input.toLowerCase())}
export function Check_domainMailInput(input: string): boolean {return /^[a-z]+@[a-z]+$/.test(input.toLowerCase())}
export interface ApplicationContextType {
    themeMode: number,
    setThemeMode: (newNumberMode: number) => void,
    languageApplication: LanguageApplicationSupport,
    setLanguageApplication: (newLanguageUsing: LanguageApplicationSupport) => void
}

export const ApplicationContext = createContext<ApplicationContextType>(
    {
        themeMode: 0,
        setThemeMode: (newNumberMode: number) => {},
        languageApplication: "eng",
        setLanguageApplication: (newLanguageUsing: LanguageApplicationSupport) => {}
    }
)
export const StackNavigator = createNativeStackNavigator();