import { useContext, useState } from "react";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ApplicationContext, ApplicationContextType } from "../CoreApplication";
import LoginForm from "../forms/LoginForm";

function AuthPage() {
    const [regFormView, setRegFormView] = useState<boolean>(false);

    const {languageApplication} = useContext<ApplicationContextType>(ApplicationContext);

    // TODO вместо костыльков функций придумать что то еще
    const Text_getTitleText = () => {
        switch (languageApplication) {
            case "eng":
                return regFormView ? "Do you have an account?\nCome in!" : "Don't have an account?\nRegistration!"
            case "ru":
                return regFormView ? "Есть аккаунт?\nЗаходи!" : "Нет аккаунта?\nРегистрация!"
            case "chi":
                return regFormView ? "你有帳戶嗎？進來！" : "沒有帳戶？登記！"
        }
        return "Error to translate"
    }
    const Button_getTitleText = () => {
        switch (languageApplication) {
            case "eng":
                return regFormView ? "Login" : "Registration"
            case "ru":
                return regFormView ? "Логин" : "Регистрация"
            case "chi":
                return regFormView ? "登入" : "登記"
        }
        return "Error to translate"
    }
    return (
        <View>
            <ImageBackground source={require("../../assets/backgroundImage0.png")}>
                <SafeAreaView style={AuthPageStyles.AuthPage_container}>
                    {
                        regFormView ? null : <LoginForm />
                    }
                    <View>
                        <Text>{Text_getTitleText()}</Text>
                        <Button title={Button_getTitleText()} onPress={(event) => setRegFormView(!regFormView)}/>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const AuthPageStyles = StyleSheet.create({
    AuthPage_container: {
        flex: 1,
        zIndex: 0
    }
})

export default AuthPage