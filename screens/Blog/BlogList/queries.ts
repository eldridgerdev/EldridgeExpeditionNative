import { gql } from "@apollo/client";

export const BLOGLIST_DATA = gql`
{
    blogListPage {
        heroImage {
            url
        }
    }

    blogPosts(sort:"published_at:DESC") {
        Title
        id
        image {
            url
        }
        Description
    }
}
`