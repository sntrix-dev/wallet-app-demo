import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardProps {
  name: string;
  number: string;
}

export const Card: React.FC<CardProps> = ({ name, number }) => (
  <View style={styles.container}>
    <View style={styles.circleOne} />
    <View style={styles.circleTwo} />
    <View style={styles.circleThree} />
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.numberText}>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363D4E",
    position: "relative",
    padding: 16,
    marginVertical: 16,
    borderRadius: 16,
    height: 200,
  },
  nameText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
  numberText: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "600",
    position: "absolute",
    top: "50%",
    marginLeft: 16,
  },

  circleOne: {
    width: 150,
    height: 150,
    backgroundColor: "#485065",
    borderRadius: 999,
    position: "absolute",
    top: 16,
    right: 16,
  },
  circleTwo: {
    width: 100,
    height: 100,
    backgroundColor: "#313E60",
    borderRadius: 999,
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  circleThree: {
    width: 50,
    height: 50,
    backgroundColor: "#3E4E75",
    borderRadius: 999,
    position: "absolute",
    bottom: 16,
    left: 16,
  },
});
