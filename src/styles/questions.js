import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    question: {
        width: "90%",
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 20,
        color: '#f44033'
    },
    buttons: {
        width: '100%',
        backgroundColor: '#f44033',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    buttonsFinalizar: {
        width: '80%',
        backgroundColor: '#f44033',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    buttonsAnterior: {
        width: '100%',
        backgroundColor: 'gray',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
})