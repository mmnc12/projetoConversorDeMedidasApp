import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  
  titulo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff'
  },
  areaInput: {
    flexDirection: 'row',
    fleWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  medida: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#8eed90ff',
    borderRadius: 10,
    width: 130,
    textAlign: 'center',
    color: '#000'
    
  },
  input: {
    paddingLeft: 10,
    backgroundColor: '#fff',
    width: 180,
    marginLeft: 20,
    borderRadius: 10,
    flexShrink: 1,
  }
});

export default estilo;