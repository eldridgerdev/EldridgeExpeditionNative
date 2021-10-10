import React from 'react'
import styles from './styles'

import { IData } from '../../screens/Blog/BlogList'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

type ListItemProps = IData['blogPosts'][0] &  {
    onItemClick: (name: string) => void
}

const ListItem = ({
    onItemClick,
    Title,
    image,
    Description,
    id
}: ListItemProps) => (
    <TouchableWithoutFeedback onPress={() => onItemClick(id)}>
        <View style={styles.container}>
            <Image
                style={{
                    aspectRatio:1.5,
                    height: 200
                }}
                source={{ uri: image.url }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{Title}</Text>
                <Text style={styles.description}>{Description}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

export default ListItem