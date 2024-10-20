import { Text, View } from "react-native";
import SignIn from "./components/SignIn";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignIn />
    </View>
  );
}
