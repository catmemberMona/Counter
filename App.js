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
} from 'react-native';


const App: () => React$Node = () => {
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
        {/* </View> */}
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
    backgroundColor: '#472d30',
    justifyContent: 'center',
    
  },
  countText: {
    textAlign: 'center',
    fontSize: 100,
    color: 'beige',
    fontWeight: '400',
  },
});

export default App;
