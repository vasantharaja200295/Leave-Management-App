import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./DashBoard/Screens/Dashboard";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default Home;
