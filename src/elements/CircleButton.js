import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class CircleBotton extends React.Component {
    render(){
        return(){
            <View style={styles.CircleBotton}>
                <Text style={styles.CircleBottonTitle}>
                    {this.props.children}
                </Text>
            </View>
        };
    }
} 

const styles = StyleSheet.create({
    CircleBotton: {
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
    CircleBottonTitle: {
        fontSize: 24,
        width: 20,
        height: 20,
    },
});

export default CircleBotton;
