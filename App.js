import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import PasswordGenerator from './screens/PasswordGenerator';

export default function App() {
    return ( 
        <>
            {/* <LoginScreen/> */}
            <PasswordGenerator/>
        </>
    );
}