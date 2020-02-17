import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';


class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastHTP: null,
            messages: {}
        };
    }
    componentDidUpdate() {
        const { hitsTillPrize } = this.props;
        if(this.state.lastHTP != hitsTillPrize) {
            this.setState({lastHTP: hitsTillPrize});

            let messages = this.state.messages;
            
            const key = Math.random().toString(36).substring(7);
            messages[key] = {
                text: `${hitsTillPrize} clicks till next prize.`,
                fadeAnim: new Animated.Value(1),
                yAnim: new Animated.Value(0)
            };

            this.setState({messages});

            Animated.timing(
                this.state.messages[key].fadeAnim,
                {
                    toValue: 0,
                    duration: 1000
                }
            ).start();
            
            Animated.timing(
                this.state.messages[key].yAnim,
                {
                    toValue: 150,
                    duration: 1000
                }
            ).start();

            setTimeout(() => {
                let messages = this.state.messages;
                delete messages[key];
                this.setState({messages});
            }, 2000);
        }
    }
    renderBubbles() {
        let bubbles = [];
        for(let i = 0; i<this.props.points; i++) {
            bubbles.push(<View key={i} style={styles.bubble}></View>)
        }
        return bubbles;
    }
    renderMessages() {
        const keys = Object.keys(this.state.messages);
        const allMessages = Object.values(this.state.messages);
        let messages = [];
        for(let i = 0; i<allMessages.length; i++) {
            messages.push(<Animated.Text key={keys[i]} style={{...styles.message, opacity: allMessages[i].fadeAnim, bottom: allMessages[i].yAnim}}>{allMessages[i].text}</Animated.Text>)
        }   
        return messages;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Your points ({this.props.points})</Text>
                <View style={styles.bubbles}>
                    {this.renderBubbles()}
                </View>
                {this.renderMessages()}
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        flex:1,
        marginTop: 50,
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 10
    },
    bubbles: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        maxHeight: 300,
        overflow: "hidden"
    },
    bubble: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
        backgroundColor: "#fff"
    },
    message: {
        position: "absolute",
        fontSize: 20,
        color: "#fff",
        textAlign:"center"
    }
});

export default Points;