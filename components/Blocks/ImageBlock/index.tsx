import React from 'react'
import { Image, View } from 'react-native'
import getWidth from './getWidth'
import styles from './styles'
import { IImageBlockProps } from './types'

const ImageBlock: React.FC<IImageBlockProps> = ({ uri, width }) => {
    return (
        <View style={styles.imageBlockContainer}>
            <Image
                style={{
                    ...styles.image,
                    width: getWidth(width)
                }}
                source={{ uri }}
            />
        </View>
    )
}

export default ImageBlock