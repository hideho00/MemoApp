import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMOT</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoAddBotton}>
            <Text styles={styles.memoAddBottonTitle}>+</Text>
          </View>

        </View>
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
  memoAddBotton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 40,
    height: 40,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  memoAddBottonTitle: {
    fontSize: 24,
    width: 20,
    height: 20,
  },
  memoList: {
    backgroundColor: '#eee',
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff'
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 4,
    color: '#a2a2a2',
  },
  appbar:{
    position: 'absolute',
    top: 0,
    height: 60,
    left: 0,
    right: 0,
    height: 70,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
    },
    appbarTitle:{
      color: '#fff',
      fontSize: 18,
    }
});
