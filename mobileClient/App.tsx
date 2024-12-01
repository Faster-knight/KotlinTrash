import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ApplicationContext, StackNavigator } from './src/CoreApplication';
import AuthPage from './src/pages/AuthPage';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <ApplicationContext.Provider value={
              {
                themeMode: 0,
                setThemeMode(newNumberMode) {this.themeMode = newNumberMode},
                languageApplication: "eng",
                setLanguageApplication(newLanguageUsing) {this.languageApplication = newLanguageUsing}
              }
            }>
          <StackNavigator.Navigator initialRouteName='/login' screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
              <StackNavigator.Screen name='/login' component={AuthPage}/>
          </StackNavigator.Navigator>
        </ApplicationContext.Provider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
