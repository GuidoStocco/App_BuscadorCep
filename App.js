import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

import Api from './src/services/Api';


export default function App() {

  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text>Digite o cep desejado</Text>
        <TextInput
          style={styles.input} placeholder='Ex: 45980000'
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
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
  input:{

  }
});
