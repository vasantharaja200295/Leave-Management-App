import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "../utils/Icon";


const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView className="flex flex-col p-4 items-center justify-center h-screen w-screen dark:bg-slate-800">
      <Text className=" text-3xl mb-8 font-semibold">Leave Management App</Text>
      <KeyboardAvoidingView className="bg-red-500 p-5 w-full h-max  flex items-center justify-start rounded-md shadow-sm">
        <Text className="text-2xl font-bold mb-3 text-white text-center">Welcome</Text>
        <View className="flex flex-col w-full">
            <Text className=" text-md my-2">Email</Text>
          <TextInput placeholder="Enter Email" className="bg-white px-4 w-full rounded-md h-10 justify-center"/>
        </View>
        <View className="flex flex-col w-full">
            <Text className=" text-md my-2">Password</Text>
          <TextInput placeholder="Enter Password" secureTextEntry className="bg-white px-4 w-full rounded-md h-10 justify-center"/>
        </View>
        <TouchableOpacity className="bg-white w-full h-10 mt-5 rounded-md flex flex-row  items-center justify-center "
        onPress={() => navigation.navigate("Home")}>
            <Text className="text-md font-semibold">Login</Text>
            <Icon name="ArrowRight" color="#000" size={20} customClassName="ml-2 mt-0.5"/>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Login;
