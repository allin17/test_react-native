import {useState} from 'react';
import {Modal, Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Platform, View} from 'react-native';
import CustomHeader from './CustomHeader';
import Input from './Input';

const AddTodoModal = ({
                          isModalVisible,
                          setIsModalVisible,
                          data,
                      }) => {
    const [todoText, onChangeTodoText] = useState('');

    return (
        <Modal visible={isModalVisible}>
            <CustomHeader setIsModalVisible={setIsModalVisible}/>
            <SafeAreaView style={styles.modalContainer}>
                <View style={{
                    overflow: 'hidden',
                    paddingBottom: 5,
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Input todoText={todoText} onChangeTodoText={onChangeTodoText}/>
                </View>
                <TouchableOpacity
                    title="Добавить"
                    onPress={() => {
                        if (data.some(e => e.title === todoText)) {
                            Alert.alert(
                                "Oops..",
                                "It seems like you already have this todo",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                    },
                                    { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            );
                            return
                        }
                        data.push({title: todoText, isSelected: false});
                        onChangeTodoText('');
                        setIsModalVisible(false);
                    }}
                    disabled={!todoText}
                    style={{
                        ...styles.button,
                        opacity: todoText ? 1 : 0.4,
                    }}
                >
                    <Text style={styles.text}>Добавить</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#222F3E',
        borderWidth: 2,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 26,
    },

});


export default AddTodoModal;
