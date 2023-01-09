import React from 'react';
import {Image, SafeAreaView, ActivityIndicator} from 'react-native';
import logo from '../assets/Header.png'

const Loader = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <Image
                source={logo}
                style={{
                    marginBottom: 30
                }}
            />
            <ActivityIndicator
                size="large"
                color="#FF003C"
            />
        </SafeAreaView>
    );
};

export default Loader;
