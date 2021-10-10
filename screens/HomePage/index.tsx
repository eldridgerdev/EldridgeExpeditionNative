import React from 'react'
import { ApolloProvider, useQuery, gql } from '@apollo/client'
import { Image, Text, View } from 'react-native'

import { HOMEPAGE_DATA } from './queries'
import styles from './styles'
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

    // const featuredPost = data.featuredPost.blog_post
    return (
        <BaseLayout
            description={description}
            image={Page.HeroImage.url}
        >
            <Text>This is the home page</Text>
        </BaseLayout>

        // <Text>{JSON.stringify(data)}</Text>
    )
}

export default HomePage