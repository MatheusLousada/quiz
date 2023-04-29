import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerForm:{
        flex: 0.7,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 250
    },
    logoQuiz:{

        width: 300, 
        height: 300
    },
    button:{
        width: '100%',
        backgroundColor: '#f44033',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 30,
        color: 'white'
    }
})