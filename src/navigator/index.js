import { createAppContainer } from "react-navigation";

import { AppNavigator } from "./appNavigator";

const AppContainer = createAppContainer(AppNavigator);

export { AppContainer };
