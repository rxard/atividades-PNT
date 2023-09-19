import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Album2 from './components/Album2';
import Album3 from './components/Album3';
import Album from './components/Album';
import Album4 from './components/Album4';
import Button from './components/Button';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       STEVE LACY
      </Text>
      <Card>
        <Album3 />
        <Button />
        <Album />
        <Button />
        <Album4 />
        <Button />
        <Album2 />
        <Button />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#ff6400',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 25,
    color: "#FFF",
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 
