import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = () => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
});

export default Home;
