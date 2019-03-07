import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{'key':'sleep'}]
        }
    }

    renderItem = ({item}) => {
        return (
            <Text style={styles.item}>{item.key}</Text>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })