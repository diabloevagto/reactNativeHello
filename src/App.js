/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ScrollViewPractice extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          maximumZoomScale={2}
          minimumZoomScale={0.1}
        >
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Image
            source={{ uri: 'https://static.highsnobiety.com/wp-content/uploads/2016/09/07104020/google-maps-pokemon-go-0.jpg' }}
            style={{ width: 960, height: 576 }}
          />
        </ScrollView>
      </View>
    );
  }
}

class ListViewPractice extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    );
  }
}

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      listData: ['a', 'b', 'c', 'd', 'e'],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text>{this.state.text}</Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
        {
          false &&
          <ScrollViewPractice />
        }
        {
          true &&
          <ListViewPractice data={this.state.listData} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    color: 'red',
  }
});
