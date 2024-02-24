import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./DashBoard/Screens/Dashboard";
import Leaves from "./DashBoard/Screens/Leaves";
import Profile from "./DashBoard/Screens/Profile";
import Onduties from "./DashBoard/Screens/Ods";
import Settings from "./DashBoard/Screens/Settings";
import Icon from "../utils/Icon";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle:"Home",
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="Home"
                size={24}
                color={tabInfo.focused ? "#DC2626" : "#8e8e93"}
              />
            );
          },
        }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle:"Leaves",
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="Clock"
                size={24}
                color={tabInfo.focused ? "#DC2626" : "#8e8e93"}
              />
            );
          },
        }}
        name="leaves"
        component={Leaves}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle:"On Duties",
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="GraduationCap"
                size={28}
                color={tabInfo.focused ? "#DC2626" : "#8e8e93"}
              />
            );
          },
        }}
        name="od"
        component={Onduties}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle:"Settings",
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="Settings"
                size={24}
                color={tabInfo.focused ? "#DC2626" : "#8e8e93"}
              />
            );
          },
        }}
        name="settings"
        component={Settings}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerTitle:"Profile",
          tabBarIcon: (tabInfo) => {
            return (
              <Icon
                name="CircleUserRound"
                size={24}
                color={tabInfo.focused ? "#DC2626" : "#8e8e93"}
              />
            );
          },
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Home;
