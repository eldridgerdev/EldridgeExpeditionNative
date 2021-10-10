import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames'

export default {
    container: tw`flex flex-col w-full h-full`, // h-screen`,
    contentContainer: tw`pb-7 w-full h-full`, // overflow-y-auto`,
    imageContainer: tw`w-full`,
    image: tw``,
    descriptionContainer: {
        backgroundColor: '#D96262',
        ...(tw`py-3 text-blue-500`)
    },
    descriptionText: tw`text-center font-bold`,
    mainContainer: tw`pt-2 pb-60`
}