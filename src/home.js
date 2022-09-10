import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image, Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from "./styles"
import krypton from "../assets/krypton.jpg"


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={krypton} style={styles.image}/>
      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Feature 1 - Allies')}> 
          <Text style={styles.buttonText}> Feature 1 - Allies </Text>     
      </TouchableOpacity>

      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Feature 2 - Enemies')}> 
          <Text style={styles.buttonText}> Feature 2 - Enemies </Text>     
      </TouchableOpacity>

    </View>
  );
}

export default HomeScreen