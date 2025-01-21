import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function LoginScreen() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
           resizeMode="contain"
        />
      </View>

      {/* Formulaire */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Numéro de téléphone ou Adresse email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton de connexion */}
      <TouchableOpacity style={styles.loginButton} onPress={()=>{navigation.navigate('UserSpace')}}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Connexion avec Google */}
      <Text style={styles.orText}>Se connecter avec</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.googleIcon}
        />
      </TouchableOpacity>

      {/* Créer un compte */}
      <TouchableOpacity>
        <Text style={styles.createAccountText}>Pas encore membre? <Text style={styles.createAccount}>Créer un compte</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
 
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  forgotPasswordText: {
    color: '#FF000D',
    fontWeight:'bold',
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 24, 
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#71A8E0',
    paddingVertical: 15,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#1A1B2D',
    fontWeight:600,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.64,
    letterSpacing: -0.01,
    textAlign: 'center',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#FCFCFC',
    borderWidth: 2,
    borderColor: '#EFEFEF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  createAccountText: {
    color: '#9A9FA5',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: -0.01,
  },
  createAccount: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.01,
    color: '#FF000D',

  },
  label:{
    color:'#1A1D1F',
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 24, 
    letterSpacing: -0.15, 
  },
  googleIcon:{
    height:20,
    width:20
  }
});
