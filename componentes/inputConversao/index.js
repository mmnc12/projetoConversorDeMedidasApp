import React from 'react';
import { TextInput, Text, View } from 'react-native';

import estilo from './estilos';
import estilos from '../../assets/estilos';
export default function InputConversao(props) {
  return (
    <View style={estilos.area}>
      <Text style={estilo.titulo}>{props.titulo}</Text>
      <View style={estilo.areaInput}>
        <Text style={estilo.medida}>{props.medida}</Text>
        <TextInput 
          style={estilo.input} 
          keyboardType='decimal-pad'
          defaultValue='0'
          onChangeText={props.funcaoTextoAuterado}
        />
      </View>
    </View>
  )
}