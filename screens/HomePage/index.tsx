import React from 'react'
import { useQuery } from '@apollo/client'
import { Text, View } from 'react-native'

import { HOMEPAGE_DATA } from './queries'
import BaseLayout from '../../components/BaseLayout'

const HomePage = () => {
    const { loading, error, data } = useQuery(HOMEPAGE_DATA)
    
    if (loading) {
        return (
            <View>
                <Text>Loading!</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View>
                <Text>There is an error! {error.message}</Text>
            </View>
        )
    }

    const { description, Page } = data.indexPage

    return (
        <BaseLayout
            aspectRatio={3.2}
            description={description}
            image={Page.HeroImage.url}
        >
            <Text>This is the home page</Text>
        </BaseLayout>
    )
}

export default HomePage