import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DrinkItem({ drink, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{drink.name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(drink)} style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(drink.id)} style={styles.button}>
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#000000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
