import { createStackNavigator } from '@react-navigation/stack';
import {LoginPage} from "../screen/LoginPage";
import {Signup} from '../screen/Signup';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();


export const CustomStackNavigation=()=>{
    return <NavigationContainer><Stack.Navigator initialRouteName="signup"  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="login" component={LoginPage}/>

    </Stack.Navigator>
    </NavigationContainer>
}