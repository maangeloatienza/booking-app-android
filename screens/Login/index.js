import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlice'
import { COLOR } from './../../styles/color'
import { login } from '../../api'
import { 
	StatusBar, 
	StyleSheet, 
	Text, 
	TextInput, 
	Button, 
	ScrollView, 
	View, 
	TouchableOpacity 
} from 'react-native'
import { Separator } from '../../components/Separator'


export const Login = ({navigation})=> {
	const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onLogin = () => {
    console.log("CURRENT USERNAME: ",username)
    console.log("CURRENT PASSWORD: ",password)
    let response = login({
      username: username,
      password: password
    })
    console.log('LOGIN: ', response)
    if(response.success){
      dispatch(setUser(response.data))
      navigation.navigate('Restaurants')
    }
  }

return (
	<View style={styles.container}>
		<Text style={styles.pageHeader}>Login</Text>

		<TextInput 
			placeholder='Username'
			onChangeText={(newUsername)=>setUsername(newUsername)}
			style={styles.inputText}
			value={username}/>
		<TextInput 
			textContentType='password'
			placeholder='Password'
      secureTextEntry={true}
			onChangeText={(newPassword)=>setPassword(newPassword)}
			style={styles.inputText}
			value={password}/>
		<Text style={styles.forgotPassword}>Forgot password?</Text>
		<Text style={styles.colorWhite}>{username}</Text>
		<Text style={styles.colorWhite}>{password}</Text>
		<TouchableOpacity 
			style={styles.loginBtn}
      onPress={(e)=> {
        e.preventDefault()
        onLogin()
      }}
		>
			<Text style={styles.colorWhite}>Login</Text>
		</TouchableOpacity>

		<Separator 
      stylesProp={styles.divider} 
      text='OR'
    />
		
		<TouchableOpacity 
			style={styles.signUpBtn}
      onPress={()=> navigation.navigate('SignUp')}
		>
			<Text style={styles.colorWhite}>Sign Up</Text>
		</TouchableOpacity>
	</View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR['primary-bg-color'],
    alignItems: 'start',
    justifyContent: 'center',
    alignContent: 'space-between',
    padding: 40
  },
  colorWhite: {
    color: COLOR['primary-color']
  },  
  pageHeader : {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 80
  }, 
  inputText: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    minWidth : 100,
    marginTop: 20,
    paddingLeft: 30,
    height: 45,
    fontSize: 14,
    color: COLOR['secondary-color']
  },
  forgotPassword : {
    textAlign: 'right',
    color: COLOR['primary-color'],
    padding: 0,
    marginBottom: 20
  },  
  loginBtn: {
    marginTop: 20,
    marginBottom: 15,
    height: 45,
    backgroundColor: COLOR['secondary-bg-color'],
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpBtn: {
    marginTop: 15,
    height: 45,
    backgroundColor: COLOR['tersiary-bg-color'],
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  divider: {
    borderColor: COLOR['primary-color'],
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 20,
  }
})
