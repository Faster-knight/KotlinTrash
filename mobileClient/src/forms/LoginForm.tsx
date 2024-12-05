import { createContext, useContext, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ApplicationContext, ApplicationContextType } from "../CoreApplication";
import {XSS_injectionHTML, XSS_injectionJavaScript, XSS_injectionSQL, XSS_injectionSVG, Check_domainMailInput} from "../CoreApplication";

let ScreenSize: number[] = []

function LoginForm() {
    const {languageApplication} = useContext<ApplicationContextType>(ApplicationContext)
    const [input, setInput] = useState<{mail: string, pswd: string}>({mail: "", pswd: ""})
    const Translate_Text_getTitleText = () => {
        switch (languageApplication) {
            case "eng":
                return "Authorisation"
            case "ru":
                return "Авторизация"
            case "chi":
                return ""
        }
        return "Error to translate"
    }
    const Translate_TextInput0_getPlaceHolderText = () => {
        switch (languageApplication) {
            case "eng":
                return "Your email login:"
            case "ru":
                return "Ваша почта:"
            case "chi":
                return ""
        }
        return "Error to translate"
    }
    const Translate_TextInput1_getPlaceHolderText = () => {
        switch (languageApplication) {
            case "eng":
                return "Your password:"
            case "ru":
                return "Ваш пароль:"
            case "chi":
                return ""
        }
        return "Error to translate"
    }
    const Translate_Button_getTitleText = () => {
        switch (languageApplication) {
            case "eng":
                return "Send"
            case "ru":
                return "Отправить"
            case "chi":
                return ""
        }
        return "Error to translate"
    }
    const changeHandler = (text: string, id: number) => {
        switch (id) {
            case 0:
                setInput({...input, pswd: text})
                break
            case 1:
                setInput({...input, mail: text})
                break
        }
    }
    const buttonClickHandler = (): void => {
        if (
            XSS_injectionHTML(input.mail) || XSS_injectionHTML(input.pswd) ||
            XSS_injectionSQL(input.mail) || XSS_injectionSQL(input.pswd) ||
            XSS_injectionJavaScript(input.mail) || XSS_injectionJavaScript(input.pswd) ||
            XSS_injectionSVG(input.mail) || XSS_injectionSVG(input.pswd)
        ) return;
        if (!Check_domainMailInput(input.mail)) {
            Alert.alert("Alert", "Mail input format: xxx@xxx")
            return;
        }
    }
    return (
        <View style={LoginFormStyles.LoginForm_container}>
            <Text>{Translate_Text_getTitleText()}</Text>
            <TextInput placeholder={Translate_TextInput0_getPlaceHolderText()}/>
            <TextInput placeholder={Translate_TextInput1_getPlaceHolderText()}/>
            <Button title={Translate_Button_getTitleText()} />
        </View>
    )
}

const LoginFormStyles = StyleSheet.create({
    LoginForm_container: {
        width: ScreenSize[0],
        height: ScreenSize[1],
        position: "absolute",
        zIndex: 1
    }
})

export default LoginForm