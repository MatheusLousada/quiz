import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/signin';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setContextEmail } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => { 
    if (email.trim() === "" || password.trim() === "") {
      alert("Os campos e-mail e senha são obrigatórios");
      return;
    }
    
    setContextEmail(email);
    navigation.navigate('Questions')
  }
  
  return (
    <View style={styles.container}>
      <Animatable.View animation={"fadeInLeft"} delay={100} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation={"fadeInUp"} delay={800} style={styles.containerForm}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </Animatable.View>
      <Animatable.View delay={800} animation='fadeInUp' style={styles.containerButtons}>
        <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleLogin}
        >
            <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}
