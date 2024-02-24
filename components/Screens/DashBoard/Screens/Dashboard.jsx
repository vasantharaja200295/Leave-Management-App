import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Dashboard = ({navigation}) => {
  return (
    <View className=" px-4 py-1">
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard