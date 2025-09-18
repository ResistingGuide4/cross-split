import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00FF00",
    width: "50px",
    height: "50px",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
});

export default function TimerButton({
  onPress,
  title,
  buttonStyles = styles.buttonContainer,
  textStyles = styles.buttonText,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, buttonStyles]}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}
