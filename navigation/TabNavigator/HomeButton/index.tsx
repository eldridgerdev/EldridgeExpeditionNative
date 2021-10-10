import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { GestureResponderEvent, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import sharedStyles from '../styles'
import { FontAwesome } from '@expo/vector-icons'

interface IHomeButtonProps {
    onPress?: () => void
}

const HomeButton: React.FC<IHomeButtonProps> = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.touchableOpacity,
                ...sharedStyles.shadow
            }}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default HomeButton