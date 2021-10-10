import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'

import BlogPost from './BlogPage'
import BlogList from './BlogList'

export type RootStackParamList = {
    Blog: undefined
    Post: { postId: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const BlogNavigator = () => (
    <Stack.Navigator
        initialRouteName='Blog'
    >
        <Stack.Screen
            name='Blog'
            component={BlogList}
        />
        <Stack.Screen
            name='Post'
            component={BlogPost}
        />
    </Stack.Navigator>
)

export default BlogNavigator