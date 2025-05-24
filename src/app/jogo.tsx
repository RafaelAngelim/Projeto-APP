import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function JogoSenha() {
  interface Tentativa {
    palpite: string;
    bulls: number;
    cows: number;
    tentativaNum: number;
  }
  const [numeroSecreto, setNumeroSecreto] = useState("");
  const [palpite, setPalpite] = useState("");
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);
  const [showSenha, setShowSenha] = useState(false);
  const [showAcertou, setShowAcertou] = useState(false);

  useEffect(() => {
    reiniciarJogo();
  }, []);

  const gerarNumeroSecreto = () => {
    const digitos: string[] = [];
    while (digitos.length < 4) {
      const numero = Math.floor(Math.random() * 10).toString();
      if (!digitos.includes(numero)) {
        digitos.push(numero);
      }
    }
    return digitos.join("");
  };

  const verificarTentativa = () => {
    if (!/^\d{4}$/.test(palpite)) {
      Alert.alert("Ops!", "Digite exatamente 4 números diferentes!");
      return;
    }
    if (tentativas.length >= 10) {
      Alert.alert("Game Over!", "Você atingiu o limite de tentativas!");
      return;
    }
    if (new Set(palpite).size !== 4) {
      Alert.alert("Atenção!", "Não pode repetir dígitos!");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    const resultado = {
      palpite,
      bulls,
      cows,
      tentativaNum: tentativas.length + 1,
    };

    setTentativas([resultado, ...tentativas]);
    setTentativasRestantes(10 - (tentativas.length + 1));
    setPalpite("");

    if (bulls === 4) {
      setShowAcertou(true);
      setTimeout(() => {
        reiniciarJogo(false);
      }, 1500);
    } else if (tentativas.length + 1 === 10) {
      Alert.alert("Fim de jogo", `A senha era: ${numeroSecreto}`);
    }
  };

  // showAlert: se true, mostra o Alert padrão de novo jogo
  const reiniciarJogo = (showAlert = true) => {
    const novoNumero = gerarNumeroSecreto();
    setNumeroSecreto(novoNumero);
    setTentativas([]);
    setTentativasRestantes(10);
    setPalpite("");
    setShowSenha(false);
    if (showAlert) {
      Alert.alert("Novo Jogo!", "Uma nova senha foi gerada. Boa sorte!");
    }
  };

  const mostrarSenha = () => {
    setShowSenha(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Caixa de regras */}
      <View style={styles.rulesBox}>
        <Text style={styles.rulesTitle}>Como jogar Bulls & Cows?</Text>
        <Text style={styles.rulesText}>
          O objetivo é descobrir a senha secreta de 4 dígitos, todos diferentes.{"\n"}
          • Bulls 🐂: dígitos certos no lugar certo.{"\n"}
          • Cows 🐄: dígitos certos no lugar errado.{"\n"}
          Você tem 10 tentativas. Boa sorte!
        </Text>
      </View>

      <View style={styles.gameBox}>
        <Text style={styles.title}>🔐 Bulls & Cows</Text>
        <Text style={styles.text}>
          Tentativas restantes: <Text style={styles.bold}>{tentativasRestantes}</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={palpite}
          onChangeText={setPalpite}
          placeholder="Ex: 1234"
          keyboardType="numeric"
          maxLength={4}
          placeholderTextColor="#b8c1ec"
        />

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.btnPrimary} onPress={verificarTentativa}>
            <Text style={styles.btnText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondary} onPress={() => reiniciarJogo()}>
            <Text style={styles.btnText}>Recomeçar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnShow} onPress={mostrarSenha}>
            <FontAwesome name="eye" size={20} color="#232946" />
          </TouchableOpacity>
        </View>

        <View style={styles.attemptsBox}>
          {tentativas.map((item, index) => (
            <View key={index} style={styles.attemptItem}>
              <View style={styles.attemptRow}>
                <Text style={styles.attemptText}>
                  #{item.tentativaNum} - {item.palpite}
                </Text>
                <Text style={styles.bulls}>🐂 {item.bulls}</Text>
                <Text style={styles.cows}>🐄 {item.cows}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Modal para mostrar a senha */}
      <Modal
        visible={showSenha}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSenha(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Senha Secreta</Text>
            <Text style={styles.modalSenha}>{numeroSecreto}</Text>
            <TouchableOpacity style={styles.modalBtn} onPress={() => setShowSenha(false)}>
              <Text style={styles.modalBtnText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de acerto */}
      <Modal
        visible={showAcertou}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAcertou(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>🎉 Parabéns!</Text>
            <Text style={styles.modalSenha}>Você acertou!</Text>
            <Text style={styles.rulesText}>se quiser, jogue novamente</Text>
            <TouchableOpacity style={styles.modalBtn} onPress={() => setShowAcertou(false)}>
              <Text style={styles.modalBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a2a",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 30,
  },
  rulesBox: {
    backgroundColor: "#232946",
    width: "95%",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  rulesTitle: {
    color: "#eebbc3",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 6,
    textAlign: "center",
  },
  rulesText: {
    color: "#b8c1ec",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  gameBox: {
    backgroundColor: "#232946cc",
    width: "95%",
    padding: 28,
    borderRadius: 24,
    marginTop: 0,
    shadowColor: "#eebbc3",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 4,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#eebbc3",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#b8c1ec",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "#fffffe",
  },
  input: {
    height: 48,
    borderColor: "#eebbc3",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    fontSize: 18,
    marginBottom: 18,
    backgroundColor: "#232946",
    color: "#fffffe",
    width: "80%",
    textAlign: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    gap: 10,
    width: "100%",
  },
  btnPrimary: {
    backgroundColor: "#eebbc3",
    padding: 13,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 2,
  },
  btnSecondary: {
    backgroundColor: "#b8c1ec",
    padding: 13,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 2,
  },
  btnShow: {
    backgroundColor: "#fffffe",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    marginHorizontal: 2,
  },
  btnText: {
    color: "#232946",
    fontWeight: "bold",
  },
  attemptsBox: {
    width: "100%",
    marginTop: 10,
    gap: 8,
  },
  attemptItem: {
    backgroundColor: "#232946",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eebbc3",
    marginBottom: 2,
  },
  attemptRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  attemptText: {
    color: "#b8c1ec",
    fontSize: 16,
    flex: 1,
  },
  bulls: {
    color: "#10B981",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  cows: {
    color: "#f59e0b",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#232946",
    padding: 28,
    borderRadius: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    minWidth: 220,
  },
  modalTitle: {
    color: "#eebbc3",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  modalSenha: {
    color: "#b8c1ec",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 18,
    letterSpacing: 4,
  },
  modalBtn: {
    backgroundColor: "#eebbc3",
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  modalBtnText: {
    color: "#232946",
    fontWeight: "bold",
    fontSize: 16,
  },
});