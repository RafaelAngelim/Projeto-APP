import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Bem-vindo!</Text>
        
      </View>
      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre o App</Text>
          <Text style={styles.cardText}>
Este aplicativo é um portfólio interativo desenvolvido em React Native, pensado para apresentar de forma moderna e dinâmica minha trajetória acadêmica, projetos, experiências e habilidades em tecnologia. Utilizando Expo Router, o app oferece navegação entre diferentes seções, como Home, Sobre, Experiência Acadêmica, Projetos e um minigame de lógica (Bulls & Cows).           </Text>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a2a",
    flex: 1,
    padding: 0,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 30,
  },
  hero: {
    backgroundColor: "#232946cc",
    width: "90%",
    padding: 32,
    borderRadius: 24,
    marginTop: 22,
    marginBottom: 18,
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 10,
  },
  heroText: {
    fontSize: 17,
    color: "#b8c1ec",
    lineHeight: 26,
    textAlign: "center",
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    width: "90%",
  },
  card: {
    backgroundColor: "#232946",
    flex: 1,
    padding: 22,
    borderRadius: 18,
    marginHorizontal: 6,
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 8,
    textAlign: "center",
  },
  cardText: {
    fontSize: 15,
    color: "#b8c1ec",
    lineHeight: 22,
    textAlign: "center",
  },
});