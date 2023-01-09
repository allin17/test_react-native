import React from 'react';
import {Platform, TextInput, StyleSheet} from 'react-native';

const Input = ({todoText, onChangeTodoText}) => {
    return (
        <TextInput
            autoFocus={true}
            style={{
                ...styles.input,
                shadowColor: Platform.OS == 'ios' ? '#919090' : '#000',
            }}
            value={todoText}
            onChangeText={onChangeTodoText}
            placeholder={'Текст новой задачи'}
        />
    );
};

const styles = StyleSheet.create(({
    input: {
        borderWidth: 1,
        borderColor: '#bab8b8',
        padding: 8,
        paddingLeft: 14,
        fontSize: 28,
        width: '90%',
        borderRadius: 10,
        marginBottom: '4%',
        ...Platform.select({
            ios: {
                shadowOffset: {height: 5},
                shadowOpacity: 1,
            },
            android: {
                elevation: 10,
            }
        }),
        backgroundColor: "#FFF",
        marginVertical: 10,
    },
}))

export default Input;
