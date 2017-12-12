import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // 处理数据源
        global.navigation = this.props.navigation;
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'MainPage' })
            ]
        })
        global.navigation.dispatch(resetAction)
    }

    render() {
        let { navigate } = this.props.navigation
        return (
            <Button title="click"
                onPress={
                    () => navigate('MainPage')
                }
            />
        );
    }
}

export default Welcome