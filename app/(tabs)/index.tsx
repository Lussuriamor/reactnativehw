import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/BGG.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        {/* 🔹 Верхняя прямоугольная картинка */}
        <Image
          source={require("../../assets/images/BG2.png")}
          style={styles.headerImage}
        />

        {/* 🔹 Карточка */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Elaman</Text>
          <Text style={styles.emoji}>👋</Text>

          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Elaman</Text>
          <Text style={styles.role}>Mobile Developer</Text>

          <Text style={styles.description}>
            Passionate about building beautiful mobile experiences with React
            Native and Expo.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SEE MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  headerImage: {
    width: "100%",
    maxWidth: 380,
    height: 140,          // можно менять: 120–180
    borderRadius: 18,
    marginBottom: 16,
    resizeMode: "cover",
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.7,
  },

  emoji: {
    fontSize: 18,
    marginTop: 6,
    marginBottom: 14,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    resizeMode: "cover",
  },

  name: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.6,
    marginBottom: 14,
  },

  description: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.75,
    marginBottom: 18,
    paddingHorizontal: 12,
  },

  button: {
    width: "100%",
    backgroundColor: "#111",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
