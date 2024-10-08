import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Getcat = ({ apiKey }) => {
  const [catImage, setCatImage] = useState(null);

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
        headers: {
          'x-api-key': apiKey,
        },
      });
      setCatImage(response.data[0].url); 
    } catch (error) {
      console.error('Error fetching the cat image: ', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Cat Pictures 🐱</Text>
      {catImage ? (
        <Image source={{ uri: catImage }} style={styles.image} />
      ) : (
        <Text>Loading...</Text>
      )}

      <Button title="Show Another Cat" onPress={fetchCatImage} />
   </View>
  );
};

// Styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },

});

export default Getcat; 
