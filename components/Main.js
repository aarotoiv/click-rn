import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {

    }
    componentDidMount() {
        this.props.socketConnect();
    }
    componentDidUpdate() {
        
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
    }
});

const mapStateToProps = (state) => {
    return {
    
    };
};

export default connect(mapStateToProps, { socketConnect })(Main);