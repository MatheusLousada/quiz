import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../../styles/questions';
import * as Animatable from 'react-native-animatable';
import { quiz } from '../../utils/Content';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function Questions() {

    const navigation = useNavigation();
    const { setUserAnswers } = useContext(AuthContext);
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const question = quiz[currentQuestion];
    const options = question.options;

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);
        setAnswers({
            ...answers,
            [currentQuestion]: selectedOption
        });
    };

    const handleNextQuestion = () => {

        if (!selectedOption) {
            Alert.alert('Atenção', 'Selecione uma resposta antes de prosseguir.');
            return;
        }
    
        const existingAnswer = answers[currentQuestion];
        if (existingAnswer !== undefined) {
            setAnswers({
                ...answers,
                [currentQuestion]: selectedOption,
            });
        } else {
            setAnswers({
                ...answers,
                [currentQuestion]: selectedOption,
            });
        }
    
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(answers[currentQuestion + 1] || null);
    };
    

    const handlePreviousQuestion = () => {
        const previousQuestion = currentQuestion - 1;
        const previousAnswer = answers[previousQuestion];
        if (previousAnswer !== undefined) {
        setSelectedOption(previousAnswer);
        } else {
        setSelectedOption(null);
        }
        setCurrentQuestion(previousQuestion);
    };
    
    const handleOptionStyle = (option) => {
        let style = {
        backgroundColor: '#ddd',
        padding: 10,
        marginVertical: 10,
        minWidth: '80%',
        borderRadius: 10,
        color: 'black',
        };
        if (selectedOption === option) {
        style.backgroundColor = '#f44033';
        style.color = '#fff';
        }
        return style;
    };

    return (
        <Animatable.View style={styles.container} animation={"fadeInLeft"} delay={100}>
        <Text  style={styles.question}>
            {question.number}. {question.question}
        </Text>
        {options.map((option) => (
            <TouchableOpacity
            key={option}
            style={handleOptionStyle(option)}
            onPress={() => handleAnswer(option)}
            >
            <Text style={{ fontSize: 16, color: handleOptionStyle(option).color }}>
                {option}
            </Text>
            </TouchableOpacity>
        ))}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            {currentQuestion !== 0 && (
            <TouchableOpacity
                style={{
                backgroundColor: '#f2f2f2',
                padding: 10,
                marginHorizontal: 10,
                minWidth: '40%',
                borderRadius: 10,
                }}
                onPress={handlePreviousQuestion}
            >
                <Text style={styles.buttonsAnterior}>Anterior</Text>
            </TouchableOpacity>
            )}
            {currentQuestion !== quiz.length - 1 ? (
            <TouchableOpacity
                style={{
                backgroundColor: '#f2f2f2',
                padding: 10,
                marginHorizontal: 10,
                minWidth: '40%',
                borderRadius: 10,
                }}
                onPress={handleNextQuestion}
            >
                <Text style={styles.buttons}>Próxima</Text>
            </TouchableOpacity>
            ) : (
            <TouchableOpacity
                style={{
                backgroundColor: '#f2f2f2',
                padding: 10,
                marginHorizontal: 10,
                minWidth: '50%',
                borderRadius: 10,
                }}
                onPress={() => {
                    if (!selectedOption) {
                        Alert.alert('Atenção', 'Selecione uma resposta antes de prosseguir.');
                        return;
                    }
                    setUserAnswers(answers)
                    navigation.navigate('Result')
                }}
            >
                <Text style={styles.buttonsFinalizar}>Finalizar</Text>
            </TouchableOpacity>
            )}
        </View>
        </Animatable.View>
    );
}
