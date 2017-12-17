import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Text>{(new Date().getSeconds())}</Text>
                <Button
                    onPress={() => navigation.navigate('Details')}
                    title="Go to details"
                />
            </View>
        );
    }
}

class DetailsScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Text>{(new Date().getSeconds())}</Text>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Go to Home"
                />
            </View>
        );
    }
}

const NavigatorSetting = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
            tabBarLabel: 'Home',
            drawerLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>HomeIcon</Text>
            ),
            drawerIcon: ({ tintColor, focused }) => (
                <Text>HomeIcon</Text>
            ),
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
            tabBarLabel: 'Details',
            drawerLabel: 'Details',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>DetailsIcon</Text>
            ),
            drawerIcon: ({ tintColor, focused }) => (
                <Text>DetailsIcon</Text>
            ),
        },
    },
};

// const RootNavigator = StackNavigator(NavigatorSetting);
// const RootNavigator = TabNavigator(NavigatorSetting);
const RootNavigator = DrawerNavigator(NavigatorSetting);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default RootNavigator;
