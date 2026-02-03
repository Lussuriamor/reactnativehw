import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/BG.png')}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.overlay}>
        <Text style={styles.name}>Elaman</Text>
        <Text style={styles.course}>React Native</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CLICK</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // затемнение фона
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  course: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
