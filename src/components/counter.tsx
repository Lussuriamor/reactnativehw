import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type CounterProps = {
  initial?: number;
};

export function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  return (
    <View style={styles.wrap}>
      <Text style={styles.value}>{count}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => setCount((v) => v + 1)}
      >
        <Text style={styles.buttonText}>TAP!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 14,
    width: "100%",
    alignItems: "center",
  },

  value: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },

  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#6C5CE7",
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
