import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    message:{
        fontSize: 30,
        fontWeight: 500,
        color: 'white'
    },
    containerHeader:{
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f44033',
        borderBottomLeftRadius: 80
    },
    containerForm:{
        flex: 0.8,
        width: '100%',
        paddingHorizontal: 40,
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: '-55px'
    },
    label:{
        marginTop: 50,
        fontSize: 20,
        fontWeight: 600,
        color: '#f44033'
    },
    input:{
        fontSize: 20,
        fontWeight: 600,
        width: '100%',
        borderBottomWidth: '1px',
        borderBottomColor: '#f44033',
        color: '#f44033',
        outline: 'none',
        outlineStyle: 'none'
    },
    containerButtons:{
        flex: 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 80,
        backgroundColor: '#f44033'
    },
    buttonLogin:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 30,
    },
    buttonLoginText:{
        fontSize: 25,
        fontWeight: 600,
        color: 'white',
    }
})