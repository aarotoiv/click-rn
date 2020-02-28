import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

//the button itself, has the clickhandler passed as a prop

class ClickButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.clickButton} onPress={this.props.handleClick}>
                <Text style={styles.clickButtonText}>
                    Click me!
                </Text>
            </TouchableOpacity>
        );    
    }
}

const styles = StyleSheet.create({
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

export default ClickButton;