import {Image, SafeAreaView, StyleSheet} from 'react-native';

import logo from '../assets/Header.png';
import TodoList from '../components/TodoList';
import Loader from '../components/Loader';
import {useState} from 'react';

const Home = ({}) => {
    const [isLoading, setIsLoading] = useState(true);

    //dummy loading
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

    return (
        isLoading ? (
            <Loader />
        ) : (
            <SafeAreaView style={styles.container}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <TodoList/>
            </SafeAreaView>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '25%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    logo: {
        marginBottom: 20,
    },
});

export default Home;
