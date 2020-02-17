import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { socketConnect } from '../actions';
import ClickButton from './ClickButton';
import AskRetry from './AskRetry';
import Points from './Points';
import SocketHandler from '../util/SocketHandler';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.socketConnect();
    }
    componentDidUpdate() {
        console.log(this.props.joined, this.props.points, this.props.ask_retry);
    }

    handleClick() {
        SocketHandler.click(this.props.socket);
    }
    doRetry() {
        SocketHandler.retry(this.props.socket);
    }
    
    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );    
    }

    renderContent() {
        return this.props.joined && this.props.points < 1 && this.props.ask_retry ? 
        (
            <AskRetry doRetry={this.doRetry.bind(this)} />
        ) 
        :
        (
            <View>
                <ClickButton handleClick={this.handleClick.bind(this)} />
                <Points points={this.props.points} />
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