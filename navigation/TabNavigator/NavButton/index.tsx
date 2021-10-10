import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import sharedStyles from '../styles'
import { FontAwesome } from '@expo/vector-icons'
import style from '../styles'

interface ITabBarIconGeneratorProps {
    text: string
    icon?: 'coffee' | 'home' | 'star' | 'glass'
}

interface ITabBarIconProps {
    focused: boolean
}

const tabBarIconGenerator = ({ text, icon }: ITabBarIconGeneratorProps): (props: ITabBarIconProps) => JSX.Element => {
    return ({ focused }: ITabBarIconProps) => {
        const color = focused ? '#e32f45' : '#748c94'
        return (
            <View style={styles.tabBarItem}>
            {icon && <FontAwesome name={icon} size={25} color={color} />}
                <Text
                    style={{
                        color,
                        fontSize: 12
                    }}
                >
                    {text}
                </Text>
            </View>
        )
    }
}

export default tabBarIconGenerator