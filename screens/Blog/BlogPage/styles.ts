import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames'

const styles = StyleSheet.create({
    layoutImageContainer: {
        ...tw`w-full`
    },
    layoutImage: {
        ...tw`w-full`
    },
    textBlockContainer: {
        width: '90%'
    },
    pageContainer: {
        ...tw`flex`
    },
    listContentContainer: {
        ...tw`justify-center items-center`,
        marginBottom: 500
    },
    listFooter: {
        height: 130
    }
})

export default styles