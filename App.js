import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <StatusBar />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
