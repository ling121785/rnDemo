import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import Header from '../common/header'
import { login, logout } from '../../actions/account'
class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '首页',
            tab: ['热映', '待映']
        }
    }

    _login() {
        this.props.dispatch(login())
    }


    render() {
        return (
            <View class="style.homeContainer">
                <Header tab={this.state.tab}></Header>
                <Button onPress={() => this._login()} title={'点我呀'} />
                <Text>home</Text>
                <Text>{this.props.status}</Text>
                <Text>{this.props.info ? this.props.info.account : ''}</Text>
                <Text>{this.props.info ? this.props.info.pwd : ''}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    homeContainer: {

    }
});

function select(store) {
    console.log("tttttttttttttttttt", store)
    return {
        status: store.account.status,
        info: store.account.info
    }
}

export default connect(select)(home)