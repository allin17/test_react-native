import {useEffect, useState} from 'react';

import {
    Dimensions,
    FlatList,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Platform, View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AddTodoModal from './AddTodoModal';

//import images
import addIcon from '../assets/AddNewTask.png';
import deleteIcon from '../assets/delete.png';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const TodoList = () => {

    const [isModalVisible, setIsModalVisible] = useState('');

    const [data, setData] = useState([
            {title: 'Сделать тестовое', isSelected: false},
            {title: 'Сдать тестовое', isSelected: true},
            {title: 'Начать зарабатывать', isSelected: false}
            ]);

    const ShowItem = ({item}) => {
        //const [isSelected, setSelection] = useState(false);

        const renderLeftRight = () => {
            return <SafeAreaView>
                <Image
                    source={deleteIcon}
                    style={styles.deleteIcon}
                />
            </SafeAreaView>;
        };

        return (
            <GestureHandlerRootView>
            <Swipeable
                renderLeftActions={renderLeftRight}
                renderRightActions={renderLeftRight}
                onSwipeableOpen={() => {
                    setData((data) => data.filter((el) => {
                        return el.title !== item.title;
                    }));
                }}
            >
                <SafeAreaView style={{
                    ...styles.todoContainer,
                    shadowOpacity: item.isSelected ? 1 : 0,
                    elevation: item.isSelected ? 5 : 0,
                }}>
                    <CheckBox
                        style={styles.checkbox}
                        value={item.isSelected}
                        onValueChange={() => {
                            setData((prevState) => {
                                return [...prevState]
                            })
                            item.isSelected = !item.isSelected
                        }}
                        boxType={'square'}
                        onAnimationType={'bounce'}
                        onFillColor={'#222F3E'}
                        onTintColor={'#222F3E'}
                        onCheckColor={'white'}
                        tintColor={'#222F3E'}
                    />
                    <Text
                        style={{
                            textDecorationLine: item.isSelected ? 'line-through' : 'none',
                            textDecorationStyles: 'solid',
                            color: item.isSelected ? '#999999' : '#222F3E',
                            fontSize: 26,
                            padding: 6,
                        }}
                    >
                        {item.title}
                    </Text>
                </SafeAreaView>
            </Swipeable>
            </GestureHandlerRootView>
                );
    };

    return (
        <SafeAreaView style={styles.todosContainer}>
            <FlatList
                data={data}
                renderItem={(item) => {
                    item = item.item
                    return <ShowItem item={item}/>;
                }}
                keyExtractor={(item, index) => item+index}
            />

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    setIsModalVisible(true);
                }}
            >
                <Image
                    style={styles.addIcon}
                    source={addIcon}
                />
            </TouchableOpacity>

            <AddTodoModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                data={data}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        height: Platform.OS ? '50%' : '80%',
        marginLeft: 10,
    },
    todosContainer: {
        flex: 1,
    },
    addIcon: {
        height: 70,
        width: 70,
    },
    addButton: {
        alignItems:'center',
        height: 70,
        width: 70,
        borderRadius: 50,
        bottom: height * 0.0346,
        left: width * 0.7,
        right: width * 0.096,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginLeft: 10,
    },
    todoContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#bab8b8',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: "#FFF",
        ...Platform.select({
            ios: {
                shadowOffset: {width: 1, height: 3},
                shadowOpacity: 1,
                shadowColor: "#ccc",
            },
            android: {

            }
        }),
        marginVertical: 8
    },
    deleteIcon: {
        width: 30,
        height: 30,
        margin: 15
    },
});

export default TodoList;
