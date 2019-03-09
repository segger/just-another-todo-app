import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';

class TodoScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Todo', style: { color: '#fff'}}}
                    containerStyle={styles.header}
                />
                <TodoList
                    items={this.props.todo.items}
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

const mapStateToProps = (state) => {
    const { todo } = state;
    return { todo };
};

export default connect(mapStateToProps)(TodoScreen);