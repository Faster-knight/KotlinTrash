import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext } from "react";

type LanguageApplicationSupport = "ru" | "eng" | "chi"

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