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
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';


const App: () => React$Node = () => {
  const [count, setCount] = useState(0);
  // const [tensValue, setTens] = useState(0)
  // const [atTen, setIsTen] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={styles.heading}>Simple Counter</Text>
        </View>
        <View style={styles.counterSection}>
          <TouchableOpacity 
            onPress={()=> addOne(count, setCount)}
            style={styles.clickableCountButton}
          >
          <Text style={styles.count}>{count}</Text>
          </TouchableOpacity>
          {/* {atTen && <View>{tensValue + '0'}</View>} */}
        </View>
      </SafeAreaView>
    </>
  );
};

const addOne = (count, setCount) => {
  setCount(count+=1)
  // if (count % 10 === 0){
  //   whenTen(count,setCount);
  // } else {
  //   setCount(count);
  // }
}

// const whenTen = (count, setCount) => {
//   let tensValue = 0;
//   tensValue +=1;
//   setCount(count=0);
//   return <View>{tensValue + '0'}</View>

// }

const styles = StyleSheet.create({
  heading: {
    color: 'pink',
    fontSize: 32,
    fontWeight: '600',
    // margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'beige'
  },
  counterSection: {
    flex: 5,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  clickableCountButton: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'beige',
    borderColor: 'darkred',
    borderWidth: 1,
    // borderRadius: 100
    
  },
  count: {
    textAlign: 'center',
    fontSize: 56,
    color: 'darkred',
    fontWeight: '400',
  },
  countView: {
    borderRadius: 50
  },
});

export default App;
