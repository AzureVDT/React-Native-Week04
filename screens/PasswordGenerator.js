import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function PasswordGenerator() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{textTransform: 'uppercase', fontSize: 25, fontWeight: 'bold', color:'white', marginBottom:33}}>Password Generator</Text>
        <TextInput style={styles.input}></TextInput>
        <View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 19,
        backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0.00) 87.36%)'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23235B',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        paddingLeft: '12px',
        paddingRight: '12px',
    },
    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#151537',
        marginBottom: 47
    }
})