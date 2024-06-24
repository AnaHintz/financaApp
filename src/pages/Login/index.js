import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/styles";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(""); 
  
    const handleLogin = () => {
    
      if (!email.trim() || !senha.trim()) {
        setError("Por favor, preencha todos os campos.");
  
        return;
      }
      else {

        navigation.navigate("Home");
        setError("Credenciais inválidas. Por favor, tente novamente.");
      }
    };
  
    return (
        <View style={styles.container}>
          <View style={styles.container_inner}>
            <Text variant="titleLarge">Página de Login!</Text>
            {/* Exibir mensagem de erro, se houver */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}        <TextInput
             activeUnderlineColor="blueviolet"
              label={"Email"}
              placeholder={"Digite seu e-mail"}
              value={email}
              onChangeText={setEmail}
            />
              <TextInput
        
        activeUnderlineColor="blueviolet"
               label={"Senha"}
               placeholder={"Digite sua Senha"}
               value={senha}
               onChangeText={setSenha}
               style={styles.esp}
               secureTextEntry // Para esconder a senha
             />
<Button mode="contained" onPress={handleLogin} buttonColor="blueviolet">
          Login
        </Button>
        <Button onPress={() => navigation.navigate("Register")} textColor="blueviolet">
          Fazer Cadastro
        </Button>
      </View>
    </View>
  );
}
