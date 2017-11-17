import React, { Component } from 'react';
import { Text, Button, Image, View, StyleSheet, ScrollView, TouchableWithoutFeedback, PanResponder, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation'
import Home from './home/index'
import Plan from './plan/index'
import Store from './store/index'
import User from './user/index'
import theme from '../style'


const style = StyleSheet.create({
    mainContainer: {

    }
});

function getTabItem(tintColor, focused, img, activeImg) {
    return (<Image source={focused ? activeImg : img}
        style={{
            width: 26, height: 26
        }}></Image >)
}

const Main = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ tintColor, focused }) => getTabItem(tintColor, focused, require('../images/home/sy.png'), require('../images/home/sy2.png'))
            }
        },
        Plan: {
            screen: Plan,
            navigationOptions: {
                tabBarLabel: '排期',
                tabBarIcon: ({ tintColor, focused }) => getTabItem(tintColor, focused, require('../images/home/pq.png'), require('../images/home/pq2.png'))
            }
        },
        Store: {
            screen: Store,
            navigationOptions: {
                tabBarLabel: '卖品',
                tabBarIcon: ({ tintColor, focused }) => getTabItem(tintColor, focused, require('../images/home/mp.png'), require('../images/home/mp2.png'))
            }
        },
        User: {
            screen: User,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ tintColor, focused }) => getTabItem(tintColor, focused, require('../images/home/me.png'), require('../images/home/me2.png'))
            }
        }
    },
    {
        tabBarPosition: 'bottom',//必须设置，Android默认top
        animationEnabled: true,
        swipeEnabled: false,
        lazy: true,
        backBehavior: false,
        tabBarOptions: {
            activeTintColor: theme.globalStyle.primaryColor,
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true,//Android默认不显示
            indicatorStyle: {
                height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#ffffff', // TabBar 背景色
                // height: 50,
            },
            labelStyle: {
                fontSize: 10, // 文字大小
                paddingTop: 3,
                paddingBottom: 3,
                margin: 0,
            },
            tabStyle: {
                marginTop: 5,
                height: 45,
            },
        },
    });

export default Main