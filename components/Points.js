import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Points extends Component {
    constructor(props) {
        super(props);
    }
    renderBubbles() {
        let bubbles = [];
        for(let i = 0; i<this.props.points; i++) {
            bubbles.push(<View style={styles.bubble}></View>)
        }
        return bubbles;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Your points ({this.props.points})</Text>
                <View style={styles.bubbles}>
                    {this.renderBubbles()}
                </View>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 250,
        marginTop: 50
    },
    title: {
        color: "#fff",
        fontSize: 20
    },
    bubbles: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    bubble: {
        width: 8,
        height: 8,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#fff"
    }
});

export default Points;