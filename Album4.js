import { Text, View, StyleSheet, Image, Button } from 'react-native';

const Separator = () => <View style={styles.separator} />;
export default function Album4() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        THE LO-FIS:
      </Text>
      <Image style={styles.logo} source={require('../assets/stevelacylof.jpg')} /> 
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6400',
    padding: 20,
  },
  logo: {
    height: 128,
    width: 128,
  },
  paragraph: {
    margin: 15,
    fontSize: 13,
    color: "#FFF",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
