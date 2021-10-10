import React from 'react'
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import styles from './styles'
import HomePage from '../../screens/HomePage'
import { FontAwesome } from '@expo/vector-icons'
import HomeButton from './HomeButton'
import BlogListPage from '../../screens/Blog/BlogList'
import tabBarIconGenerator from './NavButton'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BlogStack from '../../screens/Blog/BlogStackNavigator'

const Tab = createBottomTabNavigator()


const TabNavigator: React.FC = ({ children }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle
            }}
        >
            {children}
        </Tab.Navigator>
    )
}

const Tabs = () => (
    <TabNavigator>
        <Tab.Screen name='Blog' component={BlogStack} options={{
            tabBarIcon: tabBarIconGenerator({
                text: 'BLOG',
                icon: 'coffee'
            })
        }}/>
        <Tab.Screen
            name='Home'
            component={HomePage}
            options={{
                tabBarIcon: () => (
                    <FontAwesome name='home' size={30} color='white' />
                ),
                tabBarButton: (props) => <HomeButton {...props} />
            }}
        />
        <Tab.Screen name='Blog2' component={BlogStack} options={{
            tabBarIcon: tabBarIconGenerator({
                text: 'BLOG',
                icon: 'star'
            })
        }} />
    </TabNavigator>
)

export default Tabs