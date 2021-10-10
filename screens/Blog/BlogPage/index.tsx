import { useQuery } from '@apollo/client'
import React from 'react'
import { FlatList, Text, View} from 'react-native'

import { LayoutImage } from '../../../components/BaseLayout'
import TextBlock from '../../../components/Blocks/TextBlock'
import ImageBlock from '../../../components/Blocks/ImageBlock'
import GET_BLOG_POST from './queries'
import {
    BlogPageProps,
    renderItemFactoryProps,
    IBlogPost,
    DynamicZoneText,
    DynamicZone,
    DynamicZoneImage
} from './types'
import styles from './styles'

// Generate a renderItem function using the layout image and description from the blogpost
const renderItemFactory = ({
    layoutImage,
    description
}: renderItemFactoryProps) => (item: DynamicZone) => {
    switch(item.__typename) {
        case 'layoutImage': {
            return (
                <View style={styles.layoutImageContainer}>
                    <LayoutImage
                        image={layoutImage}
                        imageStyle={styles.layoutImage}
                        description={description}
                        aspectRatio={1.5}
                    ></LayoutImage>
                </View>
            )
        }
        case 'ComponentPostsBlogPostText': {
            return (
                <View style={styles.textBlockContainer}>
                    <TextBlock text={(item as DynamicZoneText).Text} />
                </View>
            )
        }

        case 'ComponentPostsBlogPostImage': {
            const imageItem = item as DynamicZoneImage
            return (
                <ImageBlock
                    uri={imageItem.Image.url}
                    width={imageItem.ImageWidth}
                />
            )
        }

        case 'ComponentPostsAffiliateLink': {
            return <Text>Affiliate Link will be here later</Text>
        }
    }

    return (
        <Text>temp</Text>
    )
}

const BlogPage = ({ route }: BlogPageProps) => {
    const { loading, error, data } = useQuery<IBlogPost>(GET_BLOG_POST, {
        variables: {
            id: route?.params.postId
        }
    })

    if (loading) {
        return <Text>loading</Text>
    }

    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    if (!data) {
        return <Text>No data</Text>
    }

    const { blogPost } = data

    if (!blogPost) {
        return <Text>Where's the blog post?</Text>
    }

    const image = blogPost.HeroImage && blogPost.HeroImage.url
    const renderItem = renderItemFactory({
        layoutImage: image,
        description: blogPost.Title
    })

    // Add layout image to the beginning of the content
    //    so that everything is scrollable within the flatlist
    const content = [
        {
            __typename: 'layoutImage',
            id: 'layoutID'
        },
        ...(blogPost.BlogContent || [])
    ]

    return (
        <View style={styles.pageContainer}>
            {content &&
                <FlatList
                    contentContainerStyle={styles.listContentContainer}
                    data={content}
                    keyExtractor={item => `${item.__typename}-${item.id}`}
                    renderItem={({ item }) => renderItem(item)}
                    ListFooterComponent={<View style={styles.listFooter} />}
                />
            }
        </View>
    )
}

export default BlogPage