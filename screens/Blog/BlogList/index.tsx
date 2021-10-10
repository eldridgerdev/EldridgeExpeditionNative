import { QueryResult, useQuery } from '@apollo/client'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import BaseLayout from '../../../components/BaseLayout'
import ListItem from '../../../components/ListItem'

import { BLOGLIST_DATA } from './queries'

export interface IData {
    blogListPage: {
        heroImage: {
            url: string
        }
    }
    blogPosts: [{
        Title: string
        id: string
        image: {
            url: string
        }
        Description: string
    }]
}

interface IPost {
    Title: string
}

interface IQueryResults extends QueryResult  {
    data: IData
}

const BlogListPage = ({ navigation }: { navigation: any }) => {
    const { data, loading, error }: IQueryResults = useQuery(BLOGLIST_DATA)
    
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
    return (
        <BaseLayout
            description='Here are my blog posts'
            image={data.blogListPage.heroImage.url}
        >
            <FlatList
                style={{
                    flexGrow: 1,
                    // height: 400
                }}
                data={data.blogPosts}
                renderItem={({ item }) => (
                    <ListItem
                        onItemClick={(id) => navigation.navigate('Post', {
                            postId: id
                        })}
                        {...item}
                    />
                )}
                keyExtractor={post => post.id}
            />
            {/* {
                data.blogPosts.map(post => <Text>{post.Title}</Text>)
            } */}
        </BaseLayout>
    )
}

export default BlogListPage