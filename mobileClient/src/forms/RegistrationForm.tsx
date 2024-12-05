import { useContext, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { ApplicationContext, ApplicationContextType, Check_domainMailInput, XSS_injectionHTML, XSS_injectionJavaScript, XSS_injectionSQL, XSS_injectionSVG } from "../CoreApplication";

function RegistrationForm() {
    const {languageApplication} = useContext<ApplicationContextType>(ApplicationContext);
    const [input, setInput] = useState({pswd1: "", pswd2: "", mail: ""})
    const changeHandler = (text: string, id: number) => {
        switch (id) {
            case 0:
                setInput({...input, pswd1: text})
                break
            case 1:
                setInput({...input, pswd2: text})
                break
            case 2:
                setInput({...input, mail: text})
                break
        }
    }
    const buttonClickHandler = (): void => {
        if (
            XSS_injectionHTML(input.mail) || XSS_injectionHTML(input.pswd1) || XSS_injectionHTML(input.pswd2) ||
            XSS_injectionSQL(input.mail) || XSS_injectionSQL(input.pswd1) || XSS_injectionSQL(input.pswd2) ||
            XSS_injectionJavaScript(input.mail) || XSS_injectionJavaScript(input.pswd1) || XSS_injectionJavaScript(input.pswd2) ||
            XSS_injectionSVG(input.mail) || XSS_injectionSVG(input.pswd1) || XSS_injectionSVG(input.pswd2)
        ) return;
        if (!Check_domainMailInput(input.mail)) {
            Alert.alert("Alert", "Mail input format: xxx@xxx")
            return;
        }
    }
    return (
        <View style={RegistrationFormStyles.RegistrationForm_container}>
            <TextInput placeholder="Mail login:" onChangeText={(text) => changeHandler(text, 2)}/>
            <TextInput placeholder="Password:" onChangeText={(text) => changeHandler(text, 0)}/>
            <TextInput placeholder="Again password:" onChangeText={(text) => changeHandler(text, 1)}/>
            <Button title="Send" onPress={buttonClickHandler} />
        </View>
    )
}

const RegistrationFormStyles = StyleSheet.create({
    RegistrationForm_container: {}
})

export default RegistrationForm;