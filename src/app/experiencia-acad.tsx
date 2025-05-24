import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExperienciaAcad() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.timeline}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineCard}>
          <Text style={styles.title}>Intensivo De Power BI</Text>
          <Text style={styles.text}>
            Hashtag treinamentos
          </Text>
        </View>
        <View style={styles.timelineDot} />
        <View style={styles.timelineCard}>
          <Text style={styles.title}>Curso de Python aplicado a data science</Text>
          <Text style={styles.text}>
            Alura
          </Text>
        </View>
        <View style={styles.timelineDot} />
        <View style={styles.timelineCard}>
          <Text style={styles.title}>Maratona de Programação</Text>
          <Text style={styles.text}>
            Participação durante dois anos em um grupo de programação competitiva
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a2a",
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  timeline: {
    width: "90%",
    alignItems: "center",
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#eebbc3",
    marginVertical: 10,
  },
  timelineCard: {
    backgroundColor: "#232946",
    width: "100%",
    padding: 22,
    borderRadius: 16,
    marginVertical: 6,
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 6,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    color: "#b8c1ec",
    lineHeight: 22,
    textAlign: "center",
  },
});