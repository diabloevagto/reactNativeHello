import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const params = this.props.navigation.state.params || {};
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>params.back: {params.back || 'no back'}</Text>
        <Text>{(new Date().getSeconds())}</Text>
        <Button
          onPress={() => navigation.navigate('Details', { a: 'from home', key: navigation.state.key })}
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
    const { params } = this.props.navigation.state;
    this.navigateAction = NavigationActions.setParams({
      key: params.key,
      params: { back: 'back from details' },
    })
    setTimeout(() => {
      if (!params.b)
        this.props.navigation.setParams({ b: 'change by setParams' })
    }, 1000);
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>params.a: {params.a}</Text>
        <Text>params.b: {params.b || 'default'}</Text>
        <Text>{(new Date().getSeconds())}</Text>
        <Button
          onPress={() => {
            navigation.dispatch(this.navigateAction)
            navigation.goBack()
          }}
          title="Go Back with params"
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

const RootNavigator = StackNavigator(NavigatorSetting);
// const RootNavigator = TabNavigator(NavigatorSetting);
// const RootNavigator = DrawerNavigator(NavigatorSetting);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default RootNavigator;
