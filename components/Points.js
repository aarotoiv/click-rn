import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Points extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Your points({this.props.points})</Text>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 120,
        backgroundColor: "#fff"
    },
    title: {
        color: "#fff",
        fontSize: 20
    }
});

export default Points;