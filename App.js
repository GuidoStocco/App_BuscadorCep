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

      <View>

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
  }
});
