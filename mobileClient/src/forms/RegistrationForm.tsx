import { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { ApplicationContext, ApplicationContextType } from "../CoreApplication";

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
    return (
        <View style={RegistrationFormStyles.RegistrationForm_container}>
            <TextInput placeholder="" onChangeText={(text) => changeHandler(text, 2)}/>
            <TextInput placeholder="" onChangeText={(text) => changeHandler(text, 0)}/>
            <TextInput placeholder="" onChangeText={(text) => changeHandler(text, 1)}/>
            <Button title="" onPress={() => null} />
        </View>
    )
}

const RegistrationFormStyles = StyleSheet.create({
    RegistrationForm_container: {}
})

export default RegistrationForm;