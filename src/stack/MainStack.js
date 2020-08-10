import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';

export default () => (
    <Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#222'            
        },
        headerTintColor: '#FFF'
    }} >
        <Screen name="List" component={ListScreen} />
        <Screen name="EditNote" component={EditNoteScreen} />
    </Navigator>
)