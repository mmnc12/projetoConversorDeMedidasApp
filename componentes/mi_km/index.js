import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Text } from 'react-native';
import estilo from '../../assets/estilos';

import InputConversao from '../inputConversao';
import ResultadoConversao from '../resultadoConversao';

import background from '../../assets/background_b.jpeg';

export default function MilhaXQuilometros() {
  const [ quilometro, setQuilometro ] = useState(0);

  const converteKmParaMi = (milhas) => {
   
    const resultado = parseFloat(milhas * 1.6);
    setQuilometro(isNaN(resultado) ? 0 : resultado.toFixed(2));
  };

  return(
    <SafeAreaView style={estilo.fundo}>
      <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
        <InputConversao 
          titulo='Conversão de milhas em quilômetros' 
          medida='Milhas'
          funcaoTextoAuterado = { valorInput => converteKmParaMi(valorInput)}
        />
        <ResultadoConversao  
          medidaResultado='Quilômetros'
          resultado={quilometro} 
        />
      </ImageBackground>
    </SafeAreaView>
  )
}