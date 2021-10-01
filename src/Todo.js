import React from "react";
import { StyleSheet, Text, View } from 'react-native';



export const Todo = (props) => {
    return (
        <View style={styles.todo}>
            <Text>{props.todo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 15,
        marginBottom: 10
    }
})