import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textInput: {
    height: 40,
    textAlign: 'center',
  },
  userDate: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: 25,
  },
}

class User {
  constructor(name = '', phone = '') {
    this.name = name;
    this.phone = phone;
  }
  isComplete() {
    return this.name !== '' && this.phone !== '';
  }
}

export default class basicSwiperPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: new User(),
      emergencyUser: new User(),
    }
  }

  async componentWillMount() {
    let restoreName = JSON.parse(await AsyncStorage.getItem('name'));
    this.setState({
      userName: new User(restoreName.userName.name, restoreName.userName.phone),
      emergencyUser: new User(restoreName.emergencyUser.name, restoreName.emergencyUser.phone),
    })
  }

  genTextInput(userType) {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='姓名'
          defaultValue={this.state[userType].name}
          onChangeText={(text) => this.setState({ [userType]: new User(text, this.state[userType].phone) })}
        />
        <TextInput
          style={styles.textInput}
          placeholder='電話'
          defaultValue={this.state[userType].phone}
          onChangeText={(text) => this.setState({ [userType]: new User(this.state[userType].name, text) })}
          keyboardType='phone-pad'
        />
      </View>
    )
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>輸入你的資料</Text>
          {this.genTextInput('userName')}
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>輸入緊急聯絡人資料</Text>
          {this.genTextInput('emergencyUser')}
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>你的資料</Text>
          <Text style={styles.userDate}>{this.state.userName.name}</Text>
          <Text style={styles.userDate}>{this.state.userName.phone}</Text>
          <Text style={styles.text}>緊急聯絡人資料</Text>
          <Text style={styles.userDate}>{this.state.emergencyUser.name}</Text>
          <Text style={styles.userDate}>{this.state.emergencyUser.phone}</Text>
          <Button
            onPress={async () => {
              const jsonDate = JSON.stringify({
                userName: this.state.userName,
                emergencyUser: this.state.emergencyUser,
              })
              await AsyncStorage.setItem('name', jsonDate)
            }}
            title="finish"
            disabled={!this.state.userName.isComplete() || !this.state.emergencyUser.isComplete()}
          />
        </View>
      </Swiper >
    );
  }
}
