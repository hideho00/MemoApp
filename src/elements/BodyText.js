import React from 'react';
import {StyleSheet, view, Text} from 'react-native';

class BodyText extends React.Componet {
  render() {
    return (
      <View>
        <Text style={styles.text}>Hello!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',

  },
});
export default BodyText;
