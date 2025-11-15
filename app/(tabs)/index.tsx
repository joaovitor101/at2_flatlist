import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Pizza } from "../../data/pizzaria";

export default function PizzariaScreen() {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={Pizza}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
    padding: 12,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#d32f2f",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
