import React from 'react'
import { useWindowDimensions, Text } from 'react-native'

import RenderHtml from 'react-native-render-html'
import { ITextBlockProps } from './types'

const TextBlock: React.FC<ITextBlockProps> = ({ text }) => {
    const { width } = useWindowDimensions()
    return (
        <RenderHtml
            contentWidth={ width }
            source={{ html: text }}
        />
    )
}

export default TextBlock