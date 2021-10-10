import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames'

const styles = StyleSheet.create({
    imageBlockContainer: {
        ...tw`w-full`
    },
    image: {
        ...tw`w-3/4`,
        aspectRatio: 1
    }
})

export default styles