import { StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const style = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        // bottom: 25,
        // left: 20,
        // right: 20,
        backgroundColor: '#ffffff',
        height: 90,
        // borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    }
})

 export default style