import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Text } from 'react-native';
import estilo from '../../assets/estilos';

import InputConversao from '../inputConversao';
import ResultadoConversao from '../resultadoConversao';

import background from '../../assets/background.jpg';

export default function QuilometrosXMilha() {

  const [ milhas, setMilhas ] = useState(0);

  const converteKmParaMi = (quilometros) => {
    const resultado = parseFloat(quilometros /1.6);
    setMilhas(isNaN(resultado) ? 0 : resultado);
  }

  return (
    <SafeAreaView style={estilo.fundo}>
      <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
        <InputConversao 
          titulo='Conversão de quilômetros para milhas' 
          medida='Quilômetros' 
          funcaoTextoAuterado = {valorInput => converteKmParaMi(valorInput)}
        />
        <ResultadoConversao 
          resultado={milhas}  
          medidaResultado='Milhas' /> 
      </ImageBackground>
    </SafeAreaView>
  )
}