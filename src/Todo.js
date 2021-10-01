import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';



export const Todo = (props) => {
    const onPress = () => {
        console.log("Hello todo! id = ", props.todo.id);
    }
    const onLongPress = () => {
        props.onRemove(props.todo.id);
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} onLongPress={onLongPress}>
            <View style={styles.todo}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
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