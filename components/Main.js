import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { socketConnect } from '../actions';
import ClickButton from './ClickButton';
import AskRetry from './AskRetry';
import Points from './Points';
import SocketHandler from '../util/SocketHandler';
import { Bubbles } from 'react-native-loader';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    //Attempt the socket connection at start
    componentDidMount() {
        this.props.socketConnect();
    }
    //Handle user click
    handleClick() {
        SocketHandler.click(this.props.socket);
    }
    //Handle retry
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
        return this.props.connecting || !this.props.joined ?
        (
            <Bubbles size={30} color="#FFF" />
        )
        :
        this.props.joined && this.props.points < 1 && this.props.ask_retry ? 
        (
            <AskRetry doRetry={this.doRetry.bind(this)} />
        ) 
        :
        (
            <View>
                <ClickButton handleClick={this.handleClick.bind(this)} />
                <Points points={this.props.points} hitsTillPrize={this.props.hitsTillPrize}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center"
    }
});

const mapStateToProps = (state) => {
    return {
        socket: state.game.socket,
        points: state.game.points,
        connecting: state.game.connecting,
        connected: state.game.connected,
        joined: state.game.joined,
        ask_retry: state.game.ask_retry,
        hitsTillPrize: state.game.hitsTillPrize
    };
};

export default connect(mapStateToProps, { socketConnect })(Main);