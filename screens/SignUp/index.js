import React from 'react'
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { RatedCard } from '../../components/RatedCard'

export const SignUp = ({navigation})=> {

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeader}>Create Account</Text>
      <TextInput 
        placeholder='Full Name'
        style={styles.inputText}
      />
      <TextInput 
        placeholder='Email'
        style={styles.inputText}
      />
      <TextInput 
        placeholder='Password'
        textContentType='password'
        secureTextEntry={true}
        style={styles.inputText}
      />
      <TextInput 
        placeholder='Confirm Password'
        textContentType='password'
        secureTextEntry={true}
        style={styles.inputText}
      />
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Restaurants')}
        style={styles.signUpBtn}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#26292B',
    padding: 40
  },
  pageHeader : {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 80
  },
  inputText: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    minWidth : 100,
    marginTop: 20,
    paddingLeft: 30,
    height: 45,
    fontSize: 14,
    color: '#393939'
  },
  signUpBtn: {
    marginTop: 40,
    height: 45,
    backgroundColor: '#5F7ADB',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
})