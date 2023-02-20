import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    text: string;
}

function Task(props: Props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    itemLeft: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemText: {
        maxWidth: "80%",
    },
})

export default Task;