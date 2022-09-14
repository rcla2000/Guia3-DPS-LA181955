import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';
import datos from './datos';
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Header titulo="Comidas típicas de El Salvador" />
      <ScrollView style={styles.scroll}>
        { datos.map((i) => {
            return (
              <Card key={i.id}>
                <Card.Title>{i.comida}</Card.Title>
                <Card.Divider />
                <View style={styles.contenido}>
                  <Image source={i.imagen} style={styles.imagen} />
                  <Text style={styles.subtitulo}>Ingredientes: </Text>
                  <Text style={styles.texto}>{i.ingredientes}</Text>
                </View>
              </Card>
            );
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#a8dadc'
  },
  texto: {
    color: '#1d3557',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'justify'
  },
  imagen: {
    width: 250,
    height: 200,
    borderRadius: 4
  },
  contenido: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    marginBottom: 15
  },
  subtitulo: {
    fontSize: 16,
    color: '#1d3557',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 0
  }
});

export default App;