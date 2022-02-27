import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';

type OnboardingScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Onboarding'
>;

const Onboarding: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <View>
                <Text>Onboarding</Text>
            </View>
            <View>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
});

export default Onboarding;
