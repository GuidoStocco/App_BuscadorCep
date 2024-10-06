import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ToucheableOpacity, SafeAreaView} from 'react-native';

import Api from './src/services/Api'

export default function App(){

    const [cep, setCep] = useState('')

    return(
        <SafeAreaView style={StyleSheet.container}>
            <View style={styles.view}>
                <Text style={styles.viewText}>Digite o cep desejado</Text>

                <TextInput
                    style={styles.input} placeholder='EX: 45980000'
                    value={cep} onChangeText={(text) => setCep(text)} keyboardType='numeric'
                />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    view:{
        marginTop: 40,
        justifyContent:'center',
        alignItems: 'center'
    },
    viewText:{
        fontSize: 22,
        fontWeight: 'bold', 
        marginBottom: 18
    },
    input:{
        width: '90%',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 18,
        elevation: 1
    }
})