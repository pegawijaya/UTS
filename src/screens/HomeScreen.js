import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [drinks, setDrinks] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchDrinks();
  }, [isFocused]);

  const fetchDrinks = async () => {
    try {
      const response = await axios.get('https://672e32e6229a881691ef4e4c.mockapi.io/menu');
      setDrinks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDrink = async (id) => {
    try {
      await axios.delete(`https://672e32e6229a881691ef4e4c.mockapi.io/menu/${id}`);
      fetchDrinks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    Alert.alert("Hapus Minuman", "Anda yakin ingin menghapus minuman ini?", [
      { text: "Batal" },
      { text: "Hapus", onPress: () => deleteDrink(id) }
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddDrink')}>
        <Text style={styles.addButtonText}>Tambah Minuman</Text>
      </TouchableOpacity>
      <FlatList
        data={drinks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('EditDrink', { drink: item })} style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#16423C',
  },
  addButton: {
    backgroundColor: '#6A9C89',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  itemContainer: {
    backgroundColor: '#C4DAD2',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    color: '#16423C',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#16423C',
    fontSize: 14,
    fontFamily: 'Poppins',
    opacity: 0.7,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#6A9C89',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins',
  },
});
