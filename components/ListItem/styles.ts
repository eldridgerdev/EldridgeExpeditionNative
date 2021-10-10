import { StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

// export default {
// }

const styles = StyleSheet.create({
    container: tw`justify-center items-center border-b-2 py-2`,
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        ...tw`text-xl`
    },
    description: {
        ...tw`px-5`
    },
    textContainer: {
        ...tw` px-2 items-center text-center`
    }
})

export default styles