import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Api from './src/services/Api';

export default function App(){

  const [cep, setCep] = useState('')

  return( 
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.area}>
        <Text style={styles.areaText}>Digite o cep desejado</Text>
      </View>

      <View style={styles.areaInput}>
        <TextInput
        style={styles.input} placeholder='EX : 45980000'
        value={cep} onChangeText={(text) => setCep(text)}
        keyboardType='numeric'
      />
      </View>

      <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.btn, , {backgroundColor: '#ff1a1a'}]}>
            <Text style={styles.textbtn}>BUSCAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, {backgroundColor: '#1a1aff'}]}>
            <Text style={styles.textbtn}>LiMPAR</Text>
          </TouchableOpacity>  
      </View>

      <View style={styles.areaResultado}>
        <Text style={styles.resultado}>CEP: 45980000</Text>
        <Text style={styles.resultado}>LOGRADOURO: 45980000</Text>
        <Text style={styles.resultado}>CIDADE: 45980000</Text>
        <Text style={styles.resultado}>ESTADO: 45980000</Text>
        <Text style={styles.resultado}>CEP: 45980000</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  area:{
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  areaText:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  areaInput:{
    justifyContent:'center',
    alignItems: 'center'
  },
  input:{
    width: '90%',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    elevation: 1,
    padding: 10,
    fontSize: 18
  },
  buttonArea:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  btn:{
    padding: 10,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20
  },
  textbtn:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
  areaResultado:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultado:{
    fontSize: 22,
    
  }
})