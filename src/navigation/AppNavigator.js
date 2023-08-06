import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import UserEditScreen from '../screens/UserEditScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="UserList">
    <Stack.Screen 
      name="UserList" 
      component={UserListScreen} 
      options={{ title: 'User List' }} 
    />
    <Stack.Screen 
      name="UserDetail" 
      component={UserDetailScreen} 
      options={{ title: 'User Detail' }} 
    />
    <Stack.Screen 
      name="UserEdit" 
      component={UserEditScreen} 
      options={{ title: 'Edit User' }} 
    />
  </Stack.Navigator>
);

export default AppNavigator;
