import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ titulo} ) => (
    <View style={styles.header}>
        <Text style={styles.titulo}>{titulo}</Text>
    </View>
);

const styles = StyleSheet.create({
   header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#e63946'
   },
   titulo: {
    color: '#f1faee',
    fontSize: 20,
    textAlign: 'center'
   }
});

export default Header;