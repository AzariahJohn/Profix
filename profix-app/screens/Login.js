import { KeyboardAvoidingView ,StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();
  const impng = require("../assets/Images/backg.png");


  useEffect(() => {
      if (auth.currentUser){
        navigation.navigate("Chat");
      } else {
        navigation.navigate("Login");
      }
  }, [])

  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.navigate("Chat");
      }).catch(error => {
          alert(error.message)
      }
    )
  }

  return (
    <ImageBackground
      style={styles.container}
      source={impng}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>PROFIX</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput 
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: '80%',
  },
  logoContainer: {
    width: "80%",
  },
  logoText: {
    fontSize: 40,
    marginBottom: 100,
    fontWeight: "800",
    textAlign: "center",
  },
  input: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#013955',
    paddingHorizontal: 15,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    width: '80%',
  },
  buttonText: {
    color: "white",
  }
})