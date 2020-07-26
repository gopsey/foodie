import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
    {
        SearchScreen: SearchScreen,
        RestaurantScreen: RestaurantScreen
    },
    {
        initialRouteName: 'SearchScreen',
        defaultNavigationOptions: {
            title: 'Foodie'
        }
    }
);

export default createAppContainer(navigator);
