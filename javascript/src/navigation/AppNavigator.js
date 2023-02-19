import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HelloWorld from '../HelloWorld';
import TodoScreen from '../TodoScreen';

const ScreenNavigator = createBottomTabNavigator(
    {
        HelloWorld: { screen: HelloWorld },
        TodoScreen: { screen: TodoScreen },
    },
);

const AppNavigator = createAppContainer(ScreenNavigator);

export default AppNavigator;