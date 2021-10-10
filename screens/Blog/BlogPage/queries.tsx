import { gql } from '@apollo/client'

const GET_BLOG_POST = gql`
    query ($id:ID!) {
        blogPost(id: $id) {
            id
            Description
            Title
            text
            BlogContent {
                ...on ComponentPostsBlogPostText {
                    __typename
                    id
                    Text
                }
                ...on ComponentPostsBlogPostImage {
                    __typename
                    id
                    Image {
                        url
                    }
                    ImageCaption
                    ImageWidth
                }
                ...on ComponentPostsAffiliateLink {
                    __typename
                    id
                    AffiliateLinkText
                    Hide
                    BlockText
                }
            }
            HeroImage {
                url
            }
        }
    }
`

export default GET_BLOG_POST