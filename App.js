/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        {/* <View style={styles.counterSection}> */}
          <TouchableOpacity 
            onPress={()=> addOne(count, setCount)}
            style={styles.clickableCountButton}
          >
            <Text style={styles.countText}>{count}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', flex: .05}}>
            <View style={{flex: 4}}/>
            <TouchableOpacity 
              onPress={() => {setCount(0)}}
              style={styles.resetBtn}
            >
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <View style={{flex: .2}}/>
        </View>
      </SafeAreaView>
    </>
  );
};

const addOne = (count, setCount) => {
  setCount(count+=1)
}


const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    backgroundColor: '#472d30'
  },
  clickableCountButton: {
    flex: 1,
    justifyContent: 'center',
    
  },
  countText: {
    textAlign: 'center',
    fontSize: 100,
    color: 'beige',
    fontWeight: '400',
  },
  resetBtn: {
    flex: 1.3,
    backgroundColor: '#623d46',
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: '#402f39',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',

  },
  resetText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '400',
    color: 'beige',
    textAlign: 'center'
  },
});

export default App;
