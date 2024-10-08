import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Getcat from './components/getcat';


// Your API key from TheCatAPI
const API_KEY = 'APIKEY'; //word-tiedostossa

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Getcat apiKey={API_KEY} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
