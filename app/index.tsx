import { Alert, View } from "react-native";
import TimerButton from "../components/timerButton.js";

export default function Index() {

  function handlePress() {
    Alert.alert("You Pressed the Button!")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TimerButton onPress={handlePress} title="Button Yay!"></TimerButton>
    </View>
  );
}