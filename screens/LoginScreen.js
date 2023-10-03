import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useEffect } from 'react'

const users = [{
    name: 'admin',
    password: 'admin'
}, {
    name: 'user01',
    password: '123456'
}, {
    name: 'user02',
    password: '12345678'
}]
export default function LoginScreen() {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        users.forEach((item) => {
            if(item.name === name && item.password === password) {
                alert('Login success')
            }
        })

    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
       <View style={{padding: 15}}>
        <TextInput placeholder='Name' style={styles.txtName} onChangeText={(e) => setName(e)}>
        </TextInput>
        <TextInput placeholder='Password' style={styles.txtPassword} onChangeText={(e) => setPassword(e)}></TextInput>
        <Button title='Login' color={'#060000'} onPress={handleLogin}></Button>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 45}}>Forgot your password?</Text>        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 82,
    },
    txtName: {
        backgroundColor: '#FFFFFF',
        height: 54,
        marginBottom: 20,
        paddingLeft: 15,
    },
    txtPassword : {
        backgroundColor: '#FFFFFF',
        height: 54,
        marginBottom: 59,
        paddingLeft: 15,
    }
})