import { createMaterialBottomTabNavigator  } from "react-navigation-material-bottom-tabs";
import { HomeScreen, FavoriteScreen, AccountScreen } from "../../screens";

const TabNavigator = createMaterialBottomTabNavigator (
    {
      HomeScreen: HomeScreen,
      FavoriteScreen: FavoriteScreen,
      AccountScreen: AccountScreen
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

  export {TabNavigator}