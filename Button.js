import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//const Separator = () => <View style={styles.separator} />;
export default function Button() {
  return (
    <View style={styles.container}>
    
      <TouchableOpacity
        style={styles.customButton}
      >
        <Text style={styles.buttonText}>LISTEN NOW</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6400',
    padding: 24,
  },

  customButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:  6,
    backgroundColor: '#d75413',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
