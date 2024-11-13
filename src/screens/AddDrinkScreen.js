import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AddDrinkScreen({ navigation }) {
  const [name, setName] = useState('');

  const addDrink = async () => {
    try {
      await axios.post('https://672e32e6229a881691ef4e4c.mockapi.io/menu', { name });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Minuman</Text>
      <TextInput
        placeholder="Nama Minuman"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#6A9C89"
      />
      <TouchableOpacity onPress={addDrink} style={styles.addButton}>
        <Text style={styles.buttonText}>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#16423C',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C4DAD2',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#6A9C89',
    borderRadius: 10,
    backgroundColor: '#C4DAD2',
    fontSize: 16,
    marginBottom: 20,
    color: '#16423C',
  },
  addButton: {
    backgroundColor: '#6A9C89',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#16423C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
