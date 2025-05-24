import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Projetos() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>💻 Projetos em Destaque</Text>
      <View style={styles.projectsGrid}>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Análise de algoritmos</Text>
          <Text style={styles.projectDesc}>
            Um projeto de análise de algoritmos de ordenação em Python, com interface gráfica.
          </Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL("https://github.com/RafaelAngelim/LELEO-Arvores/blob/main/projeto/projeto-ordenacao.py")}
          >
            <Ionicons name="logo-github" size={22} color="#eebbc3" />
            <Text style={styles.linkText}>Ver no GitHub</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>APK de totem de auto atendimento</Text>
          <Text style={styles.projectDesc}>
            Projeto de confecção de um apk de totem de auto atendimento par auma loja de açai.
          </Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL("https://github.com/Dudubraga/Lounge-Acai")}
          >
            <Ionicons name="logo-github" size={22} color="#eebbc3" />
            <Text style={styles.linkText}>Ver no GitHub</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Analisador</Text>
          <Text style={styles.projectDesc}>
            Criação de um analisador sintático e lexico em python 
          </Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL("https://github.com/RafaelAngelim/compiladores")}
          >
            <Ionicons name="logo-github" size={22} color="#eebbc3" />
            <Text style={styles.linkText}>Ver no GitHub</Text>
          </TouchableOpacity>
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
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eebbc3",
    textAlign: "center",
    marginTop: 38,
    marginBottom: 18,
  },
  projectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 18,
    width: "95%",
  },
  projectCard: {
    backgroundColor: "#232946",
    width: "45%",
    padding: 18,
    borderRadius: 14,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 6,
    textAlign: "center",
  },
  projectDesc: {
    fontSize: 13,
    color: "#b8c1ec",
    lineHeight: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  linkBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#393d5b",
    padding: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  linkText: {
    color: "#eebbc3",
    fontWeight: "bold",
    fontSize: 14,
  },
});