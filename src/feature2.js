import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { Component } from 'react'

import styles from "./styles"
import DATA from "./feature2Data"

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image}/>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Feature2Screen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.Name} image={item.Image} />

  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        
      />
    </SafeAreaView>
  );
}

export default Feature2Screen