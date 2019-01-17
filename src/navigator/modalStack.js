import { createStackNavigator } from "react-navigation";
import {
  AddContent,
  DetailContent,
  ModifyContent,
  ResetPassword
} from "../models";
import { TabNavigator } from "./tabNavigator";

const ModalStack = createStackNavigator(
  {
    Main: TabNavigator,
    AddContent: AddContent,
    DetailContent: DetailContent,
    ModifyContent: ModifyContent,
    ResetPassword: ResetPassword
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export { ModalStack };
