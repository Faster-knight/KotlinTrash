import { createContext, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ApplicationContext, ApplicationContextType } from "../CoreApplication";

let ScreenSize: number[] = []

function LoginForm() {
    const {languageApplication} = useContext<ApplicationContextType>(ApplicationContext)
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