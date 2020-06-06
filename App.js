import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/appbar';
import MemoList from './src/components/MemoList';
import CircleBotton from './src/elements/CircleButton'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    shadowColor: '#000'
  },
});
