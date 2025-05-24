import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.profileBox}>
        <Image
          source={require("../../assets/images/pfp.jpg")}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rafael Viana Angelim</Text>
          <Text style={styles.subtitle}>Estudante de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP)</Text>
        </View>
      </View>

      <View style={styles.sectionRow}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.sectionText}>
            Sou Rafael Viana Angelim, estudante de Ciências da Computação do quinto período na Universidade Católica de Pernambuco, onde desenvolvi uma sólida base em conteúdos como: SQL, Power BI, Excel, Python, CPP, Metodologias Ágeis... aliados à cursos e livros. Além disso, participei de programas de extensão, como o de programação competitiva, onde refinei minhas habilidades em resolução de problemas complexos e otimização de algoritmos.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologias</Text>
          <Text style={styles.sectionText}>
            • C++ {"\n"}
            • Python {"\n"}
            • React Native {"\n"}
            • Java {"\n"}
            • Power BI
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fale Comigo</Text>
        <View style={styles.socials}>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => Linking.openURL("https://github.com/RafaelAngelim")}
          >
            <FontAwesome name="github" size={24} color="#eebbc3" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => Linking.openURL("https://linkedin.com/in/RafaelAngelim")}
          >
            <FontAwesome name="linkedin" size={24} color="#b8c1ec" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => Linking.openURL("mailto:rafaelvangelim@gmail.com")}
          >
            <MaterialIcons name="email" size={24} color="#fffffe" />
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
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232946cc",
    borderRadius: 24,
    padding: 18,
    marginTop: 38,
    marginBottom: 18,
    width: "90%",
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#eebbc3",
    marginRight: 18,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#eebbc3",
    letterSpacing: 1,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 15,
    color: "#b8c1ec",
    marginTop: 6,
    fontStyle: "italic",
    textAlign: "left",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    width: "90%",
  },
  section: {
    backgroundColor: "#232946",
    flex: 1,
    padding: 18,
    borderRadius: 14,
    marginTop: 8,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 8,
    textAlign: "center",
  },
  sectionText: {
    fontSize: 14,
    color: "#b8c1ec",
    lineHeight: 20,
    textAlign: "center",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 22,
    marginTop: 12,
  },
  socialBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#393d5b",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 4,
  },
});