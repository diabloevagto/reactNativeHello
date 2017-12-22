
import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    Button,
} from 'react-native'

export default class AsyncStorageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    async componentWillMount() {
        let restoreName = await AsyncStorage.getItem('name');
        this.setState({ name: restoreName });
    }

    async saveName(name) {
        await AsyncStorage.setItem('name', this.state.name);
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#9DD6EB',
                }}
            >
                <Text
                    style={{
                        fontSize: 40
                    }}
                >store: {this.state.name}</Text>
                <TextInput
                    style={{
                        fontSize: 40,
                        textAlign: 'center',
                    }}
                    defaultValue={this.state.name}
                    placeholder='         input         '
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <Button
                    onPress={(value) => this.saveName()}
                    title="save"
                />
            </View>
        );
    }
}
