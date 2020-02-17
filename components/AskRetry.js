import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


class AskRetry extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                <Text style={styles.infoText}>
                    You're out of points. Click the button to retry.
                </Text>
                <TouchableOpacity style={styles.clickButton} onPress={this.props.doRetry}>
                    <Text style={styles.clickButtonText}>
                        RETRY
                    </Text>
                </TouchableOpacity>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    infoText: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
    },
    clickButton: {
        width: 250,
        height: 80,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginTop:50
    },
    clickButtonText: {
        fontSize: 30
    }
});

export default AskRetry;