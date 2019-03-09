import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import TodoList from './components/TodoList';

export default class TodoScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{'key':'sleep'}]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Todo', style: { color: '#fff'}}}
                    containerStyle={styles.header}
                />
                <TodoList
                    items={this.state.items}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#303'
    }
});