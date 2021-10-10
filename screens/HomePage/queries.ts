import { gql } from "@apollo/client";

export const HOMEPAGE_DATA = gql`
  {
    indexPage {
      description
      Page {
        SiteTitle
        HeroImage {
          url
        }
      }
    }
    featuredPost {
        blog_post {
            id
        }
    }
  }
`