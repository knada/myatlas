import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../models/hooks';
import { selectData } from '../models/temp/tempModel';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = () => {
    const tempReduxData = useAppSelector(selectData);

    return (
        <SafeAreaView style={styles.homeContainer}>
            <View>
                <Text>Home</Text>
            </View>
            <View>
                <Text>{tempReduxData}</Text>
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
