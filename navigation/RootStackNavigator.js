import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutStack from './NavigationLayout'
import FavesStack from './NavigationLayout'
const AppNavigator = createStackNavigator({
    Faves : {
        screen : FavesStack
    },
    About: {
        screen: AboutStack
    }
},
{headerMode: 'none'}
);

export default createAppContainer(AppNavigator);