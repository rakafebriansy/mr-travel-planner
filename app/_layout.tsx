import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import { Text, View } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if(!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <Stack screenOptions={{ 
      headerShown: false
     }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
