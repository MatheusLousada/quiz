import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/welcome';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
            <Animatable.Image
                animation={'flipInY'}
                source={require('../../assets/quiz-logo.png')} 
                style={styles.logoQuiz}
            />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Signin')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}