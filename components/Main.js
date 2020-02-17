import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { socketConnect } from '../actions';
import ClickButton from './ClickButton';
import SocketHandler from '../util/SocketHandler';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.socketConnect();
    }
    componentDidUpdate() {
        console.log(this.props.joined, this.props.points);
    }

    handleClick() {
        SocketHandler.click(this.props.socket);
    }

    render() {
        return (
            <View style={styles.container}>
                <ClickButton handleClick={this.handleClick.bind(this)}/>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center"
    }
});

const mapStateToProps = (state) => {
    return {
        socket: state.game.socket,
        points: state.game.points,
        connecting: state.game.connecting,
        connected: state.game.connected,
        joined: state.game.joined,
        ask_retry: state.game.ask_retry
    };
};

export default connect(mapStateToProps, { socketConnect })(Main);