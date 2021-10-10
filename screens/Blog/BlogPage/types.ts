import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../BlogStackNavigator"

export type renderItemFactoryProps = {
    layoutImage?: string
    description?: string
}

export type BlogPageProps =  NativeStackScreenProps<RootStackParamList, 'Post'>

export enum ImageWidthOptions {
    SMALL = 'FiftyPercent',
    MEDIUM = 'SeventyFivePercent',
    LARGE = 'OneHundredPercent'
}

type DynamicZoneBase = {
    id: string
    __typename: string
}

export type DynamicZoneText = DynamicZoneBase & {
    Text: string
}

export type DynamicZoneImage = DynamicZoneBase & {
    Image: {
        url: string
    }
    ImageCaption: string
    ImageWidth: ImageWidthOptions
}

export type DynamicZoneAffiliate = DynamicZoneBase & {
    AffiliateLinkText: string
    Hide: boolean
    BlockText: string
}

export type DynamicZone = DynamicZoneBase | DynamicZoneAffiliate | DynamicZoneImage | DynamicZoneText

export interface IBlogPost {
    blogPost: {
        id: string
        Description: string
        Title: string
        text?: string
        BlogContent?: [DynamicZone]
        HeroImage?: {
            url: string
        }

    }
}

