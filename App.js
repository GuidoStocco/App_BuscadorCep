import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Keyboard} from 'react-native';

import Api from './src/services/Api'

export default function App(){

    const [cep, setCep] = useState('')
    const inputRef = useRef(null);
    const [cepUser, setCepUser] = useState(null);

    async function buscar(){
        if(cep == ''){
            alert('Digite um Cep Válido!');
            setCep('');
            return;
        };

        try {
            const response = await Api.get(`/${cep}/json`)
            // console.log(response.data)
            setCepUser(response.data)
            Keyboard.dismiss();
        } catch (error) {
            alert('ERROR: ' + error)
        }

    }

    function limpar(){
        setCep('')
        // inputRef.current.focus(); TA DANDO ERROR (PROPRIEDADE NULL)
        setCepUser(null)
    }


    return(
        <SafeAreaView style={StyleSheet.container}>
            <View style={styles.view}>
                <Text style={styles.viewText}>Digite o cep desejado</Text>

                <TextInput
                    style={styles.input} placeholder='EX: 45980000'
                    value={cep} onChangeText={(text) => setCep(text)} keyboardType='numeric'
                />
            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={[styles.btn, {backgroundColor: '#ff1a1a'}]}
                    onPress={buscar}>
                    <Text style={styles.textBtn}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, {backgroundColor: '#0099ff'}]} 
                    onPress={limpar}>
                    <Text style={styles.textBtn}>Limpar</Text>
                </TouchableOpacity> 
            </View>

            {cepUser && 
                <View style={styles.resultado}>
                    <Text style={styles.textResultado}>CEP: {cepUser.cep}</Text>
                    <Text style={styles.textResultado}>LOGRADOURO: {cepUser.logradouro}</Text>
                    <Text style={styles.textResultado}>BAIRRO: {cepUser.bairro}</Text>
                    <Text style={styles.textResultado}>CIDADE: {cepUser.localidade}</Text>
                    <Text style={styles.textResultado}>ESTADO: {cepUser.uf}</Text>
                </View>}

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    view:{
        marginTop: 40,
        justifyContent:'center',
        alignItems: 'center'
    },
    viewText:{
        fontSize: 25,
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
        elevation: 1,
        
    },
    areaBtn:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    btn:{
        height: 50,
        padding: 10,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    textBtn:{
        color: '#fff',
        fontSize: 18
    },
    resultado:{
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResultado:{
        fontSize: 22,
        fontWeight: '500'
    }
})