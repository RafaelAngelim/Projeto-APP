import React from "react";
import { Tabs } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Portfólio Mobile</Text>
      </View>
      <View style={styles.tabsContainer}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#232946ee",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderTopWidth: 0,
              height: 70,
              position: "absolute",
              left: 10,
              right: 10,
              bottom: 10,
              elevation: 20,
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: -2 },
            },
            tabBarActiveTintColor: "#eebbc3",
            tabBarInactiveTintColor: "#b8c1ec",
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 6,
            },
            tabBarIconStyle: {
              marginTop: 8,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: () => <FontAwesome name="rocket" size={26} />,
              title: "Início",
            }}
          />
          <Tabs.Screen
            name="sobre"
            options={{
              tabBarIcon: () => <MaterialIcons name="info" size={26} />,
              title: "Sobre",
            }}
          />
          <Tabs.Screen
            name="projetos"
            options={{
              tabBarIcon: () => <Ionicons name="code-slash" size={26} />,
              title: "Projetos",
            }}
          />
          <Tabs.Screen
            name="experiencia-acad"
            options={{
              tabBarIcon: () => <FontAwesome name="graduation-cap" size={26} />,
              title: "Acadêmico",
            }}
          />
          <Tabs.Screen
            name="jogo"
            options={{
              tabBarIcon: () => <FontAwesome name="gamepad" size={26} />,
              title: "Jogo",
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#181a2a",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232946ee",
    paddingTop: 48,
    paddingBottom: 18,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    zIndex: 2,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 16,
    marginRight: 18,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#eebbc3",
    letterSpacing: 1,
  },
  tabsContainer: {
    flex: 1,
    marginTop: 0,
  },
});