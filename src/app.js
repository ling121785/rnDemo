import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Welcome from './pages/welcome'
import MainPage from './pages/main'

import configureStore from './stores'
import { Provider } from 'react-redux'


const App = StackNavigator(
    {
        MainPage: { screen: MainPage },
        Welcome: { screen: Welcome }

    },
    {
        navigationOptions: {
            header: null,
        }
    });

const store = configureStore()

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}