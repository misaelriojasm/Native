import { createStackNavigator } from "react-navigation";
import { LoginApp, RegisterApp, TermsConditions, WelcomeScreen  } from "../../screens";
import { ModalStack } from './modalStack'

const AppNavigator = createStackNavigator(
  {
    LoginApp: LoginApp,
    RegisterApp: RegisterApp,
    TermsConditions: TermsConditions,
    Welcome: WelcomeScreen,
    TabNavigator: ModalStack
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);

export {AppNavigator}