import React from 'react';
import { View, Text, InputText } from 'react-native';
import estilos from '../../assets/estilos';
import estilo from './estilos';

export default function ResultadoConversao(props) {
  return (
    <View style={estilos.area}>
      <Text style={estilo.titulo}>{props.resultado}</Text>
      <Text style={estilo.medida}>{props.medidaResultado}</Text>
    </View>
  )
}