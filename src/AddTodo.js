import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';



export const AddTodo = (props) => {
    const [value, setValue] = useState('');

    const pressEnter = () => {
        if (value.trim()){
            props.onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Дело не может быть пустым!');
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите значение задания"
                autoCorrect={false}
                autoCapitalize="none"
                // keyboardType="number-pad"//test
            />
            <Button title="Добавить" onPress={pressEnter}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
    },
    button: {

    }
})