import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

import Api from './src/services/Api';


export default function App() {

  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textCep}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input} placeholder='Ex: 45980000'
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#1d75cd'}]}>
            <Text style={styles.textBtn}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, {backgroundColor: '#cd3e1d'}]}>
            <Text style={styles.textBtn}>Buscar</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.textResultado}>CEP: 45980000</Text>
        <Text style={styles.textResultado}>Logradouro: 45980000</Text>
        <Text style={styles.textResultado}>Bairro: Centro</Text>
        <Text style={styles.textResultado}>Cidade: Sao Paulo</Text>
        <Text style={styles.textResultado}>Estado: SP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  view:{
    alignItems: 'center'
  },
  textCep:{
    marginTop: 10,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    width: '90%',
    elevation: 1
  },
  buttonArea:{
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5
  },
  textBtn:{
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textResultado:{
    fontSize: 22
  }
});
