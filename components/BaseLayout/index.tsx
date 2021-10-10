import { ApolloError } from '@apollo/client'
import React from 'react'
import { Image, ImageStyle, StyleProp, Text, View } from 'react-native'

import styles from './ styles'


interface IBaseLayoutProps {
    description?: string
    subDescription?: string
    image?: string
    aspectRatio?: number,
    imageStyle?: StyleProp<ImageStyle>
}

export const LayoutImage: React.FC<IBaseLayoutProps> = (props) => {
    const { image, aspectRatio, description, imageStyle = {}, children } = props

    return (
        <View>
                {image &&                
                    <View style={styles.imageContainer}>
                        <Image
                            // resizeMode='cover'
                            source={{uri: image}}
                            style={[{
                                ...styles.image,
                                width: undefined,
                                height: undefined,
                                aspectRatio,
                                resizeMode: 'contain'
                            }, imageStyle]}
                        /> 
                    </View>
                }
                {description &&
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{description}</Text>
                    </View>
                }
                { children }
        </View>
    )
}

const BaseLayout: React.FC<IBaseLayoutProps> = (props) => {
    const { children, ...otherProps } = props
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
            <LayoutImage {...otherProps}>
                <View style={styles.mainContainer}>
                    { children }
                </View>
            </LayoutImage>
        </View>
    </View>
    )
}

export default BaseLayout