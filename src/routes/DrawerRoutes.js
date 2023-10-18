
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/Home'
import ListaTarefas from '../screens/ListaTarefas/ListaTarefas'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Tarefas'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Tarefas" component={ListaTarefas} />
        </Drawer.Navigator>

    )
}