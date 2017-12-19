import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
}

export default class basicSwiperPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                showsButtons
                loop={false}
                onIndexChanged={() => this.setState({ counter: this.state.counter + 1 })}
            >
                <View style={styles.slide1}>
                    <Text>{this.state.counter}</Text>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text>{this.state.counter}</Text>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text>{this.state.counter}</Text>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper >
        );
    }
}
