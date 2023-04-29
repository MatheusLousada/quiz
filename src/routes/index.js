import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f44033',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
            <Stack.Screen 
                name='Signin'
                component={Signin}
            />
            <Stack.Screen 
                name='Questions'
                component={Questions}
            />
            <Stack.Screen 
                name='Result'
                component={Result}
            />
        </Stack.Navigator>
    )
}