import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import backButton from '../assets/AppBar.png';

const CustomHeader = ({setIsModalVisible}) => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Image
                    source={backButton}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                Вернуться назад
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        marginLeft: 12,
    },
    headerText: {
        fontSize: 26,
        color: '#999999',
    }
});


export default CustomHeader;
